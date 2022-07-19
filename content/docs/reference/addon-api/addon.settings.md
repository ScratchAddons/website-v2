---
title: addon.settings
h1_title: "`addon.settings`"
description: Allows addons to change their behavior according to user-specified addon settings.  
weight: 2
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in popup scripts | ✔️ |
| Required manifest permissions | None |

## Description
Allows addons to change their behavior according to user-specified addon settings.  

## Examples
### Reacting to settings change
```js
addon.settings.addEventListener("change", function() {
  console.log("Settings changed!");
  if(addon.settings.get("removeIdeasBtn") === true && tipsButtonShown === false) showTipsButton();
  else if(addon.settings.get("removeIdeasBtn") === false && tipsButtonShown === true) hideTipsButton();
});
```

## Methods
### `addon.settings.get`
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>settingId</td>
    <td><code>String</code></td>
    <td>Yes</td>
    <td>Setting ID to retrieve.</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>String | Number | Boolean</code></td>
  </tr>
  <tr>
    <td>Throws if</td>
    <td>The given setting ID wasn't declared in the addon manifest.</td> 
  </tr>
</table>

Returns the user-specified value for a provided setting ID.  
The return value will depend on the setting type:

<table>
  <tr>
    <th>Setting type</th>
    <th>Return type</th>
    <th>Example value</th>
  </tr>
  <tr>
    <td><code>boolean</code></td>
    <td><code>Boolean</code></td>
    <th><code>true</code></th>
  </tr>
  <tr>
    <td><code>positive_integer</code></td>
    <td><code>Number</code></td>
    <th><code>0</code></th>
  </tr>
  <tr>
    <td><code>integer</code></td>
    <td><code>Number</code></td>
    <th><code>-2</code></th>
  </tr>
  <tr>
    <td><code>string</code></td>
    <td><code>String</code></td>
    <th><code>"abc"</code></th>
  </tr>
  <tr>
    <td><code>color</code></td>
    <td><code>String</code></td>
    <th><code>"#aabbcc"</code></th>
  </tr>
  <tr>
    <td><code>select</code></td>
    <td><code>String</code></td>
    <th><code>"potentialValueId"</code></th>
  </tr>
</table>

This method is guaranteed to return the valid type. `null` is never returned.

## Events
### `change`
Fires when any of the addon's settings have changed.
