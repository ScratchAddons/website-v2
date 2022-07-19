---
title: addon.tab.redux (Redux)
toc_title: addon.tab.redux
h1_title: "`addon.tab.redux` (Redux)"
description: Scratch Addons supports getting and modifying Redux state!
weight: 2
aliases:
  - /docs/developing/redux
---
Scratch Addons supports getting and modifying Redux state!

## Keep in mind
- Redux is only available on scratch-www pages (the ones with the thicker navigation bar) and the editor.
- Some extensions conflict with Scratch Addons' Redux feature. Do not use this when unnecessary.
- We expect readers to have basic knowledge on Redux and Scratch's reducers.

## Get Redux state
`addon.tab.redux.state` stores current Redux state. For example, to get message count: `addon.tab.redux.state.messageCount.messageCount`

## Wait for Redux state
`addon.tab.redux.waitForState()` returns a Promise that will resolve when the Redux state meets the given condition.

<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>condition</td>
    <td><code>Function</code></td>
    <td>Yes</td>
    <td>A function that takes Redux state as a parameter and returns whether to keep waiting or not.</td>
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
          <td>actions</td>
          <td><code>String | String[]</code></td>
          <td>No</td>
          <td>All possible values</td>
          <td>The action(s) to check for.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>

## Events
You must first call `addon.tab.redux.initialize()` for Scratch Addons to be able to listen for state changes.

Use `addon.tab.redux.addEventListener("statechanged", callback)` to add event listeners for state changes. The callback can have one argument which is a CustomEvent with following attributes:
- `action`: Dispatched action. See Redux docs for what it means.
- `prev`: Previous state.
- `next`: Next state.

## Dispatching event
You can dispatch events using `addon.tab.redux.dispatch(eventObject)`. Event object must have `type` attribute and can have other attributes. For details on what to dispatch, read reducer codes on scratch-www, scratch-gui or scratch-paint:
- https://github.com/LLK/scratch-www/tree/develop/src/redux
- https://github.com/LLK/scratch-gui/tree/develop/src/reducers
- https://github.com/LLK/scratch-paint/tree/develop/src/reducers