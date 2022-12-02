---
title: addon.tab.appendToSharedSpace
h1_title: "`addon.tab.appendToSharedSpace`"
description: Allows multiple addons to add their own UI elements to the same area inside Scratch.
weight: 3
---

The shared spaces API provides a standard way for addons to add their own custom UI elements to areas ("spaces") inside Scratch.

For example, both the "mouse position" and "clone counter" addons add their own HTML elements to the project player stage header, after the stop button.

{{< admonition warning >}}

**If a suitable shared space exists, addons should not use typical DOM methods to add their own elements to a specific section of the page**, such as `parentElement.appendChild(ownElement)`. Instead, addons should use shared spaces by calling this method.  
See below for more information, and a list of existing shared spaces.

{{< /admonition >}}

## Example

As an example, this is how the "pause button" addon could be adding an element to the `afterGreenFlag` space:

```js
// Creating an element and listening to events works like usually
const pauseButton = document.createElement("img");
pauseButton.src = addon.self.dir + "/play.svg";
pauseButton.addEventListener("click", changePauseState);

// Wait until the stage header exists before adding the pause button, like usually
await addon.tab.waitForElement("[class^='green-flag']");

// This number was reserved for the pause button.
// No other addon should use this order number in the `afterGreenFlag` space.
const PAUSE_BUTTON_ORDER_NUMBER = 0;

// appendToSharedSpace is used below, instead of typical element.appendChild()
addon.tab.appendToSharedSpace({
  space: "afterGreenFlag",
  element: pauseButton,
  order: PAUSE_BUTTON_ORDER_NUMBER
});
```

## Description

Order numbers prevent adding new UI elements from being a racy operation, where users would observe that the order of UI elements added by third-party browser extensions varies unpredictably on each page session.

#### Regarding order numbers
- Each shared space has its own order number set, independent from all other shared spaces.
- Order numbers are typically positive integers, but negative and decimal numbers are also supported.
- The element with the lowest number will always become the first child of the corresponding HTML element.
- Any addon can theoretically call this method with any order number, and no error will be thrown. Order numbers aren't logically reserved. Developers are in charge of making sure each addon is calling this method with a suitable order number.
- Multiple order numbers may be reserved for a single addon within a shared space.
- In some cases, 2 or more addons may use the same order number within the same shared space, as long as only one of the elements can be visible at once.

{{< admonition info >}}

This API does not remove the need to wait until the shared space HTML element exists, if applicable. The `addon.tab.waitForElement` method is still necessary in most situations.

{{< /admonition >}}

#### Defining shared spaces

The list of existing shared spaces is hardcoded inside the code definition of the method (`addon-api/content-script/Tab.js`).  
Each shared space has a name, and is defined by these properties:
1. **Space parent element**: the HTML element where addons would typically add their UI elements inside of. This will be the parent element of all elements added to the shared space.
2. **Space starting bound** (optional): the sibling after which shared space items should always be added.
3. **Space ending bound** (optional): the sibling before which shared space items should always be added.
4. **Accepts `scope` option**: whether a space can exist multiple times per page. In those cases, addons should manually provide an HTML element that contains the wanted parent element.

As an example, the definition of the `afterGreenFlag` shared space calls `document.querySelector('div[class^="controls_controls-container"]')` to find the space parent element. Additionally, this space does not use the `scope` option, because there can only be 1 project player per document.

{{< admonition info >}}

If more than 1 addon is adding custom UI elements inside the same HTML parent element, a shared space must be created.  
In cases where only one addon is adding custom UI elements, it's not necessary to create a space for it.

{{< /admonition >}}

## Method

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>options</td>
    <td><code>Object</code></td>
    <td>Yes</td>
    <td>
      <table>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>space</td>
          <td><code>string</code></td>
          <td>Yes</td>
          <td>The name of the space where the element should be added (see list below).</td>
        </tr>
        <tr>
          <td>element</td>
          <td><code>HTMLElement</code></td>
          <td>Yes</td>
          <td>The element that should be added to the space.</td>
        </tr>
        <tr>
          <td>order</td>
          <td><code>number</code></td>
          <td>Yes</td>
          <td>The order number for the element.</td>
        </tr>
        <tr>
          <td>scope</td>
          <td><code>HTMLElement</code></td>
          <td>Usually not.<br>Only for some spaces.</td>
          <td>The specific element where the shared space item should be added inside of, for spaces that appear multiple times per page.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>boolean</code></td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Whether the element was added. Typically ignored.</td>
  </tr>
