---
title: addon.self
description: Allows addons to get information about the current Scratch account session.
weight: 3
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in persistent scripts | ✔️ |
| Required manifest permissions | None |

Allows addons to get information about the current Scratch account session.

## Getters
### addon.auth.scratchLang (string)
Returns the language code for the language choice the user has made in Scratch, for example. `"en"`.  
Keep in mind that this property is unrelated from all the others - this getter is inside `addon.auth` because it involves reading Scratch cookies. The change of this value **will not** trigger a "change" event.
### addon.auth.isLoggedIn (boolean)
Returns whether the user is logged in or not. If `false`, all below return `null`.
### addon.auth.username (string)
Returns the username of the currently logged in user.
### addon.auth.userId (string)
Returns the user ID of the currently logged in user.
### addon.auth.xToken (string)
Returns the value of the `X-Token` header used in the Scratch REST API.
### addon.auth.csrfToken (string)
Returns the value of the `scratchcsrftoken` cookie.

## Events
### change
Fires when any of the getters change (except scratchLang).  
#### Example:
```js
addon.auth.addEventListener("change", function() {
  console.log(addon.auth.isLoggedIn);
});
```