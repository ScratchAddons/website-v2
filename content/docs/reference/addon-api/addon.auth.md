---
title: addon.auth
h1_title: "`addon.auth`"
description: Allows addons to get information about the current Scratch account session.
weight: 3
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in popup scripts | ✔️ |
| Required manifest permissions | None |

## Description
Allows addons to get information about the current Scratch account session.

## Examples
### Reacting to auth info change
```js
addon.auth.addEventListener("change", async function() {
  console.log(await addon.auth.fetchIsLoggedIn());
});
```

## Properties
### `addon.auth.scratchLang`
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

### `addon.auth.csrfToken`
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

## Methods
### `addon.auth.fetchIsLoggedIn`
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;Boolean></code></td>
  </tr>
</table>

Fetches whether the user is logged in or not.

### `addon.auth.fetchUsername`
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;String | null></code></td>
  </tr>
</table>

Fetches the username of the currently logged in user.  
Will resolve to `null` if `addon.auth.fetchIsLoggedIn()` returns `Promise<false>`.

### `addon.auth.fetchUserId`
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;Number | null></code></td>
  </tr>
</table>

Fetches the user ID of the currently logged in user.  
Will resolve to `null` if `addon.auth.fetchIsLoggedIn()` returns `Promise<false>`.

### `addon.auth.fetchXToken`
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;String | null></code></td>
  </tr>
</table>

Fetches the value of the `X-Token` header used in the Scratch REST API.  
Will resolve to `null` if `addon.auth.fetchIsLoggedIn()` returns `Promise<false>`.

## Events
### `change`
Fires when the CSRF token, username, user ID or X-Token change.