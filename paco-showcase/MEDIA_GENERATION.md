# Media provenance and replacement

Despite this file's historical name, every medium currently displayed by the PACO Showcase is authentic.

## Current status

- All photographs and video posters shown by `index.html` are authentic images from the PACO experiments.
- All videos are authentic experiment or simulation recordings already present in the repository.
- The ArUco tracking material uses the real raw and annotated frames.
- The paper figures and physical-validation plots are research outputs, not decorative recreations.

The current filenames are retained to avoid breaking links, including older names that contain a version suffix. A filename alone must not be used to infer an asset's provenance.

## Replacement rule

When a newer authentic photograph, video, or research figure is approved:

1. Preserve the existing filename when the replacement is a drop-in update, or update every HTML reference and alternative text together.
2. Keep a compatible aspect ratio, and verify the asset with `object-fit: contain` so that evidence is never cropped.
3. Update captions, provenance notes, and `VALIDATION.md` in the same change.
4. Re-test the English and French interfaces at 390, 768, and 1440 px, including the media fullscreen controls.

Any future conceptual illustration must be labelled unambiguously in both languages and kept separate from measured experimental results.
