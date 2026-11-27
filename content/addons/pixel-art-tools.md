---
id: pixel-art-tools
draft: true
---

**Pixel art tools** gives you a free pixel art toolkit right where you're building your game, whether you're drawing your first sprite or a whole cast of characters. Draw on a small canvas, build color palettes, and preview animations inside Scratch. Your edits appear directly in your game, so you can try out ideas without repeatedly exporting and importing artwork from another program.

Inspired by [Piskel](https://www.piskelapp.com/), the addon aims to bridge the gap between Scratch's costume editor and professional paid tools like [Aseprite](https://www.aseprite.org/), making it easier to get started with pixel art in a familiar place.

<video controls autoplay loop muted playsinline preload="metadata" width="540" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Editing Ninja Frog in Scratch while the animation preview and game update">
  <source src="/assets/img/addons/docs/pixel-art-tools/main-demo-optimized.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/main-demo-optimized.mp4">Watch the pixel art tools demonstration</a>.
</video>

## Drawing pixel art

### Pixel Mode and canvas size

Open the Costumes tab, choose a bitmap costume, and click "Pixel Mode" beside the zoom controls. If your costume is in vector mode, click "Convert to Bitmap" first.

Use the width and height fields beside the button to set your canvas size. Each checkerboard square represents one pixel, making it easier to get those small details just right.

<div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
  <figure style="flex: 0 1 360px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="360" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Turning on Pixel Mode">
  <source src="/assets/img/addons/docs/pixel-art-tools/pixel-mode.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/pixel-mode.mp4">Turning on Pixel Mode</a>.
</video>
    <figcaption>Turning on Pixel Mode</figcaption>
  </figure>
  <figure style="flex: 0 1 360px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="360" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Changing the canvas dimensions">
  <source src="/assets/img/addons/docs/pixel-art-tools/canvas-size.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/canvas-size.mp4">Changing the canvas dimensions</a>.
</video>
    <figcaption>Changing the canvas dimensions</figcaption>
  </figure>
</div>

### Brush and line sizes

The brush and line tools have buttons for sizes 1 to 4 pixels, and new text starts at a size suited to the canvas.

<div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
  <figure style="flex: 0 1 320px; min-width: 0; max-width: 100%; margin: 0;">
<img src="/assets/img/addons/docs/pixel-art-tools/pixel-grid.png" alt="Individual pixels aligned with the checkerboard grid" width="320" style="max-width: 100%; height: auto;">
    <figcaption>One checkerboard square per pixel</figcaption>
  </figure>
  <figure style="flex: 0 1 400px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="400" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Choosing brush and line sizes">
  <source src="/assets/img/addons/docs/pixel-art-tools/brush-sizes.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/brush-sizes.mp4">Choosing brush and line sizes</a>.
</video>
    <figcaption>Choosing brush and line sizes</figcaption>
  </figure>
</div>

### New bitmap costumes

To start new costumes on a 32 by 32 canvas, enable "New paint costumes are bitmap by default" in the addon settings. You can change these dimensions using "Default width" and "Default height".

<div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
  <figure style="flex: 0 1 400px; min-width: 0; max-width: 100%; margin: 0;">
    <svg viewBox="28 48 625 76" width="400" style="max-width: 100%; height: auto;" role="img" aria-label="New paint costumes are bitmap by default setting enabled">
      <image href="/assets/img/addons/docs/pixel-art-tools/bitmap-default-settings.png" width="659" height="154" />
    </svg>
    <figcaption>Choose the defaults in addon settings</figcaption>
  </figure>
  <figure style="flex: 0 1 440px; min-width: 0; max-width: 100%; margin: 0;">
    <video controls autoplay loop muted playsinline preload="metadata" width="440" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Painting a new costume opens a 32 by 32 bitmap canvas">
      <source src="/assets/img/addons/docs/pixel-art-tools/new-bitmap-costume.mp4" type="video/mp4">
      <a href="/assets/img/addons/docs/pixel-art-tools/new-bitmap-costume.mp4">Painting a new 32 by 32 bitmap costume</a>.
    </video>
    <figcaption>New painted costumes start as 32 × 32 bitmaps</figcaption>
  </figure>
</div>

### Importing costumes

Imported bitmap costumes are scaled so that each image pixel matches one canvas pixel. They appear at half their original size on the stage; use the Looks block "set size to (200) %" to display them at full size.

<svg viewBox="64 56 285 68" width="285" style="max-width: 100%; height: auto;" role="img" aria-label="Set size to 200 percent">
  <image href="/assets/img/addons/docs/pixel-art-tools/stage-size.png" width="434" height="161" />
</svg>

## Color palettes

Build a palette for your character, or share a set of colors across your whole game.

### Adding and editing colors

Colors you draw with are added automatically, ready to use again. You can also choose a fill color and click the palette's "+" button to add it.

- Click a color to use it.
- Shift-click a color to edit it using Scratch's color picker. Shift-click it again to finish editing.
- Right-click a color to remove it.

<div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
  <figure style="flex: 0 1 360px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="360" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Adding and removing colors">
  <source src="/assets/img/addons/docs/pixel-art-tools/palette-add-remove.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/palette-add-remove.mp4">Adding and removing colors</a>.
</video>
    <figcaption>Adding and removing colors</figcaption>
  </figure>
  <figure style="flex: 0 1 360px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="360" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Editing a color with Shift-click">
  <source src="/assets/img/addons/docs/pixel-art-tools/palette-edit.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/palette-edit.mp4">Editing a color with Shift-click</a>.
</video>
    <figcaption>Editing a color with Shift-click</figcaption>
  </figure>
</div>

### Creating and switching palettes

Use the dropdown to create or switch palettes. Palettes are shared across the project, and each costume remembers which palette you chose.

<video controls autoplay loop muted playsinline preload="metadata" width="360" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Creating and switching palettes">
  <source src="/assets/img/addons/docs/pixel-art-tools/palette-library.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/palette-library.mp4">Creating and switching palettes</a>.
</video>

### Importing and exporting palettes

Use "Import" to load colors from a text file, a GIMP `.gpl` palette, or an image. Importing an image creates a palette from its colors. "Export" saves the selected palette as a text file.

<div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
  <figure style="flex: 0 1 360px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="360" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Importing and exporting a palette">
  <source src="/assets/img/addons/docs/pixel-art-tools/palette-import-export.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/palette-import-export.mp4">Importing and exporting a palette</a>.
</video>
    <figcaption>Importing and exporting a palette</figcaption>
  </figure>
  <figure style="flex: 0 1 360px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="360" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Importing Pink Man's image to create a different color palette">
  <source src="/assets/img/addons/docs/pixel-art-tools/palette-image-import.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/palette-image-import.mp4">Creating a palette from an image</a>.
</video>
    <figcaption>Creating a palette from an image</figcaption>
  </figure>
</div>

### Saving palettes with your project

Palettes are saved in project comments, so keep those comments to preserve your palettes.

<svg viewBox="44 36 634 274" width="480" style="max-width: 100%; height: auto;" role="img" aria-label="Project comment containing the saved palette mapping">
  <image href="/assets/img/addons/docs/pixel-art-tools/palette-storage-comments.png" width="710" height="336" />
</svg>

### Moving the palette

On smaller screens, the palette floats over the canvas and can be moved by dragging its header.

<video controls autoplay loop muted playsinline preload="metadata" width="490" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Dragging the floating palette">
  <source src="/assets/img/addons/docs/pixel-art-tools/palette-position.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/palette-position.mp4">Dragging the floating palette</a>.
</video>

## Animation preview

Try out a walk cycle or a blinking character as you draw: the animation preview plays through your costumes without needing a script.

### Playback and costume range

Use the play/pause button to control playback, the FPS slider to change its speed, and the range dropdown to choose which costumes to include.

<div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
  <figure style="flex: 0 1 292px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="292" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Playback and animation speed">
  <source src="/assets/img/addons/docs/pixel-art-tools/animation-playback.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/animation-playback.mp4">Playback and animation speed</a>.
</video>
    <figcaption>Playback and animation speed</figcaption>
  </figure>
  <figure style="flex: 0 1 292px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="292" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Choosing the costume range">
  <source src="/assets/img/addons/docs/pixel-art-tools/animation-range.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/animation-range.mp4">Choosing the costume range</a>.
</video>
    <figcaption>Choosing the costume range</figcaption>
  </figure>
</div>

### Moving and exporting the preview

Drag the panel's header to move it. Click "Export GIF" to save the animation.

<div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;">
  <figure style="flex: 0 1 420px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="420" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Moving the animation preview">
  <source src="/assets/img/addons/docs/pixel-art-tools/animation-position.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/animation-position.mp4">Moving the animation preview</a>.
</video>
    <figcaption>Moving the animation preview</figcaption>
  </figure>
  <figure style="flex: 0 1 292px; min-width: 0; max-width: 100%; margin: 0;">
<video controls autoplay loop muted playsinline preload="metadata" width="292" style="max-width: 100%; height: auto; vertical-align: top;" aria-label="Exporting an animation as a GIF">
  <source src="/assets/img/addons/docs/pixel-art-tools/animation-export.mp4" type="video/mp4">
  <a href="/assets/img/addons/docs/pixel-art-tools/animation-export.mp4">Exporting an animation as a GIF</a>.
</video>
    <figcaption>Exporting an animation as a GIF</figcaption>
  </figure>
</div>

## Settings

| Setting | What it does |
| --- | --- |
| Default width and Default height | Set the dimensions used with "New paint costumes are bitmap by default". Both default to 32. |
| Enable pixel mode by default | Turns on Pixel Mode automatically for bitmap costumes. |
| New paint costumes are bitmap by default | Creates new painted costumes in bitmap mode using the default width and height. |
| Prevent automatic bitmap trimming | Keeps empty space around your artwork so that drawing does not shrink the pixel canvas. Enabled by default. |
| Hide animation preview | Hides the animation preview panel. |

![Pixel art tools settings](/assets/img/addons/docs/pixel-art-tools/addon-settings.png)

Thanks to [Pixel Frog](https://pixelfrog-assets.itch.io/pixel-adventure-1) for the lovely Pixel Adventure assets used in this guide's screenshots and clips!
