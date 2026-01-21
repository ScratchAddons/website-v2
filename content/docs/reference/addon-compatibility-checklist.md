---
title: Addon Compatibility Checklist
aliases:
  - /docs/developing/addon-compatibility-checklist
---

When developing an addon, make sure to review the categories that you're editing for any factors that need to be considered.

# Non-Editor Addons

## Navbar
New addons that modify the navbar must be compatible with the following addons:
- Customizable navigation bar
- Expandable search bar

# Editor Addons

## General

Any elements inside `<div id="app">` that are modified with a userscript will be wiped and restored to vanilla Scratch when the user switches to the project page. This also happens with other parent `div`s: for example, when a new button is added to the color picker, then the color picker is closed. The convention is to reinstate custom UI elements by using a `while (true)` loop with `addon.tab.waitForElement` like so:

  ```js
  while (true) {
    let element = await addon.tab.waitForElement(/* CSS selector of desired parent element from regular Scratch */, {
      markAsSeen: true,
    }
    /* Re-initialize anything related to the UI here */
  }
  ```

## Stage Header
New addons that add elements to the stage header must be compatible with the following addons by using their respective spaces with the [`addon.tab.appendToSharedSpace`](https://scratchaddons.com/docs/reference/addon-api/addon.tab/addon.tab.appendtosharedspace/) API:
- 60FPS project player mode
- Clone counter
- Gamepad support
- Mouse position
- Muted project player mode
- Pause button

Other things that affect the stage header:
- Entering and exiting full screen (the `fullscreenStageHeader` space must be used in full screen)
- Activating Turbo Mode
- The "reverse order of project controls" addon
