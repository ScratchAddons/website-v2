---
title: Addon Basics
---

## What's an addon, really?
Actually, an addon isn't much more than a combination of at least one of these: persistent scripts, userscripts and userstyles. If any of these are related, then we make them part of the same addon, under a single name. For example, the "Scratch 3 Developer Tools" addon has a userscript in charge of adding a find box to the editor, and a userstyle that adds CSS to that box.

## What's a persistent script?
A persistent script is a piece of JavaScript code that is always running in the background, even if the user has no Scratch tabs open. They're useful to, for example, notify the user if there has been an update on Scratch. Persistent scripts are similar to background scripts on browser extensions.

## What's a userscript?
A userscript is a piece of JavaScript code that runs together with a Scratch tab. Unlike persistent scripts, you can specify when that userscript will run, for example, only project pages. Userscripts are similar to content scripts on browser extensions, and if you've ever used a userscript manager, you'll notice these are basically the same.  
Userscripts are useful to change the behavior of the Scratch website, for example, adding or removing buttons to the navbar.

## What's a userstyle?
A userstyle is similar to a userscript; you can also specify URL patterns for them. However, userstyles inject CSS instead of JavaScript. They are often used along userscripts to style elements added by them, but they can also be used to style native Scratch elements. When that's the case, we usually call them "themes".

## Conceptually, what should be an addon?
You might wonder if it's a better idea to create a new addon, or modify an existing one.  
If 2 addons share some of these, they should probably be merged. 
- Both need, or don't need, permissions that require user interaction (like notifications).
- They share lots of code.
- The user would expect that addon to offer both features.
- If being separated, they would interfere with each other.  

Remember addons are customizable by the user - adding new functionality does not affect old users of the addon, unless we intentionally make it do so.