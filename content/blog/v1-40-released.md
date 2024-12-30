---
title: What's new in Scratch Addons v1.40
description: Introducing splash screens!
date: 2024-12-30T21:00:00Z
author: DNin01
---

Before we cover this update, let's take a quick detour and review the last hotfix.

# In case you missed it: v1.39.2 and addon removals

The v1.39.2 hotfix was released recently and resolves a few glitches that popped up after some Scratch updates. If you had issues with [Sprite folders](https://scratch.mit.edu/scratch-addons-extension/settings#addon-folders) or [custom color themes](https://scratch.mit.edu/scratch-addons-extension/settings#addon-editor-dark-mode), those have been fixed in this version.

Since Scratch now has its own sprite deletion confirmation dialog and the discussion forums now use 3.0 scratchblocks, the addons for those have been removed, because now everyone can enjoy those features! 👏

# What's new in v1.40

We've made a few improvements to existing addons and there's a new addon or two!

## 🌻 Project splash screens

On project pages, the new addon [Show project thumbnail while loading](https://scratch.mit.edu/scratch-addons-extension/settings#addon-player-thumb) adds a splash screen with the thumbnail of the project while it's loading, replacing the solid blue loading screen.

![The loading screen for a Scratch project with a faint image of the project's thumbnail as the background](/assets/img/blog/v1-40-released/project-splash.png)

## 🗑️ Keep the trash can open

Another new addon, [Delete sprites without confirmation](https://scratch.mit.edu/scratch-addons-extension/settings#addon-no-sprite-confirm), **disables** Scratch's confirmation for deleting sprites. You know, if you often find yourself deleting bunches of sprites and don't want to be asked every time. Just make sure you don't delete anything you didn't mean to!

## 📸 Block snapshot options

When taking a snapshot of blocks on the code area with [Save blocks as image](https://scratch.mit.edu/scratch-addons-extension/settings#addon-blocks2image), you'll now be presented with a dialog, showing you a preview of the snapshot which you can choose whether you want to copy to the clipboard or save to a file.

![A dialog menu showing a snapshot of Scratch blocks with buttons to save and copy the snapshot](/assets/img/blog/v1-40-released/block-image-dialog.png)

## 🔍 The search bar moved

The [Sprite pane search](https://scratch.mit.edu/scratch-addons-extension/settings#addon-search-sprites) bar has changed shape and moved next to the add sprite button.

<video src="/assets/img/blog/v1-40-released/search-bar.mp4" controls type="video/mp4" autoplay loop></video>

## ✨ Other improvements, changes, and bug fixes

- The tab bar in the extension's popup has been redesigned and "Addons" is now the first tab.
- The "Do not disturb" dropdown has been updated with options to enable for 4 hours and until the next day.
- [Customizable editor menu bar](https://scratch.mit.edu/scratch-addons-extension/settings#addon-custom-menu-bar) is now able to hide Scratch's new Debug button.
- [Project video recorder](https://scratch.mit.edu/scratch-addons-extension/settings#addon-mediarecorder) now supports saving MP4 recordings on Chrome.
- [Message count on extension icon](https://scratch.mit.edu/scratch-addons-extension/settings#addon-msg-count-badge) now shows your message count on the extension icon's tooltip. The count on the badge is also truncated (rounded) when the number is too long to fit on the badge.
- In the past, Scratch Addons always changed "version" in "No Flash version detected" to "versions" in forum post user agent strings to identify Scratch Addons users. Now, this is presented as an addon that can be turned off.
- [Find bar](https://scratch.mit.edu/scratch-addons-extension/settings#addon-editor-find-bar): Pressing <kbd>Ctrl</kbd>+<kbd>F</kbd> a second time will now show the browser's find bar.
- Fixed [Find bar](https://scratch.mit.edu/scratch-addons-extension/settings#addon-editor-find-bar) indicating a result was the first even if it wasn't.
- Fixed [Auto-hiding block palette](https://scratch.mit.edu/scratch-addons-extension/settings#addon-hide-flyout) automatically collapsing the palette upon switching sprites.
- Fixed [Ctrl+Enter to post](https://scratch.mit.edu/scratch-addons-extension/settings#addon-ctrl-enter-post) sometimes posting the wrong comment when you had multiple reply boxes open at the same time and clicked "Post".
- And more!

You can see the full list of changes [on our changelog](https://scratchaddons.com/changelog/#v1.40.0).
