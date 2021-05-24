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

## Functions
### addon.notifications.create(optionsObject)
Returns a promise that resolves to the ID (string) of the created notification.  
Shows a notification to the user according to the options object.  
[Options object reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions).  
Note: for your convenience, specifying `buttons` or `requireInteraction` throws on Firefox.
### addon.notifications.update(stringNotificationId, optionsObject)
Returns a promise that resolves to `true` if succeeded, `false` if not.  
Updates a notification, given its ID.
### addon.notifications.clear(stringNotificationId)
Returns a promise that resolves to `true` if succeeded, `false` if not.  
Clears a notification, given its ID.
### addon.notifications.getAll()
Returns a promise that resolves to all currently active notifications created by the addon.

## Events
### click
Fires when any notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification has been clicked.
#### Example:
```js
addon.notifications.addEventListener("click", function(event) {
  console.log("User clicked notification with ID " + event.detail.id);
});
```
### close
Fires when any notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification has been closed.
### buttonclick
Fires when a button inside a notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification received a button click.  
`event.details.buttonIndex` returns the index of the button that was clicked (first button has index of 0).  
Registering this event on Firefox won't throw.
