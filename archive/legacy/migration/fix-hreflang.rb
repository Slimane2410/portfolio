#!/usr/bin/env ruby

Dir.glob("{en,fr}/**/*.html").each do |file|
  language = file.split("/").first
  project_page = file.include?("/projects/")
  basename = File.basename(file)
  html = File.read(file)

  html.gsub!(/<link\b[^>]*\brel=["']alternate["'][^>]*>/i) do |tag|
    hreflang = tag[/\bhreflang=["']([^"']+)["']/i, 1]
    target_language = hreflang == "x-default" ? "en" : hreflang
    next tag unless %w[en fr].include?(target_language)

    target = if target_language == language
      basename
    elsif project_page
      "../../#{target_language}/projects/#{basename}"
    else
      "../#{target_language}/#{basename}"
    end

    tag.sub(/\bhref=["'][^"']*["']/i, "href=\"#{target}\"")
  end

  File.write(file, html)
end
