---
title: Best practices for userscripts
description: Follow these best practices when writing or reviewing userscript code.
---

Follow these best practices when writing or reviewing userscript code.


### DOM manipulation


#### Use addEventListener instead of "onevent"

Avoid setting "onevent" values on HTML elements, such as `onclick`. Instead, use `addEventListener`. This allows multiple addons to register the same event on the same element, without conflicting.  
It is still valid to use "onevent", but only for elements that were created by the same addon that is registering the event.  
In all cases, avoid setting "onevent" HTML attributes, for example `element.setAttribute("onclick", "don't do this")`.

{{< admonition error >}}
```js
// Don't do this:
document.querySelector(".remix-button").onclick = () => {
  prompt("Are you sure you want to remix?");
};
```
{{< /admonition >}}

{{< admonition success >}}
```js
// Do this instead:
document.querySelector(".remix-button").addEventListener("click", () => {
  prompt("Are you sure you want to remix?");
});
```
{{< /admonition >}}

#### Avoid using innerHTML

Avoid using `innerHTML`. Use `innerText` or `textContent` instead.  
Other APIs that can potentially lead to XSS vulnerabilities should be avoided too, such as `insertAdjacentHTML`, `outerHTML`, `document.write()`, etc.

{{< admonition error >}}
```js
// Don't do this:
document.querySelector(".sa-remix-button").innerHTML = `<span>Remix ${projectTitle}</span>`;
```
{{< /admonition >}}

{{< admonition success >}}
```js
// Do this instead:
const span = document.createElement("span");
span.textContent = `Remix ${projectTitle}`;
document.querySelector(".sa-remix-button").append(span);
```
{{< /admonition >}}

#### Hide elements instead of removing them

Avoid calling `.remove()` on HTML elements, which in extreme cases, can cause the project page to crash.  
Addons may only use it for elements they themselves created, in specific situations.

{{< admonition error >}}
```js
// Don't do this:
document.querySelector(".remix-button").remove();
```
{{< /admonition >}}

{{< admonition success >}}
```js
// Do this instead:
document.querySelector(".remix-button").style.display = "none";

// Or do this, with help from a userstyle:
document.querySelector(".remix-button").classList.add("sa-remix-button-hidden");
```
{{< /admonition >}}

#### Only use waitForElement when necessary

Avoid using the `addon.tab.waitForElement` API if the element is guaranteed to exist. It will still work, and performance will not be heavily impacted, but it might confuse other developers that are reading the code. The usage of waitForElement should usually mean that there is at least 1 scenario where the element doesn't exist at that execution point.  
For example, it's not necessary to use waitForElement when searching for forum posts, unless the userscript was declared with `"runAtComplete": false`. In those cases, simply use `document.querySelectorAll()` normally.


### JavaScript best practices


#### Use modern JavaScript

- Prefer newer APIs, such as `fetch()` over `XMLHttpRequest`.
- Never use `==` for comparisons. Use `===` instead.
- Use optional chaining if an object can sometimes be `null`.  
For example, `document.querySelector(".remix-button")?.textContent`.
- Use `for ... of` loops or `.forEach()`.  
Avoid C style loops like `for (let i = 0; i < arr.length; i++)`.

#### Only use "let" over "const" if the variable may be reassigned

{{< admonition info >}}
We usually use `camelCase` to name variables, no matter if they're declared with "let" or "const".  
For constant strings or numbers, we usually use `SNAKE_CASE`.

Here's an example:
```js
let actionCounter = 0;
actionCounter++;

const remixButton = document.querySelector(".remix-button");

const DEFAULT_ZOOM = 1.20;
```
{{< /admonition >}}

People reading your code may assume that a variable that was declared through the "let" keyword might be reassigned at some other point of the script. If that's not the case, use the "const" keyword instead.  
Remember that in JavaScript, declaring an object or an array as a "const", does not mean its values are frozen. Values in the object can still be changed, even if the variable itself cannot be reassigned.

#### Do not set global variables

Avoid setting properties on the global `window` object, unless you are polluting a global function such as `fetch()`.  
If multiple addons need to share information or functions between each other, create a JS module file and import it from both userscripts.

{{< admonition error >}}
```js
// Don't do this:
window.isDarkMode = true;
```
{{< /admonition >}}

#### Do not declare functions outside of the default export

There's no reason to declare functions outside the `export default async function(){}` function. JavaScript allows functions to be declared inside other functions.

You may move functions to separate JS module files (which aren't declared as userscripts in the addon manifest) if appropriate, but keep in mind that those imported files won't have access to the `addon` object, unless you expose a setup function that accepts it as an argument, and call the function in the userscript entry point.

#### Do not unpollute functions

Multiple addons might want to pollute the same function, such as Scratch VM methods, `XMLHttpRequest`, `fetch()` or `FileReader()`.  
In those cases, one of the userscripts will be polluting the real function, while the others will be polluting functions which were already polluted themselves. If, for example, the first userscript that polluted decides to unpollute (for example, by doing `window.fetch = realFetch`), then all other functions in the "pollution chain" are also lost, which is unexpected.  
For this reason, functions should not be unpolluted. Instead, pass the arguments to the original function.

{{< admonition error >}}
```js
const oldDeleteSprite = vm.deleteSprite;
const newDeleteSprite = function (...args) {
  // ...
}

addon.self.addEventListener("disabled", () => {
  // Don't do this:
  vm.deleteSprite = oldDeleteSprite;
});
```
{{< /admonition >}}

{{< admonition success >}}
```js
// Do this instead:
const oldDeleteSprite = vm.deleteSprite;
const newDeleteSprite = function (...args) {
  if (addon.self.disabled) return oldDeleteSprite.apply(this, args);
  // ...
};
```
{{< /admonition >}}


### Edge cases


#### Scratch project page and editor


##### The DOM is destroyed after going inside or outside the editor

Scratch creates all HTML elements each time the user clicks "see inside" or "see project page", and destroys the old ones.  
This can usually be fixed by using `addon.tab.waitForElement` or the `urlChange` event.

#### The Scratch editor language can be changed without a reload

Unlike the Scratch website, the Scratch editor will not reload when changing the language. When selecting a different language, Scratch might destroy and re-create some HTML elements.

##### Other situations to consider

- The project editor may be used without a defined project ID (for example, when logged out).
- The editor might switch from LTR to RTL (or viceversa) without requiring a page reload.


#### Scratch website

##### scratch-www pages don't reload after logging in

Unlike scratchr2 pages, scratch-www pages do not force a page reload after logging in. For example, if you go to a project page while being logged out, then log in, the page will not reload. This also affects studios, the messages page, etc.  
In contrast, all Scratch pages reload after logging out.

##### Project pages never return 404s

Even if the project is unshared or doesn't exist, Scratch returns a 200 HTTP status code. The "our server is Scratch'ing its head" message is added dynamically to the page by Scratch.

##### Other situations to consider

- Each of the 4 tabs inside studios have different URLs, but do not trigger a browser navigation. Addons that affect any of the 4 pages should run, no matter the initial URL.
