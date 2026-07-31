# Trajectory Optimization for Autonomous Systems — Showcase

Static, dependency-free internal research showcase. The page is written in US English and can be hosted directly on GitHub Pages, Vercel, Netlify, or any static file server.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173 --directory paco-showcase
```

Then open `http://localhost:4173`.

## Media replacement workflow

All videos have been replaced with real footage. The ArUco tracking video slot (`tracking_aruco_metric_v01.mp4`) no longer exists; it was replaced by a raw/annotated photo pair (`Brut_tracking_aruco_metric_v01.jpg` and `tracking_aruco_metric_v01.jpg`) shown side by side, reused in both the media gallery and the physical-system section. A new simulation video, `assets/video/phase5_bis.1_solver_scipy_test_anticollision_1.mp4`, documents a 6-robot decentralized anti-collision scenario and is featured in its own spotlight block in the Validation section.

The page no longer displays a visible "Concept preview" label anywhere (removed at the site owner's request). The following photographs are still AI-generated placeholders, not real photographs, even though they are shown without any visual flag — replace them in place using exactly the same filenames when real shots are available:

- `assets/images/arena_overview_v01.jpg` (video poster only)
- `assets/images/rover_aruco_v01.jpg`
- `assets/images/fixed_obstacle_geometry_v01.jpg` (video poster only)
- `assets/images/system_chain_v01.jpg`

`assets/images/camera_arena_setup_v01.jpg` is unused — its slot in the physical-system section now shows the real ArUco tracking photo pair instead.

## Evidence policy

- Figures under `assets/figures/` come from the research repository.
- Four still images remain AI-generated concept placeholders (see Media replacement workflow above). They are no longer visually labeled, so this document is the source of truth on their status.
- Headline KPI come from the Phase 6.10 anti-collision campaign of 30 July 2026: 23 physical runs with one or two independently moving robots in the arena, logged under `outputs/camera/phase6_10/`.
- The two evidence figures and the digital-twin scatter are generated directly from those logs (real CSV + paired `simulations_Phase6` JSON); they are not hand-drawn.
- Clearance is edge-to-edge between the controller's bounding discs (rover radius 0.13 m), not between chassis outlines — a small negative value means the safety discs overlapped, not that the robots touched.
- The earlier trial 14 / 15 fixed-obstacle KPI and the smooth-tracking figures are retired: they described a single-rover scenario that the anti-collision campaign supersedes.

## Free deployment recommendation

GitHub Pages is the simplest choice for this fully static site. Vercel is equally suitable if preview deployments and a custom domain workflow are useful.
