---
title: addon.tab.appendToSharedSpace
h1_title: "`addon.tab.appendToSharedSpace`"
description: Allows multiple addons to add their own UI elements to the same area inside Scratch.
weight: 3
---

## Description
Allows multiple addons to add their own UI elements to the same area inside Scratch.  
The important part of this API is the order number, which prevents the appending new UI elements from being a racy operation and the order of the buttons varying impredictively, specially in the cases where the addons support dynamicEnable.

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
          <td><code>String</code></td>
          <td>Yes</td>
          <td>The ID of the space where the element should be appended.</td>
        </tr>
        <tr>
          <td>element</td>
          <td><code>HTMLElement</code></td>
          <td>Yes</td>
          <td>The element, owned by the addon calling the method, that should be appended.</td>
        </tr>
        <tr>
          <td>order</td>
          <td><code>Number</code></td>
          <td>Yes</td>
          <td>The order number for the element. Lowest gets appended first in the parent element.</td>
        </tr>
        <tr>
          <td>scope</td>
          <td><code>HTMLElement</code></td>
          <td>Only for some spaces</td>
          <td>The specific element to append the element in, for spaces that appear multiple times per page.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>Boolean</code></td>
  </tr>
  <tr>
    <td>Description</td>
    <td>Whether the element was appended.</td>
  </tr>
</table>

## Scratch editor spaces
### `stageHeader`
Right side of the stage header in editor, embed and projectplayer modes.  
The standard CSS margin for the buttons added in this space is `margin-right: 0.2rem`.

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
    <td>Small stage button or fullscreen icon</td>
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

### `fullscreenStageHeader`
Right side of the stage header in fullscreen mode.  
The standard CSS margin for the buttons added in this space is `margin-right: 0.2rem`.

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
    <td>Fullscreen icon</td>
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

### `afterGreenFlag`
Buttons that go between the green flag and the stop button.

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

### `afterStopButton`
Elements that go after the project control buttons.  
The standard CSS for the buttons added in this space is `padding: 0.25rem`.

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
    <td>Muted project indicator</td>
    <td>0</td>
    <td>Visible</td>
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

### `afterSoundTab`
Added editor tabs that go after the sound tab.  
The order number should match the used `activeTabIndex` by the new tab.

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>div[class^="react-tabs_react-tabs__tab-list"]</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>Sound tab</td>
  </tr>
  <tr>
    <td>Space ending bound</td>
    <td>Search bar added by <code>editor-devtools</code></td>
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
    <td>Variables tab</td>
    <td>3</td>
  </tr>
</table>

## Scratch website spaces
### `afterCopyLinkButton`
Buttons that go after the "copy link" button in project pages.

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>.flex-row.action-buttons</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>Copy link button</td>
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
    <td>Remix tree button</td>
    <td>0</td>
  </tr>
</table>

### `beforeRemixButton`
Elements that go to the left of the "remix" or "see inside" buttons in project pages.

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
    <td>Remix button or see inside button</td>
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
</table>

## Scratch forums spaces
### `forumsBeforePostReport`
Links placed before the "report" button in a specific post.  
If the "report" button does not exist, a visible placeholder dot will be added to the page automatically to act as a separator between the `forumsBeforePostReport` and `forumsAfterPostReport` spaces.  
Addition of the `|` separator is handled by the space.

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
    <td>Report button</td>
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
</table>

### `forumsAfterPostReport`
Links placed after the "report" button in a specific post.  
If the "report" button does not exist, a visible placeholder dot will be added to the page automatically to act as a separator between the `forumsBeforePostReport` and `forumsAfterPostReport` spaces.  
Addition of the `|` separator is handled by the space.

<table>
  <tr>
    <td>Space parent element</td>
    <td><code>.postfootright > ul</code></td>
  </tr>
  <tr>
    <td>Space starting bound</td>
    <td>Report button</td>
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