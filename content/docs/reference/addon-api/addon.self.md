---
title: addon.self
h1_title: "`addon.self`"
description: Allows addons to get information about themselves or the browser.
weight: 1
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in popup scripts | ✔️ |
| Required manifest permissions | None |

## Description
Allows addons to get information about themselves or the browser.

## Examples
### Using `addon.self.dir`
With `addon.self.dir`, we can get the URL to an image inside the addon's directory.
```js
  const img = document.createElement("img");
  img.src = addon.self.dir + "/image.svg"; 
  // Will be something like `chrome-extension://aeepldbjfoihffgcaejikpoeppffnlbd/addons/addon-id/image.svg`
  document.body.appendChild(img);
```

### Using `addon.self.disabled` and events (`dynamicDisable`)
We use the `disabled` and `reenabled` events to hide the image when the addon is disabled, without
requiring the user to refresh the page.  
We also use `addon.self.disabled` inside an event listener to avoid running code while the addon is disabled.  
This example requires `{"dynamicDisable": true}` in the manifest.
```js
  addon.self.addEventListener("disabled", () => img.style.visibility = "visible");
  addon.self.addEventListener("reenabled", () => img.style.visibility = "hidden");

  img.onclick = () => {
    if (addon.self.disabled) return;
    // Code starting here will only run if the image is visible
  };
```

## Properties
### `addon.self.id`
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

The addon ID for this addon.  
The addon ID is the name of the directory inside `/addons` that identifies the addon.

### `addon.self.dir`
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

Path to the addon's directory, without trailing slash.  
Should be used instead of hardcoding URLs. Locally, using a hardcoded URL like `chrome-extension://aeepldbjfoihffgcaejikpoeppffnlbd/addons/full-signature/happen.js` might appear to work properly, but the extension ID can change and it will not work in Firefox.

### `addon.self.lib`
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

Path to the `/libraries` directory, without trailing slash.

### `addon.self.browser`
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

The browser Scratch Addons is running on.

### `addon.self.disabled`
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
Useful for returning early in event listeners for addons that support `dynamicDisable`.

### `addon.self.enabledLate`
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

Whether the running userscript was injected dynamically in response to the user enabling the addon.  
Can only be `true` if the addon supports dynamicEnable.  
If the addon was enabled when the page loaded, then was disabled and reenabled, this will still be `false`.
In that case, the `reenabled` event will fire.

## Methods
### `getEnabledAddons`
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>tag</td>
    <td><code>String</code></td>
    <td>No</td>
    <td>The tag for filtering.</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;string[]></code></td>
  </tr>
</table>

Gets a list of addon IDs enabled, optionally filtered using a [tag](https://scratchaddons.com/docs/reference/addon-manifest/#tags).

## Events
### `disabled`
Fires when the addon gets disabled.  
Requires the `dynamicDisable` manifest property.

### `reenabled`
Fires when the addon gets reenabled, after being disabled.  
<!-- Requires the `dynamicDisable` manifest property. -->