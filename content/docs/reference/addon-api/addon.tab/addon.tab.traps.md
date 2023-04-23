---
title: addon.tab.traps (Traps)
toc_title: addon.tab.traps
h1_title: "`addon.tab.traps` (Traps)"
description: addon.tab.traps is a public API for userscripts that can be used to obtain objects that are not otherwise available.
weight: 1
aliases: 
  - /docs/developing/addon.tab.traps
---

**This page is out of date and is in need of a rewrite. If you know anything about traps, please contribute!**

`addon.tab.traps` is a public API for userscripts that can be used to obtain objects that are not otherwise available. The actual traps are coded at [prototype-handler](https://github.com/ScratchAddons/ScratchAddons/blob/master/content-scripts/prototype-handler.js).

## Examples
[editor-stepping](https://github.com/ScratchAddons/ScratchAddons/blob/master/addons/editor-stepping/userscript.js) addon shows how to manipulate `Thread` object trapped.

## Trap terminology
There are two types of traps, named after how many times they get trapped. Singleton instance like VM or ScratchBlocks get trapped only once per trap, so they are called "Once". Objects like Thread can get trapped multiple times, so they are called "Many".

Difference between Once and Many is simple: the addon only stores reference for Once.

## Trappable Object
| Trap name        | Description                                    | Once/Many |
|------------------|------------------------------------------------|-----------|
| vm               | Scratch VM, trapped by Function.prototype.bind | Once      |
| vm.propsVMBind   | Scratch VM, trapped from props.vm using bind   | Once      |
| vm.propsVMAssign | Scratch VM, trapped from props.vm using assign | Once      |
| thread           | Thread object used in Scratch VM               | Many      |
| ScratchBlocks    | ScratchBlocks object                           | Once      |
| workspace        | ScratchBlocks workspace                        | Once      |

## `addon.tab.traps.onceValues`
`onceValues` attribute of `addon.tab.traps` stores references for "Once" traps. It is an prototypeless object - e.g. you cannot call `onceValues.hasOwnProperty()`.

Keys are the "trap name" listed above, and values are the trapped values.

Example: to get VM object, use `addon.tab.traps.onceValues.vm`

## `addon.tab.traps.getBlockly`
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;object></code></td>
  </tr>
    <td>Promise rejects if</td>
    <td>The addon isn't running on a project</td>
</table>

Gets the instance of Blockly being used by Scratch.
This is different from `window.Blockly`.

## `addon.tab.traps.getPaper`
<table>
  <tr>
    <td>Return value</td>
    <td><code>Promise&lt;object></code></td>
  </tr>
    <td>Promise rejects if</td>
    <td>The addon isn't running on a project, or if Paper couldn't be found</td>
</table>

Gets the instance of Paper being used by Scratch. (@scratch/paper)

## `addon.tab.traps.getInternalKey`
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
    <td>The reference element</td>
  </tr>
</table>

<table>
  <tr>
    <td>Return value</td>
    <td><code>String</code></td>
  </tr>
</table>

Gets the internal key for React.

## Events
`addon.tab.traps` itself is not an `EventTarget`. However, it's possible to add or remove listeners, by using some public APIs. `traps.addOnceListener`/`removeOnceListener` is for "Once" traps, and `addManyListener`/`removeManyListener` is for "Many" traps. Note that listeners for "Once" objects can fire multiple times under some conditions, and may never fire if the object is trapped before loading the userscript.

These methods work like `addEventListener`/`removeEventListener`, but third argument is not supported at all. The first argument is for trap name; for example, if it needs to be fired when `thread` is trapped, do `addManyListener("thread", callback)`. The second argument is callback function that can take one argument for CustomEvent object, which contains the trapped value.

The CustomEvent object passed to callback always has `value` attribute for trapped value, and may have `trapName` if the first argument for the listener is `*` (see below).

Special event: if the trap name passed to these methods is `*`, it will fire when any object for the category is trapped. For example, callback in `addOnceListener("*", callback)` gets fired whenever an object in Once category is trapped. To check what is trapped, the CustomEvent passed to the callback also has `trapName` attribute for the trap name.