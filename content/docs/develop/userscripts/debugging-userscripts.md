---
title: Debugging Tips
description: Tips to easily debug userscripts, and edge cases to consider.
---

Tips to easily debug userscripts, and edge cases to consider.

## Tips

### It's not always necessary to reload the extension

It's not necessary to reload the extension by going to `chrome://extensions` when changing the source of an already existing JavaScript or CSS files. In those cases, reloading the page is enough.

### Use the addon.* API from the console

The `addon` object is accessible within the browser console through the `__addon` global variable when at least one addon is running.

### Set breakpoints with the "debugger" keyword

The `debugger;` keyword in JavaScript will freeze the page when ran, if the developer tools are open. Setting breakpoints is useful to inspect the value of local variables during execution.

### Filter console messages by addon ID

Enter the addon ID on the "filter" console search bar to only view logs and warnings, as well errors logged with `console.error()`. Keep in mind that this will hide all exceptions, unless you're explicitly logging them in your code.


## Edge cases


### Scratch project page and editor


#### The DOM is destroyed after going inside or outside the editor

Scratch creates all HTML elements each time the user clicks "see inside" or "see project page", and destroys the old ones.  
This can usually be fixed by using `addon.tab.waitForElement` or the `urlChange` event.

#### The Scratch editor language can be changed without a reload

Unlike the Scratch website, the Scratch editor will not reload when changing the language. When selecting a different language, Scratch might destroy and re-create some HTML elements.

#### Other situations to consider

- The project editor may be used without a defined project ID (for example, when logged out).
- The editor might switch from LTR to RTL (or viceversa) without requiring a page reload.


### Scratch website

#### scratch-www pages don't reload after logging in

Unlike scratchr2 pages, scratch-www pages do not force a page reload after logging in. For example, if you go to a project page while being logged out, then log in, the page will not reload. This also affects studios, the messages page, etc.  
In contrast, all Scratch pages reload after logging out.

#### Project pages never return 404s

Even if the project is unshared or doesn't exist, Scratch returns a 200 HTTP status code. The "our server is Scratch'ing its head" message is added dynamically to the page by Scratch.

#### Other situations to consider

- Each of the 4 tabs inside studios have different URLs, but do not trigger a browser navigation. Addons that affect any of the 4 pages should run, no matter the initial URL.
