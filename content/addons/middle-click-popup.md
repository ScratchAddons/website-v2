---
id: middle-click-popup
---

**Insert blocks by name** is an addon which allows users to code more quickly by typing the name of blocks and inserting them at their mouse position, rather than having to search for them in the flyout. The popup is opened by middle clicking in the workspace or pressing `ctrl` + `space`. You can then type to search for blocks and using the mouse to grab one out of the popup.

## Background

The original version was made by Griffpatch for the Developer Tools extension. As part of a work to separate features from the _Developer tools_ as individual addons, this addon has been made to its own addon.

## Features

- The searching supports any block in the workspace. This includes custom blocks, blocks from extensions and variable / lists.
- You can use the arrow keys and enter to navigate the search results for even faster insertion.
- When a result is highlighted, you can press tab to autocomplete your search to that block.
- The popup can insert multiple nested blocks at the same time, by typing something like "move my variable + 10 steps".
- For mathematical blocks, the order of operations applies by default, but you can use brackets to change the order.
- You can surround text in double quotes to force the searcher not to turn your text into blocks. This is useful for sitruations like trying to say the text "x position" instead of the variable `x position`, where you could type say "x position".

## Settings

### Popup block size

Controls how big the blocks inside the menu appear. It is the height in pixels of a single block.

### Popup width

Controls how wide the popup is. This is a percentage of the width of the entire window.

### Popup maximum height

Controls how tall the popup can be before a scrollbar appears. This is a percentage of the hight of the entire window.
 
## Future plans

- The popup should be resizable by dragging one of the corners in the editor instead of having to change a setting.
- Adding string interpolation for strings in quotes could really help out situatoins where a lot of join blocks would normally have to be tediously arranged.

## Known issues

- The blocks inside the popup of this addon will not respect the settings from the *Customizable block shapes* addon.
- The alogithm for sorting the search results still needs a lot of work, and sometimes the result you are probably looking for is hidden below a mountain of worse results.

## Credit

Tacodiva made most of the addon as it stands today. Additionally, Griffpatch helped a lot by providing feedback and finding bugs in the overhauled version.

## Changelog

{{< docs/outdated-section >}}

- **v1.30.0** The insert blocks by name addon was created.
- **v1.31.0** The addon was completely overhauled, allowing for nesting blocks, adding autocomplete and changing how the blocks where shown in the popup.
- **v1.31.1** The algorithm for searching was altered and several bugs where fixed.

## Trivia

- This was the first addon page written for the Addon Docs!
- Despite only recently becoming its own addon, the middle click popup is one of the oldest features of Scratch Addons being a part of dev tools sense the beginning.
- The original code for the popup was created before Scratch Addons even existed by Griffpatch in 2019.
- When Tacodiva overhauled the addon for v1.31.0, the code had almost 2,800 lines of code added and 149 commits!
- The name of the Git branch for the overhaul was `idk-what-im-doing`.
- Tacodiva was struggling to fix an issue so much, that despite only contributing two lines of CSS to fix the problem, CST1229 is in the addon's credits!

## Gallery

{{< docs/stub-section >}}

## Related

{{< docs/stub-section >}}
