#!/usr/bin/env bash
# Build the Dejtonska igra card game as static files for /igre/dejtonska-igra/
# and copy them into the site. Its repository (klosaer/card-game) is private,
# so the Pages workflow cannot build it; run this locally when the game changes
# and commit the result.
#
# The game's own checkout is never modified: its committed HEAD is cloned into
# a temporary directory, the build configuration is replaced there, and the
# installed node_modules are only read.
#
# Usage: .github/scripts/build-dejtonska-igra.sh [path-to-card-game-checkout]
set -euo pipefail

src="${1:-$HOME/projects/klosaer/card-game}"
site="$(cd "$(dirname "$0")/../.." && pwd)"
dest="$site/files/igre/dejtonska-igra"
base="/igre/dejtonska-igra"

[ -d "$src/.git" ] || { echo "no git checkout at $src" >&2; exit 1; }
[ -d "$src/node_modules" ] || { echo "run npm install in $src first" >&2; exit 1; }

work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

git clone --quiet --local --no-hardlinks "$src" "$work/game"
ln -s "$src/node_modules" "$work/game/node_modules"

cat > "$work/game/svelte.config.js" <<CONFIG
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapterStatic({ pages: 'site-build', assets: 'site-build', fallback: 'index.html', strict: false }),
		paths: { base: '$base' },
		appDir: 'app'
	}
};
CONFIG

# The game refers to its seal image from the site root ("/icon-192.png"),
# which misses under a base path. Every page sits at the same level under the
# base, so a relative reference resolves correctly; the game repository keeps
# its own form.
grep -rl 'src="/icon-192.png"' "$work/game/src" | xargs -r sed -i 's|src="/icon-192.png"|src="icon-192.png"|g'

# The manifest has the same root-absolute paths: its icons 404 and an installed
# copy would open the site's homepage. Paths in a manifest resolve against the
# manifest's own URL, so relative ones stay under the base.
sed -i -e 's|"start_url": "/"|"start_url": "./", "scope": "./"|' \
  -e 's|"src": "/icon-|"src": "icon-|g' "$work/game/static/manifest.json"

# The layout widens /play-v4 by matching the pathname from the root, which
# under the base path is "$base/play-v4"; match the segment anywhere instead.
sed -i "s|page.url.pathname.startsWith('/play-v4')|page.url.pathname.includes('/play-v4')|" "$work/game/src/routes/+layout.svelte"

# The native apps lock zoom; on the web that blocks pinch-zoom for people who
# need it, so the web edition leaves zoom to the browser.
sed -i 's|, maximum-scale=1, user-scalable=no||' "$work/game/src/app.html"

(cd "$work/game" && npx vite build >/dev/null)

rm -rf "$dest"
mkdir -p "$dest"
cp -R "$work/game/site-build/." "$dest/"
echo "built $(git -C "$src" rev-parse --short HEAD) into ${dest#"$site"/}"
