---
title: Userscripts best practices
description: Follow these best practices when writing or reviewing userscript code.
---

Follow these best practices when writing or reviewing userscript code.

### DOM manipulation

<!--
TODOs:
- Do not .remove() elements unless the addon created it
- Use addEventListener instead of inline events such as "onclick"
- Use waitForElement() only if the element might not exist
-->

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

### JavaScript best practices

<!--
TODOs:
- Use modern javascript (fetch(), optional chaining, let & const)
- Apply common JavaScript best practices (triple equals, const unless mutable later)
-->

#### Do not set global variables

Avoid setting properties on the global `window` object, unless you are polluting a global function such as `fetch()`.  
If multiple addons need to share information or functions between each other, create a JS module file and import it from both userscripts.

{{< admonition error >}}
```js
// Don't do this:
window.isDarkMode = true;
```
{{< /admonition >}}

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

TODO.


##### Other situations to consider

- The project editor may be used without a defined project ID (for example, when logged out).


#### Scratch website

##### Some pages don't reload after logging in

Some scratch-www pages do not force a page reload after logging in. For example, if you go to a project page while being logged out, then log in, the page will not reload.

The pages that have this behavior are:
- The messages page (/messages)
- Project pages
- Studios

##### Project pages never return 404s

Even if the project is unshared or doesn't exist, Scratch returns a 200 HTTP status code. The "our server is Scratch'ing its head" message is added dynamically to the page by Scratch.

##### Other situations to consider

- The messages page is available while logged out.
