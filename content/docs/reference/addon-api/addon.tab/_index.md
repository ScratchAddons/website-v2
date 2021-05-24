---
title: addon.tab
description: Allows addon userscripts to get information about the tab they're currently running on.
weight: 5
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in persistent scripts | ❌ |
| Required manifest permissions | None |

## Description
Allows addon userscripts to get information about the tab they're currently running on.

## Sub-APIs
### [addon.tab.traps](addon.tab.traps)
Allows addons to get direct references to objects, which are particularly useful for enhancing the editor, like the Scratch VM or the Blockly instance.
### [addon.tab.redux](addon.tab.redux)
TODO

## Properties
### addon.tab.clientVersion
<table>
  <tr>
    <td>Value</td>
    <td><code>"scratch-www" | "scratchr2"</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>Yes</td> 
  </tr>
</table>

Currently, the Scratch community website has 2 working clients used throughout the site, one React based and another jQuery based. This getter allows addons to change your behavior depending on the version of the current page.  
Returns either `"scratch-www"` (React based), `"scratchr2"` (jQuery based) or `null`.

### addon.tab.editorMode
<table>
  <tr>
    <td>Value</td>
    <td><code>"projectpage" | "editor" | "fullscreen" | "embed"</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>Yes</td> 
  </tr>
</table>
If the tab is a project, it returns the viewing mode of the project: `"projectpage"`, `"editor"`, `"fullscreen"` or `"embed"`.  
If not in a project, it will return `null`.

## Methods
### addon.tab.waitForElement
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>selector</td>
    <td><code>String</code></td>
    <td>Yes</td>
    <td>One or more selectors to match. Same parameter as <code>document.querySelector</code>.</td>
  </tr>
  <tr>
    <td>options</td>
    <td><code>Object</code></td>
    <td>No</td>
    <td>
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>markAsSeen</td>
          <td><code>Boolean</code></td>
          <td>No</td>
          <td><code>false</code></td>
          <td>Whether it should mark resolved elements to be skipped next time or not.</td>
        </tr>
        <tr>
          <td>condition</td>
          <td><code>Function</code></td>
          <td>No</td>
          <td><code>() => true</code></td>
          <td>A function that returns whether to resolve the selector or not. No arguments are passed.</td>
        </tr>
        <tr>
          <td>reduxCondition</td>
          <td><code>Function</code></td>
          <td>No</td>
          <td><code>() => true</code></td>
          <td>A function that returns whether to resolve the selector or not. <code>addon.tab.redux</code> is passed as an argument.</td>
        </tr>
        <tr>
          <td>reduxEvents</td>
          <td><code>String[]</code></td>
          <td>No</td>
          <td><code>[]</code></td>
          <td>An array of Redux events that must be dispatched before resolving the selector.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;HTMLElement></code></td>
  </tr>
</table>

**Since v1.4.0, this function does not react to attribute changes in the DOM. Please do not use this to react to attribute changes. You can still, however, match static attributes that stay the same since the element is created, until it is destroyed.**  
Returns a promise that resolves to the found element when an element matching that selector is found.  
If the element already exists, it automatically resolves.  
Takes the same argument as `document.querySelectorAll`.  
If the options object includes `{markAsSeen: true}`, the returned element will be marked as seen by the addon, and will be ignored for any future calls to `waitForElement()`, no matter the selector or options object given to it. This is useful for cases where you only want to do an operation once per element.

### addon.tab.displayNoneWhileDisabled
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>element</td>
    <td><code>HTMLElement</code></td>
    <td>Yes</td>
    <td>Element to hide</td>
  </tr>
  <tr>
    <td>options</td>
    <td><code>Object</code></td>
    <td>No</td>
    <td>
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>display</td>
          <td><code>String</code></td>
          <td>No</td>
          <td><code>""</code></td>
          <td>The <code>display</code> CSS value to use when the addon is enabled.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

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