</table>

## List of shared spaces

### Scratch editor spaces
#### `stageHeader`
Elements added to this space will be positioned next to the "small stage" and "big stage" buttons.  
This is typically the right side of the stage header. This might not be true in RTL languages, or if the `editor-buttons-reverse-order` addon is enabled.

![Shared space image](/assets/img/docs/sharedspace-stageheader.jpg)

This shared space may exist in 5 different situations:
1. Project in `editor` mode, small stage disabled (default).
2. Project in `editor` mode, small stage enabled. Elements from this space are often hidden in this situation.
3. Project in `editor` mode, `hide-stage` addon functionality triggered by the user.
4. Project in `projectpage` mode.
5. Project in `embed` mode.

This shared space will not exist while on `fullscreen` mode. See [fullscreenStageHeader](#fullscreenstageheader).

**Typical CSS properties**: `margin-right: 0.2rem` (LTR), `margin-left: 0.2rem` (RTL)

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>div[class^="stage-header_stage-size-row"]</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>"Small stage" button or "full screen" button</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>❌</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
    <th>Visibility in small stage mode</th>
  </tr>
  <tr>
    <td><code>debugger</code></td>
    <td>Debugger button</td>
    <td>0</td>
    <td>Hidden</td>
  </tr>
  <tr>
    <td><code>gamepad</code></td>
    <td>Gamepad button</td>
    <td>1</td>
    <td>Hidden</td>
  </tr>
</table>

#### `fullscreenStageHeader`
See [stageHeader](#stageheader). Full screen can be triggered both from the project page and from inside the editor.

![Shared space image](/assets/img/docs/sharedspace-fullscreenstageheader.jpg)

**Typical CSS properties**: `margin-right: 0.2rem` (LTR), `margin-left: 0.2rem` (RTL)

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>div[class^="stage-header_stage-menu-wrapper"]</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>"Full screen" button</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>❌</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
  </tr>
  <tr>
    <td><code>gamepad</code></td>
    <td>Gamepad button</td>
    <td>0</td>
  </tr>
</table>

#### `afterGreenFlag`
Elements added to this space will be positioned between the green flag and the stop button.  
This space will exist in all situations where a project player also exists.

![Shared space image](/assets/img/docs/sharedspace-aftergreenflag.jpg)

**Typical CSS properties:** `padding: 0.375rem`

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>div[class^="controls_controls-container"]</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>Green flag button</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>Stop button</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>❌</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
    <th>Visibility in small stage mode</th>
  </tr>
  <tr>
    <td><code>pause</code></td>
    <td>Pause button</td>
    <td>0</td>
    <td>Visible</td>
  </tr>
</table>

#### `afterStopButton`
Elements added to this space will be positioned after the project control buttons.  
This space will exist in all situations where a project player also exists.

![Shared space image](/assets/img/docs/sharedspace-afterstopbutton.jpg)

**Typical CSS properties:** `padding-left: 0.25rem; padding-right: 0.25rem`

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>div[class^="controls_controls-container"]</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>Stop button</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>None</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>❌</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
    <th>Visibility in small stage mode</th>
  </tr>
  <tr>
    <td><code>mute-project</code></td>
    <td>Muted project indicator (only visible if <code>vol-slider</code> disabled)</td>
    <td>0</td>
    <td>Visible</td>
  </tr>
    <tr>
    <td><code>vol-slider</code></td>
    <td>Muted project indicator and volume slider</td>
    <td>0</td>
    <td>Hidden</td>
  </tr>
  <tr>
    <td><code>mouse-pos</code></td>
    <td>Mouse coordinates</td>
    <td>1</td>
    <td>Hidden</td>
  </tr>
  <tr>
    <td><code>clone-count</code></td>
    <td>Clone count</td>
    <td>2</td>
    <td>Hidden</td>
  </tr>
</table>

#### `afterSoundTab`
Elements added to this space will be positioned after the "sounds" tab.

![Shared space image](/assets/img/docs/sharedspace-aftersoundtab.jpg)

**Typical DOM classes for elements added to this space:** `addon.tab.scratchClass("react-tabs_react-tabs__tab", "gui_tab")`

The order number typically matches the reserved value for `redux.state.scratchGui.editorTab.activeTabIndex`.

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>div[class^="react-tabs_react-tabs__tab-list"]</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>"Sounds" tab</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>Search bar added by <code>find-bar</code> addon</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>❌</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
  </tr>
  <tr>
    <td><code>variable-manager</code></td>
    <td>"Variables" tab</td>
    <td>3</td>
  </tr>
</table>

### Scratch website spaces
#### `afterCopyLinkButton`
Elements added to this space will be positioned after the "copy link" button in project pages.

![Shared space image](/assets/img/docs/sharedspace-aftercopylinkbutton.jpg)

**Typical DOM classes for elements added to this space:** `button`, `action-button`

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>.flex-row.action-buttons</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>"Copy link" button</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>None</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>❌</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
  </tr>
  <tr>
    <td><code>remix-tree-button</code></td>
    <td>"Remix tree" button</td>
    <td>0</td>
  </tr>
</table>

#### `beforeRemixButton`
Elements added to this space will be positioned before the "remix" or "see inside" buttons in project pages.

![Shared space image](/assets/img/docs/sharedspace-beforeremixbutton.jpg)

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>div.project-buttons</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>"Remix" button or "see inside" button</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>❌</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
  </tr>
  <tr>
    <td><code>project-info</code></td>
    <td>Sprite and script count</td>
    <td>0</td>
  </tr>
  <tr>
    <td><code>turbowarp-player</code></td>
    <td>TurboWarp button</td>
    <td>1</td>
  </tr>
  <tr>
    <td><code>remix-button</code></td>
    <td>Remix button (only visible in own projects)</td>
    <td>9</td>
  </tr>
</table>

### Scratch forums spaces
#### `forumsBeforePostReport`
Elements added to this space will be positioned before the "report" button in a specific post.

![Shared space image](/assets/img/docs/sharedspace-forumsbeforepostreport.jpg)

If the "report" button does not exist (user is logged out), a visible placeholder dot will be added to the post automatically to act as a separator between the `forumsBeforePostReport` and `forumsAfterPostReport` spaces.

Addition of the `|` separator is handled by the shared spaces API.

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>.postfootright > ul</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>"Report" button</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>✔️ (usually a <code>div.blockpost</code>)</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
  </tr>
  <tr>
    <td><code>my-ocular</code></td>
    <td>Reactions</td>
    <td>0</td>
  </tr>
  <tr>
    <td><code>my-ocular</code></td>
    <td>Reaction menu</td>
    <td>1</td>
  </tr>
  <tr>
    <td><code>my-ocular</code></td>
    <td>View in Ocular button</td>
    <td>2</td>
  </tr>
  <tr>
    <td><code>hide-signatures</code></td>
    <td>"Show signature" button</td>
    <td>9</td>
  </tr>
  <tr>
    <td><code>forum-id</code></td>
    <td>"Quote post number" button</td>
    <td>10</td>
  </tr>
</table>

#### `forumsAfterPostReport`
Elements added to this space will be positioned after the "report" button in a specific post.

![Shared space image](/assets/img/docs/sharedspace-forumsafterpostreport.jpg)

See [forumsBeforePostReport](#forumsbeforepostreport) for more information.

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>.postfootright > ul</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>"Report" button</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>None</td>
  </tr>
  <tr>
    <td><code>scope</code> option used</td>
    <td>✔️ (usually a <code>div.blockpost</code>)</td>
  </tr>
</table>

<table>
  <tr>
    <th>Addon ID</th>
    <th>Element</th>
    <th>Order number</th>
  </tr>
  <tr>
    <td><code>show-bbcode</code></td>
    <td>Show BBCode button</td>
    <td>0</td>
  </tr>
</table>
