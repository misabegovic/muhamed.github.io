# Cache-busting by content: {{ "/assets/site.css" | asset_digest }} gives the
# first 10 hex digits of the file's MD5, so ?v= changes only when the file does,
# not on every build (the daily rebuild used to re-send the CSS to everyone).
require "digest"

module AssetDigest
  def asset_digest(path)
    site = @context.registers[:site]
    Digest::MD5.file(File.join(site.source, path.to_s)).hexdigest[0, 10]
  end
end

Liquid::Template.register_filter(AssetDigest)
