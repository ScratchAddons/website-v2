---
title: Addon Basics
weight: 1
aliases:
  - /docs/developing/getting-started/addon-basics
---

## What is an addon?
An addon is a userscript, userstyle, or combination of both that runs on the Scratch website or project editor when enabled. For example, the "Editor find bar" addon has a userscript that adds a find box to the editor, and a userstyle that styles that box.

## What is a userscript?
A [userscript](/docs/develop/userscripts) is a JavaScript file that is executed every time the user loads a Scratch page. They can modify the document’s HTML, add new buttons, customize Scratch editor behavior, and so much more.

## What is a userstyle?
A [userstyle](/docs/develop/userstyles) is similar to a userscript; you can specify URL patterns for them. However, userstyles inject CSS instead of JavaScript. They are often used along userscripts to style elements added by them, but they can also be used to style native Scratch elements. When that's the case, we usually call them "themes".

## What should be an addon?

<!-- TODO: Expand this section into its own page -->
You might wonder if it's a better idea to create a new addon, or modify an existing one.
If two addons share some of these, they should probably be merged.
- Both need, or don't need, permissions that require user interaction (like notifications).
- They share lots of code.
- The user would expect that addon to offer both features.
- If being separated, they would interfere with each other.

Remember addons are customizable by the user - adding new functionality should not affect existing users of the addon, unless we intentionally decide to do so.
