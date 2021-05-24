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

Allows addons to change their behavior according to user-specified addon settings.  
This API is available even if an addon doesn't specify `settings` in its manifest, however all calls to `get()` will fail.

## Functions
### addon.settings.get(optionIdString)
Returns the user-specified value for that setting, or the default specified in the addon manifest if the user didn't specify a value by themselves.
Throws if the specified setting ID wasn't declared inside `addon.json`.

## Events
### change
Fires when any of the addon's settings have changed. This is a good time to restart your addon, refresh the page, recalculate settings, etc.
#### Example:
```js
addon.settings.addEventListener("change", function() {
  console.log("Settings changed!");
  if(addon.settings.get("removeIdeasBtn") === true && tipsButtonShown === false) showTipsButton();
  else if(addon.settings.get("removeIdeasBtn") === false && tipsButtonShown === true) hideTipsButton();
});
```
