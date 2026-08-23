#!/usr/bin/env ruby

require "pathname"
require "uri"

ROOT = Pathname.new(__dir__).parent
FILES = Dir.glob(ROOT.join("{en,fr}/**/*.html").to_s) +
        Dir.glob(ROOT.join("assets/**/*.css").to_s)
REFERENCE_PATTERNS = [
  /\b(?:href|src|poster)=["']([^"']+)["']/i,
  /\bsrcset=["']([^"']+)["']/i,
  /url\(["']?([^)'"\s]+)["']?\)/i
].freeze

failures = []

FILES.sort.each do |file|
  contents = File.read(file)
  references = REFERENCE_PATTERNS.flat_map { |pattern| contents.scan(pattern).flatten }

  references.flat_map { |reference| reference.split(",").map { |item| item.strip.split(/\s+/).first } }.each do |reference|
    next if reference.nil? || reference.empty? || reference.start_with?("#", "//")
    next if reference.match?(/\A(?:https?:|mailto:|tel:|data:|javascript:)/i)

    clean_reference = URI.decode_www_form_component(reference.split(/[?#]/, 2).first)
    target = if clean_reference.start_with?("/portfolio/")
      ROOT.join(clean_reference.delete_prefix("/portfolio/"))
    else
      Pathname.new(file).dirname.join(clean_reference).cleanpath
    end

    failures << "#{Pathname.new(file).relative_path_from(ROOT)} -> #{reference}" unless target.exist?
  end
end

if failures.empty?
  puts "Local link validation passed (#{FILES.length} files checked)."
else
  warn failures.uniq.sort.join("\n")
  exit 1
end
