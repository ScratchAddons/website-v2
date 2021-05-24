---
title: addon.badge
description: Allows addons to display a badge, a bit of text that is layered over the extension icon, frequently a number.
weight: 7
---

| | |
|-|-|
| Available in userscripts | ❌ |
| Available in persistent scripts | ✔️ |
| Required manifest permissions | `badge` |

## Description
Allows addons to display a badge, a bit of text that is layered over the extension icon, frequently a number.

**Keep in mind: only one addon (currently `msg-count-badge`) can use the badge API.**

## Getters & setters
### addon.badge.text
Allows addons to set the text on the badge.  
Accepts numbers, which are automatically converted to strings.  
`null` and `0` are considered as empty strings.  
If the badge is set to an empty string, it won't be displayed.
### addon.badge.color
Allows addons to set the color of the badge.
Accepts any CSS supported color.
