---
title: About userscripts
description: Userscripts are JavaScript files that are executed every time the user loads a Scratch page. They can modify the document's HTML, add new buttons, customize Scratch editor behavior, and so much more.
aliases: 
  - /docs/developing/about-userscripts
---

Userscripts are JavaScript files that are executed every time the user loads a Scratch page. They can modify the document's HTML, add new buttons, customize Scratch editor behavior, and so much more.

Similarly to userscripts that you might download for userscript managers like Tampermonkey or Greasemonkey, Scratch Addons userscripts consist of pieces of JavaScript that are executed in the same execution context as the JavaScript code from Scratch itself. In browser extension vocabulary, this execution context is often called the "main world".

Even though Scratch Addons userscripts are part of a browser extension, they cannot access any `chrome.*` or `browser.*` APIs. Instead, Scratch Addons offers an [`addon.*` API](/docs/reference/addon-api/). 


## Declaring userscripts in the addon manifest

{{< admonition warning >}}
**Some changes require an extension reload** from `chrome://extensions` to take effect, such as updating the addon manifest file.

It's not necessary to reload the extension when changing the source of an already existing userscript JavaScript file. In those cases, reloading the page is enough.
{{< /admonition >}}

<!-- TODO: revamp -->

<!-- TODO: create a "matches" page -->

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

## Creating your first userscript

Unlike extension content scripts and Tampermonkey userscripts, you must wrap all of your code inside a module default export:
```js
// Example userscript
export default async function ({ addon, console }) {
  console.log("Hello, " + await addon.auth.fetchUsername());
  console.log("How are you today?");
}
```

Remember that JavaScript allows functions to be declared inside other functions, for example:
```js
export default async function ({ addon, console }) {
  async function sayHelloToUser() {
    console.log("Hello, " + await addon.auth.fetchUsername());
  }

  await sayHelloToUser();
  console.log("How are you today?");
}
```

{{< admonition info >}}
You can access many `addon.*` API utilities from userscripts. For example, you can get the current username, wait until an element exists on the page, or get a reference to the Scratch VM object.

For more information, check the [API reference](/docs/reference/addon-api/).
{{< /admonition >}}


## Modifying the document HTML

Use [browser DOM APIs](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) to customize the HTML of the page.

<!-- TODO : an example -->

## Localizing userscripts

Addon userscripts sometimes need to reference English words or sentences. Make sure not to hardcode them, so that they can be part of the translation process.

{{< admonition error >}}
```js
// Don't do this:
document.querySelector(".sa-find-bar").placeholder = "Find blocks";
```
{{< /admonition >}}

To create a translatable string, follow these steps:
1. Create a file named `addon-id.json` inside the `/addon-l10n/en` folder.
2. Provide an ID for every string:
```json
{
  "addon-id/find": "Find blocks"
}
```
3. Make sure to import the `msg()` function in your userscript. The first line of your userscript should look like this:
```js
export default async function ({ addon, console, msg  }) {
                                              // ^^^
```
4. Use the `msg()` function in your code, instead of a hardcoded string:
```js
document.querySelector(".sa-find-bar").placeholder = msg("find");
```

{{< admonition info >}}
For more information about localizing userscripts, see [this page](/docs/localization/localizing-addons/).
{{< /admonition >}}


## Technical details

Each userscript file is a JavaScript module that exports a function. Scratch Addons only imports the module if needed, and executes it after the page has fully loaded.

<!-- TODO: explain runAtComplete -->

Userscripts are JavaScript modules, so they always run on ["strict mode"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). This also means that userscripts may use [top-level imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) to import other JavaScript files.

<!-- TODO: explain execution order isn't guaranteed -->


## Debugging userscripts

<!-- TODO: revisit this section -->

**Make sure to refresh Scratch Addons from `chrome://extensions` after making any changes to your addon.**  
To debug userscripts, first of all make sure your addon is enabled.  
Then, go to a URL where you specified your userscript should run.  
Open the console by pressing Ctrl+Shift+J.  
You should see console logs by addons, including yours. If you're a devtools pro, you won't have any trouble setting breakpoints in your code.  
Protip: if you want to test the `addon.*` API without changing your file every time, make your addon `window.addon = addon;` (inside the main function), and you'll be able to access your addon's `addon` object from the console. Make sure to remove that line before contributing to the repo! Userscripts must not pollute the global object.
