---
title: addon.tab
description: Allows addon userscripts to get information about the tab they're currently running on.
weight: 5
---

**NOT available in persistent scripts.**  
**Available in userscripts.**  

Allows addon userscripts to get information about the tab they're currently running on.

## Sub-APIs
### [addon.tab.traps](addon.tab.traps)
Allows addons to get direct references to objects, which are particularly useful for enhancing the editor, like the Scratch VM, Thread objects, or Redux state on scratch-www pages.
### [addon.tab.redux](addon.tab.redux)
TODO

## Getters
### addon.tab.clientVersion
Currently, the Scratch community website has 2 working clients used throughout the site, one React based and another jQuery based. This getter allows addons to change your behavior depending on the version of the current page.  
Returns either `"scratch-www"` (React based), `"scratchr2"` (jQuery based) or `null`.
### addon.tab.editorMode
If the tab is a project, it returns the viewing mode of the project: `"editor"`, `"fullscreen"` or `"embed"`.  
If not in a project, it will return `null`.

## Functions
### addon.tab.waitForElement(selector, optionalOptionsObject)
**Since v1.4.0, this function does not react to attribute changes in the DOM. Please do not use this to react to attribute changes. You can still, however, match static attributes that stay the same since the element is created, until it is destroyed.**  
Returns a promise that resolves to the found element when an element matching that selector is found.  
If the element already exists, it automatically resolves.  
Takes the same argument as `document.querySelectorAll`.  
If the options object includes `{markAsSeen: true}`, the returned element will be marked as seen by the addon, and will be ignored for any future calls to `waitForElement()`, no matter the selector or options object given to it. This is useful for cases where you only want to do an operation once per element.
### addon.tab.displayNoneWhileDisabled(el, optionalOptionsObject)
Hides the given element with `display: none` when the addon is disabled. If the addon is enabled, it will set the display of the element to options.display which defaults as "".

## Events
### urlChange
Fires when Scratch dynamically changes the URL of the page. This usually happens when going inside/outside the editor, or into/outside full screen mode. This event does not trigger if the hash of the URL changes.  
You can access `event.detail.oldUrl` and `event.detail.newUrl`
#### Example:
```js
addon.tab.addEventListener("urlChange", function(event) {
  console.log(`URL changed! It was previously ${event.detail.oldUrl}, it's now ${event.detail.newUrl}`);
});
```