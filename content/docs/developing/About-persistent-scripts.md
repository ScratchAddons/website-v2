---
title: About Persistant Scripts
---
## What are they?
Persistent scripts allow you to run JavaScript in the background! They're awesome to notify the user about stuff, or preload data so it's ready when the user needs it.

## How do I add a persistent script?
**Make sure to refresh Scratch Addons from `chrome://extensions` after doing any changes to your addon.**  
Go to the manifest of your addon (addon.json) and add a property called `"persistent_scripts"`.  
This property must be an array, even if your addon will only use one persistent script.  
Each item of the array must be a relative URL pointing to a JS file.
Example manifest:
```json
{
  "name": "Scratch Messaging",
  "description": "Provides easy reading and replying to your Scratch messages.",
  "persistent_scripts": ["background.js"],
  "tags": ["community"],
  "enabled_by_default": false
}
```

## How does the JavaScript file look like?
Persistent scripts, as well as userscript, require a specific structure to work.  
For persistent scripts, you **must** wrap all your code inside a function looking like this:
```js
export default async function ({ addon, global, console, setTimeout, setInterval, clearTimeout, clearInterval }) {
  console.log("Hello, " + addon.auth.username);
}
```
If you want to write your own functions to have cleaner code, you should include them inside the main function:  
**This will work:**
```js
export default async function ({ addon, global, console, setTimeout, setInterval, clearTimeout, clearInterval }) {
  // This works!
  sayHello();
  function sayHello() {
    console.log("Hello, " + addon.auth.username);
  }
}
```
**This will NOT work:**
```js
export default async function ({ addon, global, console, setTimeout, setInterval, clearTimeout, clearInterval }) {
  // This WON'T work!
  sayHello();
}
function sayHello() {
  console.log("Hello, " + addon.auth.username);
  // Error: addon is not defined!
}
```

## [`addon.*` APIs](addon.*-APIs-reference)
You can access most `addon.*` APIs from persistent scripts. For more information, check the documentation.

## Technical aspects of persistent scripts
Technically speaking, each persistent script is a JavaScript module that exports a function. JavaScript modules always run on "strict mode".    
This means that persistent scripts of the same addon DO NOT share variables and functions! If you want to do that, you should use the `global` object (more info below).
Scratch Addons then calls that function modules exported, giving it access to the `addon.*` APIs, as well as special wrappers:  
- `addon`: gives persistent script access to the [`addon.*` APIs](addon.*-APIs-reference).
- `global`: this is a shared object between all persistent scripts of the same addon. **Example usage:**
```js
// background-1.js
export default async function ({ addon, global, console, setTimeout, setInterval, clearTimeout, clearInterval }) {
  global.sayHello = () => console.log("Hello, " + addon.auth.username);
}

// background-2.js
export default async function ({ addon, global, console, setTimeout, setInterval, clearTimeout, clearInterval }) {
  global.sayHello();
  // This works, as long as in the addon manifest, background-1.js is before background-2.js in the persistent_scripts array.
}
```
- `console`: this is a wrapper that allows you to see what addon triggered the log you're seeing easily.
- `setTimeout` and `setInterval`: if your addon gets disabled while its running, Scratch Addons needs a wait to stop any pending timeouts and intervals. In order to successfully do that, addons must use these wrappers, instead of `window.setTimeout` and `window.setInterval`.
- `clearTimeout` and `clearInterval`: these need to be wrapped as well to avoid memory leaks - Scratch Addons wouldn't know you cleared a timeout or an interval, and would be storing its timeout/interval ID for no reason. You should not use `window.clearTimeout` or `window.clearInterval` either.

## Debugging persistent scripts
**Make sure to refresh Scratch Addons from `chrome://extensions` after doing any changes to your addon.**  
To debug persistent scripts, first of all make sure your addon is enabled.  
Then, go to `chrome://extensions`, make sure developer mode is on, and find Scratch Addons.  
Click where it says "inspect views: background/background.html".  
Well, that's it - any console logs from your addon will be there, and if you're a devtools pro, you won't have any trouble setting breakpoints in your code.  
Protip: if you want to test the `addon.*` API without changing your file every time, make your addon `window.addon = addon;` (inside the main function), and you'll be able to access your addon's `addon` object from the console. Make sure to remove that line before contributing to this repo! Persistent scripts must not pollute the global object.