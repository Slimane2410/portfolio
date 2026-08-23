#!/usr/bin/env ruby

# One-time, deterministic path migration for the portfolio architecture.
# PACO is deliberately excluded from every operation.

PROJECT_SLUGS = {
  "project_Aircraft_Brake.html" => "aircraft-brake.html",
  "project_Capping_Machine.html" => "capping-machine.html",
  "project_CNAM.html" => "cnam.html",
  "project_F1.html" => "f1.html",
  "project_FAB.html" => "fab.html",
  "project_FANUC.html" => "fanuc.html",
  "project_PJT_AI.html" => "pjt-ai.html",
  "project_Plasticity.html" => "plasticity.html",
  "project_Speaker.html" => "speaker.html",
  "project_TIPE.html" => "tipe.html",
  "project_Turbine.html" => "turbine.html"
}.freeze

ASSET_PATHS = {
  "style.css" => "assets/css/style.css",
  "script.js" => "assets/js/script.js",
  "favicon_io/" => "assets/icons/",
  "img/beyond/" => "assets/images/beyond/",
  "img/capping/" => "assets/images/projects/capping-machine/",
  "img/cnam/" => "assets/images/projects/cnam/",
  "img/plasticity/" => "assets/images/projects/plasticity/",
  "img/speaker/" => "assets/images/projects/speaker/",
  "img/turbine/" => "assets/images/projects/turbine/",
  "img/F1_img1.png" => "assets/images/projects/f1/cover.png",
  "img/View_Fanuc.png" => "assets/images/projects/fanuc/cover.png",
  "img/View_PJT_AI.png" => "assets/images/projects/pjt-ai/cover.png",
  "img/View_TIPE.png" => "assets/images/projects/tipe/cover.png",
  "img/frein_avion1.jpg" => "assets/images/projects/aircraft-brake/cover.jpg",
  "img/prothese.png" => "assets/images/projects/prosthesis/cover.png",
  "img/PT_class.png" => "assets/images/common/pt-class.png",
  "img/labo_ISIR.jpg" => "assets/images/common/labo-isir.jpg",
  "img/photo_labo_ENSAM.png" => "assets/images/common/photo-labo-ensam.png",
  "img/photo_slim_V2.png" => "assets/images/common/photo-slim-v2.png",
  "img/sorbonne_jussieu.jpg" => "assets/images/common/sorbonne-jussieu.jpg",
  "img/" => "assets/images/common/",
  "Data_F1/portofolio_pages/" => "assets/images/projects/f1/portfolio-pages/",
  "Data_F1/F1_test.png" => "assets/images/projects/f1/test-poster.png",
  "Data_F1/F1_test.mp4" => "assets/videos/projects/f1/test.mp4",
  "Data_FAB/foundry-pour.mp4" => "assets/videos/projects/fab/foundry-pour.mp4",
  "Data_FAB/" => "assets/images/projects/fab/",
  "Data_PJT_AI/Tests/Plan_de_tests_LLM_SQL_Streamlit_v3.xlsx" => "assets/documents/projects/pjt-ai/plan-de-tests-llm-sql-streamlit-v3.xlsx",
  "Data_PJT_AI/Tests/img_excel.png" => "assets/images/projects/pjt-ai/excel-preview.png",
  "Data_PJT_AI/Mind_Map/MindMap_Projet.pdf" => "assets/documents/projects/pjt-ai/mindmap-projet.pdf",
  "Videos/Video_Fanuc.mp4" => "assets/videos/projects/fanuc/presentation.mp4",
  "Videos/Video_Presentation.mp4" => "assets/videos/projects/pjt-ai/presentation.mp4",
  "pdf/Resume_AOUANOUK_Slimane.pdf" => "assets/documents/resume/resume-aouanouk-slimane.pdf",
  "Case_Study_pdf/Airplane_Break2.png" => "assets/images/projects/aircraft-brake/case-study-cover.png",
  "Case_Study_pdf/Airplane_Break.pdf" => "assets/documents/projects/aircraft-brake/airplane-break.pdf",
  "Case_Study_pdf/Cam_Driven_Capping_Machine_Report_FR.pdf" => "assets/documents/projects/capping-machine/cam-driven-capping-machine-report-fr.pdf",
  "Case_Study_pdf/Capping_Machine_Assembly_Drawing_A2.pdf" => "assets/documents/projects/capping-machine/capping-machine-assembly-drawing-a2.pdf",
  "Case_Study_pdf/rapport_TP_EEA_CNAM.pdf" => "assets/documents/projects/cnam/rapport-tp-eea-cnam.pdf",
  "Case_Study_pdf/F1.pdf" => "assets/documents/projects/f1/f1.pdf",
  "Case_Study_pdf/FANUC.pdf" => "assets/documents/projects/fanuc/fanuc.pdf",
  "Case_Study_pdf/PJT_AI.pdf" => "assets/documents/projects/pjt-ai/pjt-ai.pdf",
  "Case_Study_pdf/TP_PLASTICITE_FINAL.pdf" => "assets/documents/projects/plasticity/tp-plasticite-final.pdf",
  "Case_Study_pdf/TIPE.pdf" => "assets/documents/projects/tipe/tipe.pdf",
  "Case_Study_pdf/Dessin_d_Ensemble.pdf" => "assets/documents/projects/turbine/dessin-d-ensemble.pdf",
  "Case_Study_pdf/RAPPORT_CE_TURBINE_HYDRAULIQUE_AOUANOUK_BENCHIKH_PARIS.pdf" => "assets/documents/projects/turbine/rapport-ce-turbine-hydraulique-aouanouk-benchikh-paris.pdf"
}.freeze

