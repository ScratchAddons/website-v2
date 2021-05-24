---
title: addon.account
description: Allows addons to execute actions in the currently logged in Scratch user.
weight: 4
---

| | |
|-|-|
| Available in userscripts | ✔️ |
| Available in persistent scripts | ✔️ |
| Required manifest permissions | None |

Allows addons to execute actions in the currently logged in Scratch user.

## Functions
### getMsgCount()
Returns a promise that resolves to an integer (the unread message count for the currently logged in user), or `null`.
### getMessages(opts)
**NOT available in userscripts!! Not recommended for general use. This method exists to avoid duplicated work between Scratch Notifier and Scratch Messaging.**  
`opts`: object with an `offset` property, default is 0. Messages limit is always 40.  
Returns a promise that resolves to the requested messages, or `null` if something failed.