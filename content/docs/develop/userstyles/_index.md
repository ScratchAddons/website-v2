---
title: Userstyles
description: Userstyles are CSS rules that affect Scratch pages. They can apply styles to existing Scratch UI, as well as to elements that were added to the page by addons.
aliases: 
  - /docs/developing/about-userstyles
  - /docs/develop/addon-types/userstyles
  - /docs/develop/userstyles/
weight: 2
---

Userstyles are CSS rules that affect Scratch pages. They can apply styles to existing Scratch UI, as well as to elements that were added to the page by addons.


## Declaring userstyles in the addon manifest

{{< admonition warning >}}
**Some changes require an extension reload** from `chrome://extensions` to take effect, such as updating the addon manifest file.

It's not necessary to reload the extension when changing the source of an already existing userstyle CSS file. In those cases, reloading the page is enough.
{{< /admonition >}}

Userstyles are declared inside a "userstyles" array, similarly to userscripts.

Each item of the array must have the following properties:
- `"url"`: the relative URL to a CSS file.
- `"matches"`: the list of Scratch pages where the userstyle will be applied. See [matches](/docs/reference/addon-manifest/#matches) for more information.
- `if`: a list of conditions that may toggle whether the userstyle is currently applied or not. See [userstyle.if](https://scratchaddons.com/docs/reference/addon-manifest/#if) for more information.

Example manifest:
```json
{
  "name": "Scratch Messaging",
  "description": "Provides easy reading and replying to your Scratch messages.",
  "userstyles": [
    {
      "url": "styles.css",
      "matches": ["projects", "https://scratch.mit.edu/", "profiles"]
    },
    {
      "url": "resize.css",
      "matches": ["projects"],
      "if": {
        "settings": {
          "resize": true
        }
      }
    },
  ],
  "settings": [
    {
      "name": "Resize messages",
      "id": "resize",
      "type": "boolean",
      "default": false
    }
  ],
  "tags": ["community"],
  "enabledByDefault": false
}
```


## Dynamically toggling userstyles after page load

It is usually unnecessary to use a JavaScript userscript to dynamically toggle whether a userstyle is active on the page in response to the user changing settings.

- Including `dynamicEnable: true` in the addon manifest will allow the extension to dynamically inject userstyles if the addon has been enabled (for the first time) after loading the page.
- Including `dynamicDisable: true` in the addon manifest will allow the extension to dynamically remove or reinject userstyles if the addon has been toggled, without requiring a page reload.
- Including `updateUserstylesOnSettingsChange: true` in the addon manifest will re-evaluate "if" conditions that depend on user settings without requiring a page reload. The extension will remove or inject userstyles accordingly.


## Accessing addon settings from CSS

Userstyles can easily obtain color and numerical settings through CSS variables. They can also access settings from other enabled addons.

The CSS variables always follow the `--addonId-settingId` format. Setting IDs are always converted from kebab-case to camelCase.

These CSS variables are always available for all enabled addons and no manifest property is necessary to expose them. They are also synchronized with user settings without requiring a page reload.

```css
.sa-progress-bar {
  /* Color setting */
  background-color: var(--progressBar-bgColor);

  /* Color setting with fallback */
  border-color: var(--editorDarkMode-border, #fc7c24);
  /* If editor-dark-mode is disabled, the fallback will be used instead */

  /* Numerical setting */
  height: calc(1px * var(--progressBar-height));
}
```


## Custom CSS variables

If a userstyle needs to choose between one of two values based on a background color (text contrast) or an addon setting, JavaScript isn't necessary. These conditions, among others, can be declared in the addon manifest through [customCssVariables](/docs/reference/addon-manifest/#customcssvariables), and the userstyle can simply reference that CSS variable.


## Applying styles only inside the editor

The extension automatically toggles a class name on the `<body>` element when the user enters or exits the project editor.

For example, styling `<input>` elements inside and outside the editor differently:
```css
.sa-body-editor input {
  /* Only applies if `addon.tab.editorMode` is `editor` or `fullscreen` */
}

body:not(.sa-body-editor) input {
  /* Only applies if `addon.tab.editorMode` is NOT `editor` nor `fullscreen` */
}
```
