---
title: addon.settings
description: Allows addons to change their behavior according to user-specified addon settings.  
weight: 2
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in persistent scripts | ✔️ |
| Required manifest permissions | None |

## Description
Allows addons to change their behavior according to user-specified addon settings.  
This API is available even if an addon doesn't specify `settings` in its manifest, however all calls to `get()` will fail.

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
### addon.settings.get
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

Returns the user-specified value for that setting, or the default specified in the addon manifest if the user didn't specify a value by themselves.
Throws if the specified setting ID wasn't declared inside `addon.json`.

## Events
### change
Fires when any of the addon's settings have changed. This is a good time to restart your addon, refresh the page, recalculate settings, etc.
