---
title: Userscripts
description: Userscripts allow you to run code along Scratch pages - you can do stuff like add buttons, enhance the Scratch editor, or anything you can imagine.
aliases: 
  - /docs/developing/about-userscripts
---
## What are they?
Userscripts allow you to run code along Scratch pages - you can do stuff like add buttons, enhance the Scratch editor, or anything you can imagine.

## How do I add a userscript?
**Make sure to refresh Scratch Addons from `chrome://extensions` after doing any changes to your addon.**  
Go to the manifest of your addon (addon.json) and add a property called `userscripts"`.  
This property must be an array.  
Each item of the array must have the following properties: `"url"` and `"matches"`.  
`"url"` must be a relative URL to a JavaScript file.  
`"matches"` must be an array of URLs where you want to run the userscript on. You can use asterisks.
Example manifest:
```json
{
  "name": "Scratch Messaging",
  "description": "Provides easy reading and replying to your Scratch messages.",
  "userscripts": [
    {
      "url": "userscript.js",
      "matches": ["https://scratch.mit.edu/*"]
    },
    {
      "url": "second_userscript.js",
      "matches": ["https://scratch.mit.edu/projects/*", "https://scratch.mit.edu/users/*"]
    }
  ],
  "tags": ["community"],
  "enabledByDefault": false
}
```

## How does the JavaScript file look like?
Userscripts JS files require a specific structure to work.  
For userscripts, you **must** wrap all your code inside a function looking like this:
```js
export default async function ({ addon, global, console }) {
  console.log("Hello, " + await addon.auth.fetchUsername());
}
```
If you want to write your own functions to have cleaner code, you should include them inside the main function:  
**This will work:**
```js
export default async function ({ addon, global, console }) {
  // This works!
  sayHello();
  async function sayHello() {
    console.log("Hello, " + await addon.auth.fetchUsername());
  }
}
```
**This will NOT work:**
```js
export default async function ({ addon, global, console }) {
  // This WON'T work!
  sayHello();
}
async function sayHello() {
  console.log("Hello, " + await addon.auth.fetchUsername());
  // Error: addon is not defined!
}
```

## [`addon.*` APIs](/docs/developing/addon-apis-reference)
You can access some `addon.*` APIs from userscripts. For more information, check the documentation.

## Technical aspects of userscripts
Userscripts run after the Scratch page has fully loaded - in other words, they run in `defer` mode.
Technically speaking, each userscript is a JavaScript module that exports a function. JavaScript modules always run on "strict mode".  
This means that userscripts of the same addon DO NOT share variables and functions! If you want to do that, you should use the `global` object (more info below).
Scratch Addons then calls that function modules exported, giving it access to the `addon.*` APIs, as well as special wrappers:  
- `addon`: gives userscripts access to the [`addon.*` APIs](/docs/developing/addon-apis-reference).
- `global`: this is a shared object between all userscripts of the same addon. **Example usage:**
```js
// userscript-1.js
export default async function ({ addon, global, console }) {
  global.sayHello = () => console.log("Hello, " + addon.auth.fetchUsername());
}

// userscript-2.js
export default async function ({ addon, global, console }) {
  global.sayHello();
  // This works, as long as in the addon manifest, userscript-1.js is before userscript-2.js in the userscripts array.
}
```
- `console`: this is a wrapper that allows you to see what addon triggered the log you're seeing easily.

## Debugging userscripts
**Make sure to refresh Scratch Addons from `chrome://extensions` after doing any changes to your addon.**  
To debug userscripts, first of all make sure your addon is enabled.  
Then, go to a URL where you specified your userscript should run.  
Open the console by pressing Ctrl+Shift+J.  
You should see console logs by addons, including yours. If you're a devtools pro, you won't have any trouble setting breakpoints in your code.  
Protip: if you want to test the `addon.*` API without changing your file every time, make your addon `window.addon = addon;` (inside the main function), and you'll be able to access your addon's `addon` object from the console. Make sure to remove that line before contributing to this repo! Userscripts must not pollute the global object.