Dir.glob("{en,fr}/**/*.html").sort.each do |file|
  project_page = file.include?("/projects/")
  language = file.split("/").first
  prefix = project_page ? "../../" : "../"
  html = File.read(file)

  ASSET_PATHS.each do |old_path, new_path|
    html.gsub!(%r{(?:\.\./)?#{Regexp.escape(old_path)}}, "#{prefix}#{new_path}")
  end

  PROJECT_SLUGS.each do |old_name, new_name|
    if project_page
      html.gsub!(%r{(?:\.\./)?(?:fr/)?#{Regexp.escape(old_name)}}, new_name)
    else
      html.gsub!(%r{(?:\.\./)?(?:fr/)?#{Regexp.escape(old_name)}}, "projects/#{new_name}")
    end
  end

  if project_page
    html.gsub!(/href="projects\.html/, 'href="../projects.html')
    html.gsub!(/href="(index|academics|beyond|experience|resume)\.html/, 'href="../\\1.html')
    counterpart = language == "en" ? "fr" : "en"
    basename = File.basename(file)
    html.gsub!(%r{href="(?:\.\./)*(?:en/|fr/)?(?:projects/)?#{Regexp.escape(basename)}"\s+hreflang="#{counterpart}"}, "href=\"../../#{counterpart}/projects/#{basename}\" hreflang=\"#{counterpart}\"")
  else
    PROJECT_SLUGS.each_value do |new_name|
      html.gsub!(%r{href="#{Regexp.escape(new_name)}"}, "href=\"projects/#{new_name}\"")
    end
    counterpart = language == "en" ? "fr" : "en"
    basename = File.basename(file)
    html.gsub!(%r{href="(?:\.\./)*(?:en/|fr/)?#{Regexp.escape(basename)}"\s+hreflang="#{counterpart}"}, "href=\"../#{counterpart}/#{basename}\" hreflang=\"#{counterpart}\"")
  end

  # Both language project lists must retain PACO's established public location.
  html.gsub!(%r{href="(?:\.\./)*paco-showcase/}, 'href="../paco-showcase/') unless project_page
  html.gsub!(%r{src="(?:\.\./)*paco-showcase/}, 'src="../paco-showcase/') unless project_page

  File.write(file, html)
end
