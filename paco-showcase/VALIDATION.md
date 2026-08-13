# Visual validation — paper draft v1 update

Validated locally on 14 August 2026 with Chrome 151 in English and French.

## Viewports and behaviour

| Viewport | Language | Screens checked | Result |
| --- | --- | --- | --- |
| 1440 × 1100 px | English | language modal, hero, collision boundary, calibration `f9–f13`, three physical-validation figures, preprint | Pass |
| 768 × 1024 px | French | calibration and two-agent physical validation | Pass |
| 390 × 844 / 1200 px | French | mobile hero, collision boundary, preprint | Pass |

There was no horizontal page overflow at any tested width. The 15 px difference between the requested desktop/tablet viewport width and `documentElement.clientWidth` is Chrome's native vertical scrollbar, not content overflow.

## Figure and media checks

- `f9–f13` all loaded at their native dimensions, remained centered with `object-fit: contain`, and were fully visible without deformation or cropping.
- The single-agent, two-agent, and real-time-budget physical figures passed the same checks. The 19-run two-agent aggregate and its 6.3 cm minimum clearance remained visible in the caption and plot.
- Captions and legends were visually inspected at 1440 px; responsive 768 px captures confirm that the figures remain readable and scroll normally within the page.
- Tab selection updates the image, caption, selected state, and translated alternative text. Figure fullscreen entry and exit passed.
- All 13 images have non-empty alternative text and loaded successfully. All 7 video elements reported no media error and retain authentic repository posters.
- All 54 local `src`, `href`, and `poster` references resolve; no local asset is missing.

## Language, PDF, and console checks

- The language modal opens on a fresh session. English and French selection both work, including dynamic figure captions and alternative text.
- The preprint button is visible in both languages with the Draft v1 warning. The PDF returned HTTP 200 as `application/pdf` and begins with the `%PDF-` signature.
- The published PDF is the compact V1 artifact from paper commit `d69be1e` (`agent/remove-review-flag`); its SHA-256 is `7C9DD135A45B19DA9D7BFC2619272B9405883AAD036B40600BCDC7AAA063087D`.
- Chrome produced zero console entries and zero severe errors during the complete automated route.

## Captures

- `01_language_modal_1440.png`
- `02_hero_en_1440.png`
- `03_collision_boundary_en_1440.png`
- `04_calibration_f9_1440.png` through `08_calibration_f13_1440.png`
- `09_validation_single_1440.png`, `10_validation_dual_1440.png`, and `11_validation_realtime_1440.png`
- `12_preprint_en_1440.png`
- `13_hero_fr_390.png`, `14_collision_boundary_fr_390.png`, and `15_preprint_fr_390.png`
- `16_calibration_f13_fr_768.png` and `17_validation_dual_fr_768.png`

Final visual inspection found no clipped evidence figure, stretched image, unreadable site caption, broken tab, missing asset, or layout overflow in the captured states.
