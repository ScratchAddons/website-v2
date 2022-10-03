---
title: addon.tab
h1_title: "`addon.tab`"
description: Allows addon userscripts to get information about the tab they're currently running on.
weight: 5
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in popup scripts | ❌ |
| Required manifest permissions | None |

## Description
Allows addon userscripts to get information about the tab they're currently running on.

## Examples
### Using `addon.tab.waitForElement`
We can use `addon.tab.waitForElement` with `{"markAsSeen": true}` inside a `while(true)` loop to store the IDs of all comments in the page.  
Using `addon.tab.waitForElement`, we don't need to have code that waits until comments have loaded. This way, we also store the IDs of newly posted comments and new loaded comments when the user clicks "load more comments".
```js
const commentIds = [];
while (true) {
  const comment = await addon.tab.waitForElement("div.comment", {
      markAsSeen: true,
  });
  commentIds.push(comment.id);
}
```

### Using `addon.tab.displayNoneWhileDisabled` (`dynamicDisable`)
We use `addon.tab.displayNoneWhileDisabled` to hide an image when the addon gets disabled.  
We create a button to hide the image when clicked, and the image succesfully gets hidden, even if the addon is enabled.  
We also set the `display` CSS property of the image to `flex` when visible, even tho that is not the default value for images.
```js
  /* userscript.js */
  const img = document.createElement("img");
  img.classList.add("sa-example-img");
  addon.tab.displayNoneWhileDisabled(img, { display: "flex" });
  const btn = document.createElement("btn");
  btn.onclick = () => {
    // We want to hide the image
    // We cannot do `img.style.display = "none"` because we
    // used displayNoneWhileDisabled with the same element
    img.classList.add("sa-example-img-hide");
  };
```

```css
/* userstyle.css */
.sa-example-img {
  display: flex;
}
.sa-example-img-hide {
  /* We want to hide the image if the button was clicked, 
  even if the addon is enabled */
  display: none !important;
}
```

