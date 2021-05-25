---
title: addon.auth
description: Allows addons to get information about the current Scratch account session.
weight: 3
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in persistent scripts | ✔️ |
| Required manifest permissions | None |

## Description
Allows addons to get information about the current Scratch account session.

## Examples
### Reacting to auth info change
```js
addon.auth.addEventListener("change", function() {
  console.log(addon.auth.isLoggedIn);
});
```

## Properties
### addon.auth.scratchLang
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

Language of the Scratch website.  
This language option can be changed by the user in the footer of Scratch's website.  
This property changing does not fire a `change` event.

### addon.auth.isLoggedIn
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

Whether the user is logged in or not.

### addon.auth.username
<table>
  <tr>
    <td>Type</td>
    <td><code>String</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>Yes</td> 
  </tr>
</table>

Username of the currently logged in user.  
Will be `null` if `addon.auth.isLoggedIn` is `false`.

### addon.auth.userId
<table>
  <tr>
    <td>Type</td>
    <td><code>Number</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>Yes</td> 
  </tr>
</table>

User ID of the currently logged in user.  
Will be `null` if `addon.auth.isLoggedIn` is `false`.

### addon.auth.xToken
<table>
  <tr>
    <td>Type</td>
    <td><code>String</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>Yes</td> 
  </tr>
</table>

Value of the `X-Token` header used in the Scratch REST API.  
Will be `null` if `addon.auth.isLoggedIn` is `false`.

### addon.auth.csrfToken
<table>
  <tr>
    <td>Type</td>
    <td><code>String</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>Yes</td> 
  </tr>
</table>

Value of the `scratchcsrftoken` cookie.  
Will be `null` if `addon.auth.isLoggedIn` is `false`.

## Events
### change
Fires when any of `isLoggedIn`, `username`, `userId`, `xToken` or `csrfToken` change.