---
title: addon.account
h1_title: "`addon.account`"
description: Allows addons to execute actions in the currently logged in Scratch user.
weight: 4
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in popup scripts | ❌ |
| Required manifest permissions | None |

## Description
Allows addons to execute actions in the currently logged in Scratch user.

## Methods
### `getMsgCount`
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;Number | null></code></td>
  </tr>
</table>

Gets the unread message count of the currently logged in user.  
The promise will resolve to `null` if `addon.auth.isLoggedIn` is `false`. 
