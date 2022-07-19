---
title: addon.popup
h1_title: "`addon.popup`"
description: Allows addon popup scripts to get information about the popup context.
weight: 8
---

| | |
|-|-|
| Available in userscripts | ❌ |
| Available in popup scripts | ✔️ |
| Required manifest permissions | None |

## Description
Allows addon popup scripts to get information about the popup context.

## Properties
### `addon.popup.isFullscreen`
<table>
  <tr>
    <td>Type</td>
    <td><code>Boolean</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>No</td> 
  </tr>
</table>

Whether the current popup is displayed in fullscreen.

### `addon.popup.isLightMode`
<table>
  <tr>
    <td>Type</td>
    <td><code>Boolean</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>No</td> 
  </tr>
</table>

Whether the user has enabled light mode on Scratch Addons settings.

## Methods
### `addon.popup.getSelectedTabUrl`
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;String | null></code></td>
  </tr>
</table>

Gets the URL of the Scratch tab that is selected.