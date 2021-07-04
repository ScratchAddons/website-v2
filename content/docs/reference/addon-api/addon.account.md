---
title: addon.account
description: Allows addons to execute actions in the currently logged in Scratch user.
weight: 4
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in persistent scripts | ✔️ |
| Available in popup scripts | ✔️ |
| Required manifest permissions | None |

## Description
Allows addons to execute actions in the currently logged in Scratch user.

## Methods
### getMsgCount
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;Number | null></code></td>
  </tr>
</table>

Gets the unread message count of the currently logged in user.  
The promise will resolve to `null` if `addon.auth.isLoggedIn` is `false`.

### getMessages

| | |
|-|-|
| Available in userscripts | ❌ |
| Available in popup scripts | ❌ |

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>opts</td>
    <td><code>Object</code></td>
    <td>No</td>
    <td>
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>offset</td>
          <td><code>Number</code></td>
          <td>No</td>
          <td><code>0</code></td>
          <td>Offset to use when requesting to Scratch API.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;ScratchApiMessage[] | null></code></td>
  </tr>
</table>

Gets recent Scratch messages of the currently logged in user.  
The promise will resolve to `null` if `addon.auth.isLoggedIn` is `false`.  
Can only return up to 40 messages at a time.

### clearMessages

| | |
|-|-|
| Available in userscripts | ❌ |
| Available in popup scripts | ❌ |

<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;void></code></td>
  </tr>
</table>

Clears the unread message count of the currently logged in user.  