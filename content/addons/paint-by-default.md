---
id: paint-by-default
---

**Paint costume by default** is an addon that changes the functionality of buttons that add a new sprite, costume, backdrop, and sound. In vanila Scratch, pressing the main button will open Scratch's asset library. This addon allows the default action to be customized in the addon settings, allowing a choice between: library (Scratch's default), paint or record, surprise, or upload.

## Background

The addon was created under the philosophy that intermediate and advanced Scratchers rarely use assets from the Scratch library. It is common for these users to make a new sprite/costume/backdrop by hovering over the main button then navigating to the Paint option. As this is a timely maneuver, the addon's default settings change the default action of the main button to open the paint editor rather than opening the asset library.

## Features

- The addon allows users to customize the default action for each of the following buttons: "Choose a Sprite", "Choose a Costume", "Choose a Backdrop", and "Choose a Sound".
- Each of the buttons above have the following four options, which are pulled from the vanilla button's list when hovered:
  - Library: Opens the corresponding Scratch asset library, depending on which button was pressed(Scratch's default)
  - Paint/Record: Immediately opens the costume editor, or opens the audio recorder for the "Choose a Sound" button
  - Surprise: Randomly selects from the corresponding Scratch asset library
  - Upload: Allows you to upload a file
- The tooltip that appears when hovering over the main button also displays the correct default action.

## Settings

### Add Sprite

- Changes the default action of the "Choose a Sprite" button, which is located at the bottom right of the sprite pane.

### Add Costume

- Changes the default action of the "Choose a Costume" button, which is located at the bottom of the costume list in the costume editor for any sprite.

### Add Backdrop

- Changes the default action of the "Choose a Backdrop" button, which is located at the bottom of the Backdrop pane and the bottom of the backdrop list in the stage's costume editor.

### Add Sprite

- Changes the default action of the "Choose a Sound" button, which is located at the bottom of the sound list in the sound editor for any sprite or the backdrop.

## Known issues

- You cannot set the default action to any custom actions added by a Scratch modification. This includes the "HD Upload" option added by the _HD image uploads_ addon.
- The addon's name "Paint costume by default" does not represent its options to change the default actions for the sprite, backdrop, or sound buttons. This issue is not planned to be resolved. [#6076](https://github.com/ScratchAddons/ScratchAddons/issues/6076)

## Credit

GarboMuffin developed the entirety of the addon. Its final name, description, settings, and tags were made by WorldLanguages.

## Changelog

- **v1.19.0** The **Paint costume by default** addon was created.
- **v1.19.1** Bug fix: Addon no longer treats the "Choose a Sound" button like a "Choose a Costume" button if the current sprite had no sounds.

## Trivia

{{< docs/stub-section >}}

## Gallery

{{< docs/stub-section >}}

## Related

- [Original pull request (#3199)](https://github.com/ScratchAddons/ScratchAddons/pull/3199)
