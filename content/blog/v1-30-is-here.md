---
title: v1.30 is here!
description: Happy New Year! It’s been over two months since the last version, but we’ve been working hard on several exciting new features.
date: 2023-01-06T00:00:00Z
author: lisa-wolfgang
---

Happy New Year! It’s 2023, so what better time for the 30th update to Scratch Addons? It’s been over two months since the last version, but we’ve been working hard on several exciting new features.

## Costume editor snapping

It’s difficult to position shapes precisely in the costume editor, but this powerful addon by [@ErrorGamer2000](https://github.com/ErrorGamer2000) provides a toolset to make aligning objects a lot cleaner. You can snap the center, edges, and corners of any selection to any of the following:
- Edges of the canvas
- Corners of the canvas
- Center X/Y axes of the canvas
- Edges of other objects
- Centers of other objects
- Corners of other objects

What’s more, all of the above is toggleable from within the editor itself, making it easy to get the exact behavior you need in each situation.

## Collapsing sprite properties
Users on small screens rejoice: you're about to get double the sprite grid space!

![image](https://user-images.githubusercontent.com/43426138/210118937-2508e16b-e97e-49f8-a930-52728b2eae98.png)

This new addon by [@lisa-wolfgang](https://github.com/lisa-wolfgang) (that’s me!) hides the sprite properties panel by default. The panel can be shown again by clicking a 2.0-like info button on the currently selected sprite, then re-hidden by clicking a new collapse button on the properties panel. A more convenient method is to double-click any sprite tile to toggle the panel, and there’s also a handy option to automatically collapse the panel when the mouse leaves the properties panel and sprite grid area.

## Always show number pad

![image](https://user-images.githubusercontent.com/43426138/210118972-fa4dd6b2-2fa5-4100-8099-72aaf5890b6b.png)

This neat addon by [@GarboMuffin](https://github.com/GarboMuffin) forces Scratch to always show the touchscreen number pad whenever editing a numeric input. It’s useful for quick number adjustments if your hand is already on the mouse or if you just like typing with an on-screen interface.

## Insert blocks by name has been moved
We are continuing work to split the developer tools addon (formerly the Scratch 3 Devtools extension) into multiple addons that can be toggled independently. The latest feature to be moved is the searchable middle-click block dropdown in the code workspace, which is now located in the “insert blocks by name” addon thanks to the work of [@TheColaber](https://github.com/TheColaber). No effort on your part is required to continue using this feature — the addon is enabled by default unless you had previously disabled the developer tools addon.

## Speed. I am speed.
Addons such as “auto-hiding block palette” and “customizable code area zoom” now have faster animation speed settings thanks to [@DNin01](https://github.com/DNin01), so you can go faster than fast and quicker than quick when you’re working on projects.

## Redux DevTools compatibility
Thanks to a patch by [@ErrorGamer2000](https://github.com/ErrorGamer2000), the “Redux DevTools” browser extension has been removed from the [list of incompatible extensions](/docs/faq/#are-there-any-incompatible-programs). Developers can now confidently use this extension to develop addons that use Redux!

Besides these highlights, there are a huge number of other improvements and fixes included in this update. You can view all of them in the [full changelog](/changelog/#v1.30.0).

## A sneak peek...
We’ve saved the best for last. In the near future, you’ll be able to use the middle-click block dropdown to type complex expressions and get the resulting blocks into your editor. For example, you’ll be able to type “if touching cat then say my variable + 1 for timer seconds” and it will just work!

![image2](https://user-images.githubusercontent.com/43426138/210119516-24158120-df87-4c73-8d42-f6ff1a6671ab.gif)

This may seem like wizardry, but it’s all the amazing work of [@Tacodiva](https://github.com/Tacodiva). We’re looking forward to releasing this in v1.31!
