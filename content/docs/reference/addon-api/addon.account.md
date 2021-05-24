---
title: addon.account
description: Allows addons to execute actions in the currently logged in Scratch user.
weight: 4
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in persistent scripts | ✔️ |
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

Returns a promise that resolves to an integer (the unread message count for the currently logged in user), or `null`.

### getMessages
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

**NOT available in userscripts!! Not recommended for general use. This method exists to avoid duplicated work between Scratch Notifier and Scratch Messaging.**  

`opts`: object with an `offset` property, default is 0. Messages limit is always 40.  
Returns a promise that resolves to the requested messages, or `null` if something failed.