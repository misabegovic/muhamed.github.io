# The brand kit (/brand/): checks its colours against site.css, and builds its
# zip from _data/brand.yml and files/brand/ on every build, so the download
# never drifts from the page. The Gemfile keeps rubyzip out on purpose, so the
# zip is written here with Zlib: deflated text, stored images (already
# compressed), and a fixed date so an unchanged kit gives the same bytes.
require "zlib"

module BrandKit
  DIR = "brand".freeze
  ROOT = "muhamed-isabegovic-brand-kit".freeze
  DOS_DATE = ((2026 - 1980) << 9) | (1 << 5) | 1 # 2026-01-01, 00:00

  class << self
    attr_accessor :bytes
  end

  module_function

  def check_colors(site, kit)
    css = File.read(File.join(site.source, "assets/site.css"))
    wrong = kit["colors"].select { |c| c["token"] }.reject do |c|
      css.match(/#{Regexp.escape(c["token"])}:\s*(#[0-9a-fA-F]{3,8})\s*;/)&.[](1)&.casecmp?(c["hex"])
    end
    return if wrong.empty?
    raise "_data/brand.yml colours differ from assets/site.css: " + wrong.map { |c| "#{c['name']} (#{c['token']})" }.join(", ")
  end

  def readme(site, kit)
    person = site.data.dig("home", "person", "role")
    lines = ["#{site.config['author']}, brand kit", "", person, "#{site.config['url']}  ·  #{site.data.dig('home', 'closing', 'email')}", ""]
    lines += ["How to use these", ""] + kit["usage"].map { |u| "- #{u}" } + [""]
    lines += ["Photos (photos/)", ""]
    kit["photos"].each { |p| lines << "- #{p['name']}: #{p['note']} Full size (2048 px), 1080 px, 400 px, and a round 800 px avatar with a transparent background." }
    lines += ["", "Colours (also as colors.css)", ""]
    kit["colors"].each { |c| lines << format("- %-7s %s  %s", c["name"], c["hex"], c["role"]) }
    f = kit["font"]
    lines += ["", "Typeface", "", "#{f['name']}: #{f['use']}", "#{f['license']}: #{f['url']}", "", "Bios are in bios.txt.", "", "The kit online: #{site.config['url']}/brand/", ""]
    lines.join("\n")
  end

  def bios(kit)
    kit["bios"].map { |b| "#{b['name']} (#{b['text'].split.size} words)\n\n#{b['text'].strip}\n" }.join("\n")
  end

  def colors_css(kit)
    vars = kit["colors"].map { |c| "  --#{c['name'].downcase.tr(' ', '-')}: #{c['hex']}; /* #{c['role']} */" }
    ":root {\n#{vars.join("\n")}\n}\n"
  end

  # [name in the zip, bytes, deflate?]
  def entries(site, kit)
    text = [["README.txt", readme(site, kit)], ["bios.txt", bios(kit)], ["colors.css", colors_css(kit)]]
    photos = Dir[File.join(site.source, DIR, "*.{jpg,png}")].sort.map { |f| ["photos/#{File.basename(f)}", File.binread(f), false] }
    text.map { |n, s| [n, s.encode("UTF-8").b, true] } + photos
  end

  def zip(files)
    out = "".b
    central = "".b
    files.each do |name, data, deflate|
      name = "#{ROOT}/#{name}".b
      body = deflate ? Zlib::Deflate.new(Zlib::BEST_COMPRESSION, -Zlib::MAX_WBITS).then { |z| z.deflate(data, Zlib::FINISH).tap { z.close } } : data
      crc = Zlib.crc32(data)
      method = deflate ? 8 : 0
      offset = out.bytesize
      # flag 0x0800: the name is UTF-8
      out << [0x04034b50, 20, 0x0800, method, 0, DOS_DATE, crc, body.bytesize, data.bytesize, name.bytesize, 0].pack("VvvvvvVVVvv") << name << body
      central << [0x02014b50, 20, 20, 0x0800, method, 0, DOS_DATE, crc, body.bytesize, data.bytesize, name.bytesize, 0, 0, 0, 0, 0, offset].pack("VvvvvvvVVVvvvvvVV") << name
    end
    start = out.bytesize
    out << central << [0x06054b50, 0, 0, files.size, files.size, central.bytesize, start, 0].pack("VvvvvVVv")
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  kit = site.data["brand"] or next
  BrandKit.check_colors(site, kit)
  BrandKit.bytes = BrandKit.zip(BrandKit.entries(site, kit))
  # The page shows the size beside the download button.
  kit["zip_size"] = format("%.1f MB", BrandKit.bytes.bytesize / 1_000_000.0)
end

Jekyll::Hooks.register :site, :post_write do |site|
  kit = site.data["brand"] or next
  path = File.join(site.dest, BrandKit::DIR, kit["zip"])
  FileUtils.mkdir_p(File.dirname(path))
  File.binwrite(path, BrandKit.bytes)
end
