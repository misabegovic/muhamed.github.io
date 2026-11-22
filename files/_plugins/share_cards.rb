# Link previews (og:image, twitter:image; emitted by jekyll-seo-tag).
#
# 1. A post or a note previews with its own card when one has been rendered
#    (images/social/cards/post-<slug>.jpg, note-<slug>.jpg, from
#    .github/scripts/render-social-images.js). One without a card, or with an
#    image: of its own, is left alone.
# 2. Every local preview image gets ?v=<digest of the file>, so its address
#    changes when the picture does. X, LinkedIn and others keep their own copy
#    of an image by address: after the share card was redrawn, old posts went
#    on showing the old one.
# 3. The default share card gets its size and alt text, from _data/home.yml.
require "digest"

module ShareCards
  DEFAULT = "/images/social/share.png".freeze
  CARDS = "/images/social/cards".freeze

  module_function

  def versioned(site, path)
    file = File.join(site.source, path)
    return path unless File.file?(file)
    "#{path}?v=#{Digest::MD5.file(file).hexdigest[0, 10]}"
  end

  def card_for(site, doc)
    kind = { "posts" => "post", "stream" => "note" }[doc.collection.label] or return
    path = "#{CARDS}/#{kind}-#{doc.data['slug']}.jpg"
    path if File.file?(File.join(site.source, path))
  end

  def default_alt(site)
    hero = site.data.dig("home", "hero") || {}
    "#{site.config['author']}, #{site.data.dig('home', 'person', 'role')}, Vienna: #{hero['title']} #{hero['lead']}".strip
  end

  def apply(site, item, card = nil)
    image = item.data["image"]
    if card && image == DEFAULT
      image = { "path" => card, "width" => 1200, "height" => 630, "alt" => "#{item.data['title']}, by #{site.config['author']}" }
    elsif image == DEFAULT
      image = { "path" => DEFAULT, "width" => 1200, "height" => 630, "alt" => default_alt(site) }
    end
    case image
    when String then item.data["image"] = versioned(site, image) if image.start_with?("/")
    when Hash then item.data["image"] = image.merge("path" => versioned(site, image["path"].to_s)) if image["path"].to_s.start_with?("/")
    end
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  site.pages.each { |page| ShareCards.apply(site, page) }
  site.documents.each { |doc| ShareCards.apply(site, doc, ShareCards.card_for(site, doc)) }
end
