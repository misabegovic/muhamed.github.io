# Fails the build when a YAML flow mapping in _data/ lost text at a comma:
# `{ line: one, two }` parses as line: "one" plus a key "two" with no value,
# which shipped "covering all 7" for "7,028 candidates" on the homepage.
# Quote such values.
Jekyll::Hooks.register :site, :post_read do |site|
  problems = []
  walk = lambda do |node, path|
    case node
    when Hash
      node.each do |key, value|
        problems << "#{path}: #{key.inspect}" if value.nil? && key.to_s.include?(" ")
        walk.call(value, "#{path}.#{key}")
      end
    when Array
      node.each_with_index { |value, i| walk.call(value, "#{path}[#{i}]") }
    end
  end
  walk.call(site.data, "site.data")
  unless problems.empty?
    raise "Unquoted comma in a YAML flow mapping cut text short; quote the value:\n  " + problems.join("\n  ")
  end
end
