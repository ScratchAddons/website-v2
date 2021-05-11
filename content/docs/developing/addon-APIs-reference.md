---
title: Addon APIs Reference
---
This API can be used within your addons, which can provide useful things such as access to the real blockly, Scratch's vm, etc.

## Table of contents
- [`addon.self`](#addonself)
    - [`Getters`](#getters)
    - [`Events`](#events)
- [`addon.settings`](#addonsettings)
    - [`Functions`](#functions)
    - [`Events`](#events-1)
- [`addon.auth`](#addonauth)
    - [`Getters`](#getters-1)
    - [`Events`](#events-2)
- [`addon.account`](#addonaccount)
    - [`Functions`](#functions-1)
- [`addon.tab`](#addontab)
    - [`Sub-APIs`](#sub-apis)
    - [`Getters`](#getters-2)
    - [`Functions`](#functions-2)
    - [`Events`](#events-3)
- [`addon.notifications`](#addonnotifications)
    - [`Functions`](#functions-3)
    - [`Events`](#events-4)
- [`addon.badge`](#addonbadge)
    - [`Getters & setters`](#getters--setters)


## addon.self
**Available in persistent scripts.**  
**Available in userscripts.**

Allows addons to get information about themselves or the browser.

### Getters
#### addon.self.id (string)
The ID of the addon, in other words, the name of the folder.
#### addon.self.dir (string)
The directory where the addon resides.
#### addon.self.browser (string)
Returns either `chrome` or `firefox`, depending on the browser Scratch Addons is running at.
#### addon.self.enabledLate (boolean)
Returns true if the addon was dynamically enabled. Otherwise, false.

### Events
#### disabled
Fires when the addon gets disabled and has the `dynamicDisable` manifest property
#### reenabled
Fires when the addon gets reenabled after being disabled.


## addon.settings
**Available in persistent scripts.**  
**Available in userscripts.**

Allows addons to change their behavior according to user-specified addon settings.  
This API is available even if an addon doesn't specify `options` in its manifest, however all calls to `get()` will fail.

### Functions
#### addon.settings.get(optionIdString)
Returns the user-specified value for that option, or the default specified in the addon manifest if the user didn't specify a value by themselves.  
Throws if the specified option ID wasn't declared inside `addon.json`.

### Events
#### change
Fires when any of the addon's settings have changed. This is a good time to restart your addon, refresh the page, recalculate settings, etc.
##### Example:
```js
addon.settings.addEventListener("change", function() {
  console.log("Settings changed!");
  if(addon.settings.get("removeIdeasBtn") === true && tipsButtonShown === false) showTipsButton();
  else if(addon.settings.get("removeIdeasBtn") === false && tipsButtonShown === true) hideTipsButton();
});
```


## addon.auth
**Available in persistent scripts.**  
**Available in userscripts.**

Allows addons to get information about the current Scratch account session.

### Getters
#### addon.auth.scratchLang (string)
Returns the language code for the language choice the user has made in Scratch, for example. `"en"`.  
Keep in mind that this property is unrelated from all the others - this getter is inside `addon.auth` because it involves reading Scratch cookies. The change of this value **will not** trigger a "change" event.
#### addon.auth.isLoggedIn (boolean)
Returns whether the user is logged in or not. If `false`, all below return `null`.
#### addon.auth.username (string)
Returns the username of the currently logged in user.
#### addon.auth.userId (string)
Returns the user ID of the currently logged in user.
#### addon.auth.xToken (string)
Returns the value of the `X-Token` header used in the Scratch REST API.
#### addon.auth.csrfToken (string)
Returns the value of the `scratchcsrftoken` cookie.

### Events
#### change
Fires when any of the getters change (except scratchLang).  
##### Example:
```js
addon.auth.addEventListener("change", function() {
  console.log(addon.auth.isLoggedIn);
});
```


## addon.account
**Available in persistent scripts.**  
**Available in userscripts.**

Allows addons to execute actions in the currently logged in Scratch user.

### Functions
#### getMsgCount()
Returns a promise that resolves to an integer (the unread message count for the currently logged in user), or `null`.
#### getMessages(opts)
**NOT available in userscripts!! Not recommended for general use. This method exists to avoid duplicated work between Scratch Notifier and Scratch Messaging.**  
`opts`: object with an `offset` property, default is 0. Messages limit is always 40.  
Returns a promise that resolves to the requested messages, or `null` if something failed.


## addon.tab
**NOT available in persistent scripts.**  
**Available in userscripts.**  

Allows addon userscripts to get information about the tab they're currently running on.

### Sub-APIs
#### [addon.tab.traps](addon.tab.traps)
Allows addons to get direct references to objects, which are particularly useful for enhancing the editor, like the Scratch VM, Thread objects, or Redux state on scratch-www pages.

### Getters
#### addon.tab.clientVersion
Currently, the Scratch community website has 2 working clients used throughout the site, one React based and another jQuery based. This getter allows addons to change your behavior depending on the version of the current page.  
Returns either `"scratch-www"` (React based), `"scratchr2"` (jQuery based) or `null`.
#### addon.tab.editorMode
If the tab is a project, it returns the viewing mode of the project: `"editor"`, `"fullscreen"` or `"embed"`.  
If not in a project, it will return `null`.

### Functions
#### addon.tab.waitForElement(selector, optionalOptionsObject)
**Since v1.4.0, this function does not react to attribute changes in the DOM. Please do not use this to react to attribute changes. You can still, however, match static attributes that stay the same since the element is created, until it is destroyed.**  
Returns a promise that resolves to the found element when an element matching that selector is found.  
If the element already exists, it automatically resolves.  
Takes the same argument as `document.querySelectorAll`.  
If the options object includes `{markAsSeen: true}`, the returned element will be marked as seen by the addon, and will be ignored for any future calls to `waitForElement()`, no matter the selector or options object given to it. This is useful for cases where you only want to do an operation once per element.
#### addon.tab.displayNoneWhileDisabled(el, optionalOptionsObject)
Hides the given element with `display: none` when the addon is disabled. If the addon is enabled, it will set the display of the element to options.display which defaults as "".

### Events
#### urlChange
Fires when Scratch dynamically changes the URL of the page. This usually happens when going inside/outside the editor, or into/outside full screen mode. This event does not trigger if the hash of the URL changes.  
You can access `event.detail.oldUrl` and `event.detail.newUrl`
##### Example:
```js
addon.tab.addEventListener("urlChange", function(event) {
  console.log(`URL changed! It was previously ${event.detail.oldUrl}, it's now ${event.detail.newUrl}`);
});
```

## addon.notifications
**Available in persistent scripts.**  
**NOT available in userscripts.**  
**Required permissions: `notifications`**

Allows addons to create browser notifications. This API slightly differs from the `browser.notifications` API extensions can use.

### Functions
#### addon.notifications.create(optionsObject)
Returns a promise that resolves to the ID (string) of the created notification.  
Shows a notification to the user according to the options object.  
[Options object reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions).  
Note: for your convenience, neither specifying `buttons` and `requireInteraction` throws on Firefox.
#### addon.notifications.update(stringNotificationId, optionsObject)
Returns a promise that resolves to `true` if succeeded, `false` if not.  
Updates a notification, given its ID.
#### addon.notifications.clear(stringNotificationId)
Returns a promise that resolves to `true` if succeeded, `false` if not.  
Clears a notification, given its ID.
#### addon.notifications.getAll()
Returns a promise that resolves to all currently active notifications created by the addon.

### Events
#### click
Fires when any notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification has been clicked.
##### Example:
```js
addon.notifications.addEventListener("click", function(event) {
  console.log("User clicked notification with ID " + event.detail.id);
});
```
#### close
Fires when any notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification has been closed.
#### buttonclick
Fires when a button inside a notification by the addon is clicked.  
`event.detail.id` is provided, which specifies which notification received a button click.  
`event.details.buttonIndex` returns the index of the button that was clicked (first button has index of 0).  
Registering this event on Firefox won't throw.


## addon.badge
#### Keep in mind: as of August 31st, only one addon can use the badge API, currently `msg-count-badge`
**Available in persistent scripts.**  
**NOT available in userscripts.**  
**Required permissions: `badge`**  

Allows addons to display a badge, a bit of text that is layered over the extension icon, frequently a number.

### Getters & setters
#### addon.badge.text
Allows addons to set the text on the badge.  
Accepts numbers, which are automatically converted to strings.  
`null` and `0` are considered as empty strings.  
If the badge is set to an empty string, it won't be displayed.
#### addon.badge.color
Allows addons to set the color of the badge.
Accepts any CSS supported color.