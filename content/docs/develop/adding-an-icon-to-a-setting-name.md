---
title: Adding an Icon to a Setting Name
aliases: 
  - /docs/developing/how-to-add-an-icon-to-a-setting-name
---
To add an icon to a setting name without [causing](https://github.com/ScratchAddons/ScratchAddons/pull/1529) [crashes](https://github.com/ScratchAddons/ScratchAddons/commit/ead64b9da1434e7ed593c141cba7b02addd70a54),

- Make sure the icon file name does not contain hyphens
- Write `@ICONFILENAME.svg setting name` on `addon.json`
- Add `ICONFILENAME.svg` at `/images/icons/` if missing
- Edit `/background/load-addon-manifests.js` to add `iconfilenameIcon: "@ICONFILENAME.svg",`
- Edit `/addons/scratch-notifier/notifier.js` for Scratch Notifier settings