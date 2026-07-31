# Temporary concept media

These assets are placeholders for layout, pacing, and composition. They are visibly labeled **Concept preview** on the website and must not be presented as experimental evidence.

**Status (2026-07-30):** all video assets and the ArUco tracking photographs have been replaced with real footage. `camera_arena_setup_v01.jpg` is no longer referenced anywhere in `index.html` — that slot now shows the real raw/annotated ArUco pair instead. All visible "Concept preview" labels have been removed from the page at the site owner's request, including for the remaining AI-generated stills (`arena_overview_v01.jpg`, `rover_aruco_v01.jpg`, `fixed_obstacle_geometry_v01.jpg`, `system_chain_v01.jpg`) — these four files are still generated placeholders, not real photographs, even though the page no longer flags them visually. Replace them in place (same filename) whenever real shots are available.

## Generation mode

- Still images: OpenAI built-in image generation tool, `photorealistic-natural` use case.
- Temporary MP4 loops: local H.264 encoding from the generated stills or repository figures, using a restrained camera-movement effect.
- Original generated PNG files remain in the local Codex generated-image archive. Website-ready JPEG files are stored in this project.

## Final prompt set

### `arena_overview_v01.jpg`

> Create a believable wide editorial photograph of a small indoor differential-drive research rover navigating a taped rectangular robotics test arena with a single compact fixed obstacle. Clean university robotics laboratory in Singapore, matte light-gray floor, tidy camera rig, no people. Small black four-wheel UGV with a square fiducial marker on top and one marked obstacle. Highly realistic documentary photography, landscape 16:9, high oblique corner view showing the whole arena, soft daylight and neutral overhead light. No readable logos or text, no drones, no humanoid robots, no science-fiction equipment, no watermark.

### `rover_aruco_v01.jpg`

> Create a believable close editorial photograph of a compact differential-drive university research rover used for trajectory tracking experiments. Clean robotics laboratory with a blurred test arena. Small black four-wheel UGV at a three-quarter angle, visible wheels and electronics, square fiducial marker centered on top. Highly realistic documentary product photography, landscape 4:3, camera near rover height, soft neutral side light. No readable logos or text, no people, no drone, no weapon, no watermark.

### `camera_arena_setup_v01.jpg`

> Create a believable documentary photograph explaining the perception setup for a small indoor rover experiment. Tidy university robotics laboratory with a taped test arena, one rover, one obstacle, and an industrial machine-vision camera mounted on a tall overhead support. Highly realistic technical editorial photography, landscape 16:9 side-wide view, camera rig prominent and full arena readable, neutral laboratory light. No readable logos or text, no people, no drones, no science-fiction lighting, no watermark.

### `fixed_obstacle_geometry_v01.jpg`

> Create a believable technical photograph focused on safety geometry between a small autonomous rover and a fixed obstacle. Clean taped indoor test arena, small black four-wheel UGV with top fiducial marker passing safely beside a simple marked obstacle, clear physical gap, subtle blue taped arc suggesting the planned curve. Highly realistic documentary photography, landscape 16:9, high oblique view, neutral and trustworthy. No readable logos or text, no people, no collision, no drone, no digital effects, no watermark.

### `system_chain_v01.jpg`

> Create a believable wide documentary photograph showing the full software-to-hardware experiment chain. Tidy university robotics lab workstation beside a taped arena. Laptop with an abstract curved trajectory plot, small single-board computer and cable, overhead camera, and small UGV rover in the arena. Highly realistic editorial research photography, landscape 16:9, three-quarter view, soft neutral light. Screen may show shapes but no readable text or IP addresses. No logos, no people, no drone, no science-fiction interface, no watermark.

## Replacement rule

Overwrite the corresponding file in `assets/images/` with the real photograph. Keep the same filename and a compatible aspect ratio. The page no longer shows a visible label distinguishing generated stills from real photographs, so replacement is not visually gated — but the files listed above remain generated placeholders until swapped.
