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

## Example
### General example
```js
addon.notifications.create({
  type: "basic",
  title: "Hello from notification!",
  iconUrl: "/images/icon.png",
  message: "Hi!",
  buttons: [
    {
      title: "Button 1",
    },
    {
      title: "Button 2",
    },
  ],
});

addon.notifications.addEventListener("click", function(event) {
  console.log("User clicked notification with ID " + event.detail.id);
});
addon.notifications.addEventListener("closed", function(event) {
  console.log("User closed notification with ID " + event.detail.id);
});
addon.notifications.addEventListener("buttonclick", function(event) {
  console.log(`User clicked button ${event.detail.buttonIndex} of notification ${event.detail.id}`);
});

```


## Properties
### addon.notifications.muted

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

Whether Scratch Addons is currently muted or not.

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

Creates a notification.  
The notification will not be created if Scratch Addons is muted.

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

Updates an existing notification, given its ID.  
The returned promise resolves to a boolean that indicates whether the update succeeded.  

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

Clears an existing notification, given its ID.  
The returned promise resolves to a boolean that indicates whether the clearing succeeded.

### addon.notifications.getAll
<table>
  <tr>
    <td>Return value</td>
    <td><code>Object[]</code></td>
  </tr>
</table>

Gets all existing notifications for the addon.  
Based on <code><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/getAll" target="_blank">browser.notifications.getAll()</a></code>.

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

Fires when any existing notification is clicked.

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

Fires when any existing notification is closed.

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

Fires when a notification button is clicked.  
This will never fire in Firefox.