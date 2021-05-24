---
title: addon.self
description: Allows addons to get information about themselves or the browser.
weight: 1
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in persistent scripts | ✔️ |
| Required manifest permissions | None |

## Description
Allows addons to get information about themselves or the browser.

## Properties
### addon.self.id (string)
The ID of the addon, in other words, the name of the folder.
### addon.self.dir (string)
The directory where the addon resides.
### addon.self.browser (string)
Returns either `chrome` or `firefox`, depending on the browser Scratch Addons is running at.
### addon.self.enabledLate (boolean)
Returns true if the addon was dynamically enabled. Otherwise, false.

## Events
### disabled
Fires when the addon gets disabled and has the `dynamicDisable` manifest property
### reenabled
Fires when the addon gets reenabled after being disabled.