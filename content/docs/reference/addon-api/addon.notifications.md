---
title: addon.notifications
description: Allows addons to create browser notifications. This API slightly differs from the browser.notifications API extensions can use.
weight: 6
---

| | |
|-|-|
| Available in userscripts | ❌ |
| Available in persistent scripts | ✔️ |
| Required manifest permissions | `notifications` |

## Description
Allows addons to create browser notifications. This API slightly differs from the `browser.notifications` API extensions can use.

## Methods
### addon.notifications.create
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>options</td>
    <td><code><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions" target="_blank">NotificationOptions</a></code></td>
    <td>Yes</td>
    <td>Unlike the <code>browser.notifications</code> API, specifying <code>buttons</code> or <code>requireInteraction</code> does not throw in Firefox. Instead, the values are ignored.</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;String | null></code></td>
  </tr>
</table>

Returns a promise that resolves to the ID (string) of the created notification.  
Shows a notification to the user according to the options object.  
[Options object reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions).  
Note: for your convenience, specifying `buttons` or `requireInteraction` throws on Firefox.

### addon.notifications.update
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>notificationId</td>
    <td><code>String<code></td>
    <td>Yes</td>
    <td>The ID of the notification to update</td>
  <tr>
    <td>options</td>
    <td><code><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions" target="_blank">NotificationOptions</a></code></td>
    <td>Yes</td>
    <td>Unlike the <code>browser.notifications</code> API, specifying <code>buttons</code> or <code>requireInteraction</code> does not throw in Firefox. Instead, the values are ignored.</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Boolean</code></td>
  </tr>
</table>

Returns a promise that resolves to `true` if succeeded, `false` if not.  
Updates a notification, given its ID.

### addon.notifications.clear
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>notificationId</td>
    <td><code>String<code></td>
    <td>Yes</td>
    <td>The ID of the notification to clear</td>
  <tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Boolean</code></td>
  </tr>
</table>

Returns a promise that resolves to `true` if succeeded, `false` if not.  
Clears a notification, given its ID.

### addon.notifications.getAll
<table>
  <tr>
    <td>Return value</td>
    <td><code>Object[]</code></td>
  </tr>
</table>
Returns a promise that resolves to all currently active notifications created by the addon.

## Events
### click
<table>
  <tr>
    <th>Event detail property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>id</td>
    <td><code>String</code></td>
    <td>The ID of the notification that was clicked</td>
  </tr>
</table>

Fires when any notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification has been clicked.
#### Example:
```js
addon.notifications.addEventListener("click", function(event) {
  console.log("User clicked notification with ID " + event.detail.id);
});
```

### close
<table>
  <tr>
    <th>Event detail property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>id</td>
    <td><code>String</code></td>
    <td>The ID of the notification that was closed</td>
  </tr>
</table>

Fires when any notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification has been closed.

### buttonclick
<table>
  <tr>
    <th>Event detail property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>id</td>
    <td><code>String</code></td>
    <td>The ID of the notification where a button was clicked</td>
  </tr>
  <tr>
    <td>buttonIndex</td>
    <td><code>Number</code></td>
    <td>Index of the button that was clicked (first button being index 0)</td>
  </tr>
</table>

Fires when a button inside a notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification received a button click.  
`event.details.buttonIndex` returns the index of the button that was clicked (first button has index of 0).  
Registering this event on Firefox won't throw.
