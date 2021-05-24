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
### addon.self.id
<table>
  <tr>
    <td>Type</td>
    <td><code>String</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>No</td> 
  </tr>
</table>

The ID of the addon, in other words, the name of the folder.

### addon.self.dir
<table>
  <tr>
    <td>Type</td>
    <td><code>String</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>No</td> 
  </tr>
</table>

The directory where the addon resides.

### addon.self.lib
<table>
  <tr>
    <td>Type</td>
    <td><code>String</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>No</td> 
  </tr>
</table>

The directory where the `/libraries` folder resides.

### addon.self.browser
<table>
  <tr>
    <td>Value</td>
    <td><code>"chrome" | "firefox"</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>No</td> 
  </tr>
</table>

Returns either `chrome` or `firefox`, depending on the browser Scratch Addons is running at.

### addon.self.disabled
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

Whether the addon is currently disabled or not.

### addon.self.enabledLate
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

Returns true if the addon was dynamically enabled. Otherwise, false.

## Events
### disabled
Fires when the addon gets disabled and has the `dynamicDisable` manifest property.

### reenabled
Fires when the addon gets reenabled after being disabled.