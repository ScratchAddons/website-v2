---
title: addon.badge
description: Allows addons to display a badge, a bit of text that is layered over the extension icon, frequently a number.
weight: 7
---

| | |
|-|-|
| Available in userscripts | ❌ |
| Available in persistent scripts | ✔️ |
| Available in popup scripts | ❌ |
| Required manifest permissions | `badge` |

> _**Note: currently only one addon (`msg-count-badge`) can use this API. Do not use it in your addon without discussing on GitHub first.**_

## Description
Allows addons to display a badge, a bit of text that is layered over the extension icon, frequently a number.

## Getters & setters
### addon.badge.text
Text shown on the badge.  
Numbers are automatically converted to strings.  
If this is set to `""`, `null` or `0`, the badge will be hidden.

### addon.badge.color
Color of the badge.  
Accepts any CSS supported color.
