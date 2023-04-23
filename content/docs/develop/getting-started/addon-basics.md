---
title: Addon Basics
weight: 1
aliases:
  - /docs/developing/getting-started/addon-basics
---

## What is an Addon?
An addon is a userscript, userstyle, or both that runs on the Scratch website when enabled. For example, the "Editor find bar" addon has a userscript that adds a find box to the editor, and a userstyle that styles to that box.

## What is a userscript?
A userscript is a piece of JavaScript code that runs on a Scratch tab. You can specify where that userscript will run, for example, only project pages. Userscripts are similar to content scripts on browser extensions.
Userscripts are useful to change the behavior of the Scratch website, for example, adding or removing buttons to the navbar.

## What's a userstyle?
A userstyle is similar to a userscript; you can specify URL patterns for them. However, userstyles inject CSS instead of JavaScript. They are often used along userscripts to style elements added by them, but they can also be used to style native Scratch elements. When that's the case, we usually call them "themes".

## Conceptually, what should be an addon?
You might wonder if it's a better idea to create a new addon, or modify an existing one.  
If 2 addons share some of these, they should probably be merged. 
- Both need, or don't need, permissions that require user interaction (like notifications).
- They share lots of code.
- The user would expect that addon to offer both features.
- If being separated, they would interfere with each other.

Remember addons are customizable by the user - adding new functionality does not affect old users of the addon, unless we intentionally make it do so.