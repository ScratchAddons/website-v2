---
title: Redux
---
Scratch Addons supports getting and modifying Redux state!

## Keep in mind
- Redux only applies on new page (ones with new navigation bar, including editor)
- Some extensions conflict with ScratchAddons' Redux feature. Do not use this when unnecessary.
- We expect readers to have basic knowledge on Redux and Scratch's reducers.

## Get redux state
`addon.tab.redux.state` stores current Redux state. For example, to get message count: `addon.tab.redux.state.messageCount.messageCount`

## Events
`addon.tab.redux.addEventListener("statechanged", callback)` to add event listeners for state changes. The callback can have one argument which is a CustomEvent with following attributes:
- `action`: Dispatched action. See Redux docs for what it means.
- `prev`: Previous state.
- `next`: Next state.

## Dispatching event
You can dispatch events using `addon.tab.redux.dispatch(eventObject)`. Event object must have `type` attribute and can have other attributes. For details on what to dispatch, read reducer codes on scratch-www, scratch-gui or scratch-paint:
- https://github.com/LLK/scratch-www/tree/develop/src/redux
- https://github.com/LLK/scratch-gui/tree/develop/src/reducers
- https://github.com/LLK/scratch-paint/tree/develop/src/reducers