---
title: Debugging userscripts
description: Tips to easily debug userscripts.
---

Tips to easily debug userscripts.

#### It's not always necessary to reload the extension

It's not necessary to reload the extension by going to `chrome://extensions` when changing the source of an already existing JavaScript or CSS files. In those cases, reloading the page is enough.

#### Use the addon.* API from the console

For development, you may choose to expose the `addon` object as a global variable, so that it can be accessed within the browser console.

```js
export default async function ({ addon, console }) {
  window.addon = addon;
  // ...
}
```

#### Set breakpoints with the "debugger" keyword

The `debugger;` keyword in JavaScript will freeze the page when ran, if the developer tools are open. Setting breakpoints is useful to inspect the value of local variables during execution.

#### Filter console messages by addon ID

Enter the addon ID on the "filter" console search bar to only view logs and warnings, as well errors logged with `console.error()`. Keep in mind that this will hide all exceptions, unless you're explicitly logging them in your code.