### Reacting to URL dynamically changed
```js
addon.tab.addEventListener("urlChange", function(event) {
  console.log(`URL changed! It was previously ${event.detail.oldUrl}, it's now ${event.detail.newUrl}`);
});
```

## Sub-APIs
### [addon.tab.traps](addon.tab.traps)
Allows addons to get direct references to objects, which are particularly useful for enhancing the editor, like the Scratch VM or the Blockly instance.
### [addon.tab.redux](addon.tab.redux)
Allows addons to get and modify Redux state, which is useful for addons that modify scratch-www pages and the editor.

## Properties
### `addon.tab.clientVersion`
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

The Scratch client for the current tab (`scratch-www` or `scratchr2`).  
The Scratch community website has 2 working clients used throughout the site.  
`scratch-www` is React/Redux based and client side rendered. This client is the one used in the homepage.  
`scratchr2` is Django/jQuery/Backbone.js based and mostly server side rendered. This client is the one used in profile pages.

### `addon.tab.editorMode`
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

The current viewing mode for the project (`projectpage`, `editor`, `fullscreen` or `embed`).  
Will be `null` if the current tab is not a project.

### `addon.tab.direction`
<table>
  <tr>
    <td>Value</td>
    <td><code>"ltr" | "rtl"</code></td>
  </tr>
  <tr>
    <td>Nullable</td>
    <td>No</td> 
  </tr>
</table>

The writing direction for the language of the Scratch website.

## Methods
### `addon.tab.waitForElement`
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

Waits until an element exists, then returns the element.  
Internally, a `MutationObserver` that reacts to any DOM tree change is used. This observer does not react to attribute-only DOM updates.  
Option `markAsSeen` should be set to true if you're using this method inside a `while(true)` loop.  
Options `condition`, `reduxCondition` and `reduxEvents` should be used as optimizations, in order to avoid multiple calls to `document.querySelector` when it's guaranteed the element will not exist yet.

### `addon.tab.displayNoneWhileDisabled`
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

Hides the given element with `display: none` when the addon is disabled, until it is reenabled.  
If the intended `display` CSS property value for the provided element when visible is not the default value for the type of provided element (for example, `block` for `div`s and `inline` for `span`s), you should provide that value inside the options parameter.  
If you want to manually hide the element in situations where the addon is enabled, you should use a dedicated class name for that, instead of manually setting `el.style.display = "none";`. Use a class name selector in a userstyle to set `display: none !important;` on the element.

### `addon.tab.copyImage`
<table>
  <tr>
    <td>Required manifest permissions</td>
    <td><code>clipboardWrite</code></td>
  </tr>
</table>

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>dataURL</td>
    <td><code>String</code></td>
    <td>Yes</td>
    <td>Data URL of a PNG image.</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;void></code></td>
  </tr>
    <td>Promise rejects if</td>
    <td>Image could not be copied.</td>
</table>

Copies a PNG image to the clipboard.  
Only run this in response of the user explicitly pressing Ctrl+C.  
Internally uses `browser.clipboard.setImageData` in Firefox and `navigator.clipboard.write` in Chrome and Edge.

### `addon.tab.scratchClass`
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>unhashedClassName</td>
    <td><code>String</code></td>
    <td>Min 1</td>
    <td>One or many unhashed Scratch stylesheet class names, as one argument each.</td>
  </tr>
  <tr>
    <td>opts</td>
    <td><code>Object</code></td>
    <td>No</td>
    <td>
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>others</td>
          <td><code>String | String[]</code></td>
          <td>Yes</td>
          <td>Non-Scratch class(es) to merge</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>String</code></td>
  </tr>
</table>

Gets the hashed class name for a Scratch stylesheet class name.

### `addon.tab.scratchMessage`
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>key</td>
    <td><code>String</code></td>
    <td>Yes</td>
    <td>The Scratch translation key.</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>String | ""</code></td>
  </tr>
</table>

Gets Scratch translation from the current Scratch tab.  
Note that these are Scratch locales, not Scratch Addons locales.  
If the message isn't found, `""` is returned and a warning is logged in the console.  
Internally uses `window.django.gettext` or `window._messages`.

### [`addon.tab.appendToSharedSpace`](addon.tab.appendtosharedspace)

See [addon.tab.appendToSharedSpace](addon.tab.appendtosharedspace).

### `addon.tab.createBlockContextMenu`
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>blockContextMenuCallback</td>
    <td><code>Function</code></td>
    <td>Yes</td>
    <td>Returns new menu items.
      <table>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>items</td>
          <td>Object[]</td>
          <td>The items added by vanilla code or other addons.
            <table>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>enabled</td>
                <td>Boolean</td>
                <td>Whether the item is enabled or not.</td>
              </tr>
              <tr>
                <td>text</td>
                <td>String</td>
                <td>The context menu item label.</td>
              </tr>
              <tr>
                <td>callback</td>
                <td>Function</td>
                <td>The function that is called when the item is clicked.</td>
              </tr>
              <tr>
                <td>separator</td>
                <td>Boolean</td>
                <td>Whether to add a separator above the item or not.</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>block</td>
          <td><code>Object</code></td>
          <td>The targeted block, if any.</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>conditions</td>
    <td><code>Object</code></td>
    <td>No</td>
    <td>Show the context menu item in various locations.
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>workspace</td>
          <td>Boolean</td>
          <td>No</td>
          <td>false</td>
          <td>The workspace context menu.</td>
        </tr>
        <tr>
          <td>blocks</td>
          <td>Boolean</td>
          <td>No</td>
          <td>false</td>
          <td>The block context menu outside the flyout.</td>
        </tr>
        <tr>
          <td>flyout</td>
          <td>Boolean</td>
          <td>No</td>
          <td>false</td>
          <td>The block context menu inside the flyout.</td>
        </tr>
        <tr>
          <td>comments</td>
          <td>Boolean</td>
          <td>No</td>
          <td>false</td>
          <td>The context menu on comments.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

Adds a context menu item for any of the context menus in the code editor.

### `addon.tab.createEditorContextMenu`
**Documentation for this is a WIP. Not all possible types are listed for some settings.**
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>callback</td>
    <td><code>Function</code></td>
    <td>Yes</td>
    <td>The function that is executed when the item is clicked.
      <table>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>context</td>
          <td><code>Object</code></td>
          <td>The context for the action.
            <table>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>type</td>
                <td><code>String</code></td>
                <td>The type of the context menu. Possible values: "sprite", "costume", "sound"</td>
              </tr>
              <tr>
                <td>menuItem</td>
                <td><code>HTMLElement</code></td>
                <td>The item element.</td>
              </tr>
              <tr>
                <td>target</td>
                <td><code>HTMLElement</code></td>
                <td>The element that this context menu is selecting.</td>
              </tr>
              <tr>
                <td>index</td>
                <td><code>Number</code></td>
                <td>The index, if applicable.</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>options</td>
    <td><code>Object</code></td>
    <td>No (but then it must be returned in `callback`)</td>
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
          <td>className</td>
          <td><code>String</code></td>
          <td>Yes</td>
          <td></td>
          <td>The class name to add to the item.</td>
        </tr>
        <tr>
          <td>types</td>
          <td><code>String[]</code></td>
          <td>No</td>
          <td>All possible values</td>
          <td>Which types of context menu the item should be added to. Possible values: "sprite", "costume", "sound"</td>
        </tr>
        <tr>
          <td>position</td>
          <td><code>String</code></td>
          <td>Yes</td>
          <td></td>
          <td>The shared space inside of the context menu that the item should be added to. Uses `addon.tab.appendToSharedSpace` internally. Possible values: "assetContextMenuAfterExport", "assetContextMenuAfterDelete", "monitor"</td>
        </tr>
        <tr>
          <td>order</td>
          <td><code>Number</code></td>
          <td>Yes</td>
          <td></td>
          <td>The order of the item within its shared space in relation to other items.</td>
        </tr>
        <tr>
          <td>label</td>
          <td><code>String</code></td>
          <td>Yes</td>
          <td></td>
          <td>The label for the item.</td>
        </tr>
        <tr>
          <td>border</td>
          <td><code>Boolean</code></td>
          <td>No</td>
          <td>false</td>
          <td>Whether to add a border to the top of the item or not.</td>
        </tr>
        <tr>
          <td>dangerous</td>
          <td><code>Boolean</code></td>
          <td>No</td>
          <td>false</td>
          <td>Whether to display the item as "dangerous" (orange-colored) or not.</td>
        </tr>
        <tr>
          <td>condition</td>
          <td><code>Function</code></td>
          <td>No</td>
          <td>true</td>
          <td>A function that determines if the item should be shown.
            <table>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>context</td>
                <td><code>Object</code></td>
                <td>The context for the action.
                  <table>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>type</td>
                      <td><code>String</code></td>
                      <td>The type of the context menu. Possible values: "sprite", "costume", "sound"</td>
                    </tr>
                    <tr>
                      <td>menuItem</td>
                      <td><code>HTMLElement</code></td>
                      <td>The item element.</td>
                    </tr>
                    <tr>
                      <td>target</td>
                      <td><code>HTMLElement</code></td>
                      <td>The element that this context menu is selecting.</td>
                    </tr>
                    <tr>
                      <td>index</td>
                      <td><code>Number</code></td>
                      <td>The index, if applicable.</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

Adds a context menu item for any of the non-Blockly context menus, such as the context menu for the sprites list.

### `addon.tab.addBlock`
**Do not use this unless you are adding blocks to the debugger addon.**
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>proccode</td>
    <td><code>String</code></td>
    <td>Yes</td>
    <td>The name that will be used to refer to the block internally. Must specify inputs on the block (if any) using %s (string), %n (number-only), and %b (boolean).</td>
  </tr>
  <tr>
    <td>blockData</td>
    <td><code>Object</code></td>
    <td>Yes</td>
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
          <td>args</td>
          <td><code>String[]</code></td>
          <td>Yes</td>
          <td></td>
          <td>A list of names that will be used to refer to the block's inputs in the callback. If there are no inputs, use an empty array.</td>
        </tr>
        <tr>
          <td>displayName</td>
          <td><code>String</code></td>
          <td>no</td>
          <td>The value of `proccode`</td>
          <td>The name that will be displayed on the block to the user. Must also include block input syntax.</td>
        </tr>
        <tr>
          <td>callback</td>
          <td><code>Function</code></td>
          <td>Yes</td>
          <td></td>
          <td>The function that will execute when the block runs.
            <table>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>args</td>
                <td>An object containing the values that are entered into the block inputs. The keys correpond to the `args` property specified earlier.</dt>
              </tr>
              <tr>
                <td>thread</td>
                <td>A reference to the thread that this block is running in.</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>hidden</td>
          <td><code>Boolean</code></td>
          <td>No</td>
          <td>false</td>
          <td>Whether the block should appear in the flyout or not. This does not affect the workspace.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

Adds a new block to the Debugger category in the block palette.

### `addon.tab.removeBlock`
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>proccode</td>
    <td><code>String</code></td>
    <td>Yes</td>
    <td>The `proccode` value of the block to remove</td>
  </tr>
</table>

Removes a block that was previously added to the Debugger category in the block palette.

### `addon.tab.loadScript`
**In most cases, you should use the [`userscripts` property of the addon manifest](https://scratchaddons.com/docs/reference/addon-manifest/#userscripts-and-userstyles-array) instead.**

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>path</td>
    <td><code>String</code></td>
    <td>Yes</td>
    <td>The path pointing to the script.</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise</code></td>
  </tr>
</table>

Runs the specified script file.

### `addon.tab.loadWorker`
<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>path</td>
    <td><code>String</code></td>
    <td>Yes</td>
    <td>The path pointing to the worker.</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;Worker></code></td>
  </tr>
</table>

Loads the specified Web Worker.

## Events
### `urlChange`
<table>
  <tr>
    <th>Event detail property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>oldUrl</td>
    <td><code>String</code></td>
    <td>The URL before it was dynamically changed</td>
  </tr>
  <tr>
    <td>newUrl</td>
    <td><code>String</code></td>
    <td>The new current URL value</td>
  </tr>
</table>

Fires when Scratch dynamically changes the URL of the page.  
This happens when going inside/outside the editor, or switching tabs in scratch-www studio pages.  
This will not fire if `location.hash` changed.
