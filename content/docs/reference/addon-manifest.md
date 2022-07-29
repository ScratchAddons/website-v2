---
title: Addon Manifest
description: In order to tell the addon loader how the addon plans to work, addons use a standard addon.json file located at the root of the addon's folder. 
aliases: 
  - /docs/developing/the-addon-manifest-(addon.json)
---

Addons are located inside the `addons` folder. Each addon is inside its own folder as well.
In order to tell the addon loader how the addon plans to work, addons use a standard `addon.json` file located at the root of the addon's folder.  

## `name`

| | |
| - | - |
| Type | `String` |
| Required | ✔️ |

The name of the addon. Must be `Sentence case`.  
It needs to be relatively short and consistent with other addon's names.  
Use nouns instead of verbs (for example, `Customizable new sprite position` instead of `Change new sprite position`) unless doing so would result in the addon name being overly complicated.

## `description`

| | |
| - | - |
| Type | `String` |
| Required | ✔️ |

The description of the addons. Must end with a period.  
   
Use standard grammar for referring to parts of the Scratch website or editor:  

**Pages on the website:**
* project page
* editor
* (user) profile
* studio page
* forums
* (forum) topic
* (forum) post
* (Scratch) 2.0/3.0-styled page *(a page which looks like Scratch 2.0/3.0, is a part of scratchr2/scratch-www)*

**Scratch UI elements:**
* (website) navigation bar *(only use when talking about the website)*
* (editor) menu bar *(only use when talking about the editor)*
* sprite pane *(the list of sprites below the stage)*
* costume editor *(not paint editor)*, list of costumes
* list of sounds, costume/sound list *(for features that work with both costumes and sounds)*
* costume/sound *(not asset)*
* block category
* block category menu
* block palette
* code area *(not workspace - Code tab excluding the block palette)*
* block dropdown *(a dropdown menu opened by clicking a block input)*
* block context menu *(a menu opened by right clicking a block)*
* script *(not stack of blocks)*
* extension
* comment (on the website/in the code area)

**Locations of added UI elements:**
* in *(not on)* the navigation bar
* on *(not in)* the forums
* on *(not in)* the stage
* above the stage (in the editor/on the project page)
* next to the green flag
* next to the Remix button

**Common words and phrases:**
* customizable
* more
* fix
* better
* with ... key

## `tags`

| | |
| - | - |
| Type | `Array` |
| Required | ✔️ |

Tags are used for filtering and badges on the Scratch Addons settings page.  

### Required factual tags
Addons must have one of these tags. No less than one, no more than one.

<table>
  <tr>
    <th>Tag name</th>
    <th>Used by settings page</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>community</code></td>
    <td>✔️</td>
    <td>Scratch website features</td>
  </tr>
  <tr>
    <td><code>editor</code></td>
    <td>✔️</td>
    <td>Scratch editor features</td>
  </tr>
  <tr>
    <td><code>popup</code></td>
    <td>✔️</td>
    <td>Extension popup features</td>
  </tr>
</table>

### Optional factual tags
Addon authors can usually determine these tags themselves.

<table>
  <tr>
    <th>Tag name</th>
    <th>Used by settings page</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>theme</code></td>
    <td>✔️</td>
    <td>Addons that should be listed in the "themes" category. Tags <code>community</code> or <code>editor</code> are still required.</td>
  </tr>
  <tr>
    <td><code>easterEgg</code></td>
    <td>✔️</td>
    <td>Addons with this tag are visible in the settings page while disabled only after typing the Konami code.</td>
  </tr>
  <tr>
    <td><code>codeEditor</code></td>
    <td>✔️</td>
    <td>Addons that mainly affect the Code tab of the editor.</td>
  </tr>
  <tr>
    <td><code>costumeEditor</code></td>
    <td>✔️</td>
    <td>Addons that mainly affect the Backdrops/Costumes tab of the editor.</td>
  </tr>
  <tr>
    <td><code>projectPlayer</code></td>
    <td>✔️</td>
    <td>Addons that affect the project player in both the website and editor, or that add UI elements above the stage.</td>
  </tr>
  <tr>
    <td><code>editorMenuBar</code></td>
    <td>❌</td>
    <td>Addons that add UI elements to the editor's menu bar.</td>
  </tr>
  <tr>
    <td><code>projectPage</code></td>
    <td>✔️</td>
    <td>Addons that affect project pages on the website.</td>
  </tr>
  <tr>
    <td><code>profiles</code></td>
    <td>✔️</td>
    <td>Addons that affect profile pages on the website.</td>
  </tr>
  <tr>
    <td><code>forums</code></td>
    <td>✔️</td>
    <td>Addons that affect the Scratch Forums.</td>
  </tr>
  <tr>
    <td><code>studios</code></td>
    <td>❌</td>
    <td>Addons that affect studio pages on the website.</td>
  </tr>
  <tr>
    <td><code>comments</code></td>
    <td>❌</td>
    <td>Addons that affect comments on the website, inside project pages, profiles and studios.</td>
  </tr>
</table>

### Optional subjective tags
Addon authors shouldn't add these tags themselves.  
Whether to add any of these tags will be discussed before merging the addon to the repository.

<table>
  <tr>
    <th>Tag name</th>
    <th>Used by settings page</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>recommended</code></td>
    <td>✔️</td>
    <td>High-quality addons that add highly requested or obvious missing features.</td>
  </tr>
  <tr>
    <td><code>featured</code></td>
    <td>✔️</td>
    <td>Quality addons that add useful features or nice aesthetic changes.</td>
  </tr>
  <tr>
    <td><code>beta</code></td>
    <td>✔️</td>
    <td>Addons that haven't been deeply tested, may break in the future or are known to not work properly.</td>
  </tr>
  <tr>
    <td><code>danger</code></td>
    <td>✔️</td>
    <td>Addons that users shouldn't enable without paying close attention.</td>
  </tr>
</table>

## `versionAdded`

| | |
| - | - |
| Type | `String` |
| Required | ✔️ |

The version the addon was added. If the value is the same as the current version of the extension, the addon will get the new tag.

## `permissions`

| | |
| - | - |
| Type | `Array` |

You can specify permissions by providing a `permissions` array.  
Possible items: `notifications`, `clipboardWrite`.  

## `userscripts` and `userstyles`

| | |
| - | - |
| Type | `Array` |

Declaring userscripts and userstyles is very similar.
This is an array of objects, not strings.  
Each object must specify the url to the userscript/userstyle through the `url` property, and provide an array of URL matches. If any of these patterns match, the userscript/userstyle is injected.

### `matches`

| | |
| - | - |
| Type | `Array` |

Matches that allow the userscript/userstyle to run on. Values can be a URL match pattern, or `projects`, `projectEmbeds`, `studios`, `profiles`, `topics`, `newPostScreens`, `editingScreens`, `forums`, `scratchWWWNoProject`.
```json
{
  "userscripts": [
    {
      "url": "userscript.js",
      "matches": ["https://scratch.mit.edu/*"]
    },
    {
      "url": "second_userscript.js",
      "matches": ["projects", "https://scratch.mit.edu/users/*"]
    }
  ]
}
```

### `runAtComplete`

| | |
| - | - |
| Type | `Boolean` |
| Available in userscripts | ✔️ |
| Available in userstyles | ❌ |

Specifies whether the userscript should run after the page has loaded (after the window load event). If unspecified, `true` is assumed.  
If set to `false`, the userscript is only guaranteed to run after the \<head> element of the document has loaded.

### `if`

| | |
| - | - |
| Type | `Object` |
| Available in userscripts | ❌ |
| Available in userstyles | ✔️ |

Optionally, you can provide an `if` object that will only apply your userstyle if any of the specified sub-properties evaluates to `true`. More advanced behavior can be achieved in userscripts using [`addon.settings.get`](https://scratchaddons.com/docs/reference/addon-api/addon.settings/#addonsettingsget) and [`addon.self.getEnabledAddons`](https://scratchaddons.com/docs/reference/addon-api/addon.self/#getenabledaddons).

Sub-properties:
- `settings` (object, optional) The settings within this addon that must be of specific values. The key(s) are the IDs of the settings, and the value(s) are the corresponding expected values. All key(s) must evaluate to `true` for the sub-property to evaluate to `true`. 

  In the following example, the `signature` setting must equal `true` and the `mode` setting must equal `forums` in order for the userstyle to be applied. If either of these settings are set to values that do not match the expected values, the userstyle will not be applied.
  ```json
  {
    "userstyles": [
      {
        "url": "userstyle.css",
        "matches": ["https://scratch.mit.edu/*"],
        "if": {
          "settings": { "signature": true, "mode": "forums" }
        }
      }
    ]
  }
  ```
  An array can also be provided for the value of a key: the key will evaluate to `true` if the setting is set to *any* of the provided values.

  In the following example, the `mode` setting may equal either `forums` or `new` for the userstyle to be applied. If the setting is not set to either of these, the userstyle will not be applied.
  ```json
  {
    "userstyles": [
      {
        "url": "userstyle.css",
        "matches": ["https://scratch.mit.edu/*"],
        "if": {
          "settings": { "mode": ["forums", "new"] }
        }
      }
    ]
  }
  ```
- `addonEnabled` (string / array of strings, optional) The addon(s) that must be enabled. If multiple addons are listed, only one has to be enabled for the sub-property to evaluate to `true`. The string(s) are the IDs of the addons.

  In the following example, either the `debugger` or `clones` addon must be enabled for the userstyle to be applied. If neither of these addons are enabled, the userstyle will not be applied.
  ```json
  {
    "userstyles": [
      {
        "url": "userstyle.css",
        "matches": ["https://scratch.mit.edu/*"],
        "if": {
          "addonEnabled": ["debugger", "clones"]
        }
      }
    ]
  }
  ```

## `settings`

| | |
| - | - |
| Type | `Object` |

Settings allow the addon's users to specify settings in Scratch Addons' settings panel. Inside your userscripts, you can then access those settings with the `addon.settings` API.  
Specify a `settings` property and provide an array of option objects.

Sub-properties:
- `name` (string, required) The user-visible text for the option.   
- `id` (string, required) An identifier to get the user-specified value from your code.  
- `type` (string, required) Either `boolean` (an on/off toggle), `positive_integer` (an input box that only allows 0 and above), `integer` (an input box that allows any integer) `string` (up to 100 chars),`color` (a browser color input that returns a hex code), `table` (list of elements, where user can add custom elements, remove existing ones and change order of them) or `select` (see `potential_values`).  
- `default` (string, required) The default value for the option. A boolean, string, or number, depending on the specified type.  
- `min`/`max` (number, optional for `positive_integer`, `integer`, and `string` types only) For integers, the minimum/maximum value allowed, and for strings, the minimum/maximum allowed length of the value.
- `potentialValues` (array of objects, required for `select` type only) Array of objects, with properties `id`, the value received from `addon.settings.get()`, and `name`, the user-visible option text.
- `allowTransparency` (boolean, required for `color` type only) Whether the user should be allowed to enter transparent colors or not.
- `row` (array of objects, only for `table` type). Every element in table contains this array of objects. Each object should contain: `name`, `id`, `type` (any setting type other than `table`) and `default`. For example:
  ```json
  {
    "row": [
      {
        "name": "Playername",
        "id": "name",
        "type": "string",
        "default": ""
      }
    ],
  }
  ```
- `if` (object, optional) Only make this setting visible if any of the specified sub-properties evaluates to `true`.
  
  **Be careful -- hiding a setting does not revert its value or nullify it. This only affects the settings page UI. If you want to handle a case where this setting is hidden, you must replicate the condition check that results in this setting being hidden.**
   - `settings` (object, optional) The settings within this addon that must be of specific values. The key(s) are the IDs of the settings, and the value(s) are the corresponding expected values. All key(s) must evaluate to `true` for the sub-property to evaluate to `true`. 

      In the following example, the `signature` setting must equal `true` and the `mode` setting must equal `forums` in order for this setting to be visible. If either of these settings are set to values that do not match the expected values, this setting will not be visible.
      ```json
      {
        "settings": [
          // ...
          {
            "name": "Option",
            "id": "option",
            "type": "boolean",
            "default": false,
            "if": {
              "settings": { "signature": true, "mode": "forums" }
            }
          }
        ]
      }
      ```
      An array can also be provided for the value of a key: the key will evaluate to `true` if the setting is set to *any* of the provided values.

      In the following example, the `mode` setting may equal either `forums` or `new` for this setting to be visible. If the setting is not set to either of these, this setting will not be visible.
      ```json
      {
        "settings": [
          // ...
          {
            "name": "Option",
            "id": "option",
            "type": "boolean",
            "default": false,
            "if": {
              "settings": { "mode": ["forums", "new"] }
            }
          }
        ]
      }
      ```
   - `addonEnabled` (string / array of strings, optional) The addon(s) that must be enabled. If multiple addons are listed, only one has to be enabled for the sub-property to evaluate to `true`. The string(s) are the IDs of the addons.

      In the following example, either the `debugger` or `clones` addon must be enabled for this setting to be visible. If neither of these addons are enabled, this setting will not be visible.
      ```json
      {
        "settings": [
          {
            "name": "Option",
            "id": "option",
            "type": "boolean",
            "default": false,
            "if": {
              "addonEnabled": ["debugger", "clones"]
            }
          }
        ]
      }
      ```

Example:
```json
{
  "settings": [
    {
      "name": "Send notifications",
      "id": "send_notifications",
      "type": "boolean",
      "default": false,
    },
    {
      "name": "Notification close delay in seconds",
      "id": "close_delay",
      "type": "positive_integer",
      "default": 5,
      "if": {
        "settings": { "send_notifications": true }
      }
    }
  ]
}
```

## `addonPreview`

| | |
| - | - |
| Type | `Object` |

Specifies the type of preview to show above the addon's settings.

Sub-properties:
- `type` (string, required) Only `editor-dark-mode` is currently supported. To add more, use the `editor-dark-mode` files in the `/webpages/settings/components/previews` folder as an example, then add the components to [/webpages/settings/index.html](https://github.com/ScratchAddons/ScratchAddons/blob/d6f41737c8162e6feeb98f6a9f5b479378e8b813/webpages/settings/index.html#L88) and [/webpages/settings/index.js](https://github.com/ScratchAddons/ScratchAddons/blob/d6f41737c8162e6feeb98f6a9f5b479378e8b813/webpages/settings/index.js#L52).

Example:
```json
{
  "addonPreview": {
    "type": "editor-dark-mode"
  }
}
```

## `presetPreview`

| | |
| - | - |
| Type | `Object` |

Specifies the type of preview to show inside the preset buttons.

Sub-properties:
- `type` (string, required) Possible values:
  - `palette` Shows a ribbon of colors.
- `colors` (array of strings, required for `palette` type only) The hex colors to show in the ribbon. By convention, the array should contain 6 colors, but more or less can be shown if needed.

Example:
```json
{
  "presetPreview": {
    "type": "palette",
    "colors": ["#000000", "#222222", "#444444", "#666666", "#aaaaaa", "#ffffff"]
  }
}
```

## `credits`
| | |
| - | - |
| Type | `Array` |

You can provide a `credits` array of objects. This attribution is shown in the extension settings.  

Sub-properties:
- `name` (string, required) The name of the person, site, or other resource to credit.
- `note` (string, optional) A brief note about how the credited person/site contributed to the addon. The note will be displayed in parentheses. By convention, notes are lowercase except for proper nouns, and commas are used as separators if a single person contributed in multiple ways. Try to use the following terminology -- don't limit yourself to these terms, but try to stay consistent if possible:
  - addon (not necessary if only one person made the addon or if there are no settings/presets)
  - addon version (for addons ported from userscripts/userstyles)
  - original userscript (for addons ported from userscripts)
  - original userstyle (for addons ported from userstyles)
  - If someone created a setting or preset, note its name in the credit
- `id` (string, required if `note` is specified) An identifier for this credit object. Used internally for localization of the `note` property.
- `link` (string, optional) A URL that links to the original content or the main page of the person/site credited.  
Example:  
```json
{
  "credits": [
    {
      "name": "Maximouse",
      "note": "addon, \"Experimental\" Dark",
      "id": "addon",
      "link": "https://github.com/mxmou/customize-scratch#watch-youtube-videos-on-scratch-in-full-screen"
    }
  ]
}
```

## `enabledByDefault`

| | |
| - | - |
| Type | `Boolean` |

You can provide the `enabledByDefault` property and set it to `true` to specify if the addon should be enabled by default. Its default value is `false`.  
Keep in mind, few addons will be enabled by default. If you want your addon to be enabled by default, please open a discussion issue.

## `info`

| | |
| - | - |
| Type | `Array` |

An array of additional information (e.g. warnings, notices) about the addon. Each item of the array is an object consisting of `id` (string) - the id of the information, `text` (string) - the text to be displayed and optional `type` (string) - either `warning`, `notice` or `info` (default type).
Example:
```json
{
  "info": [
    {
      "type": "notice",
      "text": "Example notice.",
      "id": "exmapleID"
    },
    {
      "type": "warning",
      "text": "Example warning.",
      "id": "exmapleID"
    }
  ]
}
```

## `presets`

| | |
| - | - |
| Type | `Array` |

An array of presets for the addon. Each item in the `presets` array should be an object consisting of `name` (string), `id`(string), `description` (string) and `values` (object). The keys in the `values` object should the addon settings ids, and the values should be the values to set the setting with the id of the key to.

 
Example:	
```json	
{
  "presets": [	
    {	
      "name": "preset 1",	
      "id": "preset1",	
      "desctiption": "the first preset",	
      "values": {	
        "boolean_setting": true,	
        "string_setting": "This is a string setting",	
        "integer_setting": 180	
      }	
    }	
  ]	
}
```

## `libraries`

| | |
| - | - |
| Type | `Array` |

An array of libraries that the addon uses.

## `popup`

| | |
| - | - |
| Type | `Object` |

When added, creates a new popup tab in the browser popup.

Sub-properties:
- `icon` (string, required) The path to the icon that shows in the popup's tab. The root of a relative path is `/popups/<addonId>/`.
- `name` (string, required) The name that will display in the popup's tab.
- `fullscreen` (boolean, optional) Whether or not the popup tab should provide the option to open in full screen mode. Defaults to `false`.
- `html` (string, required) The path to the popup's HTML file. The root of a relative path is `/popups/<addonId>/`.
- `script` (string, required) The path to the popup's JS file. The root of a relative path is `/popups/<addonId>/`.

Example:
```json
{
  "popup": {
    "icon": "../../images/icons/envelope.svg",
    "name": "Messaging",
    "fullscreen": true,
    "html": "popup.html",
    "script": "popup.js"
  }
}
```

## `dynamicDisable`

| | |
| - | - |
| Type | `Boolean` |

Indicates whether the addon's scripts should be considered disabled when the addon is disabled while the page is running. Defaults to `false`.

## `dynamicEnable`

| | |
| - | - |
| Type | `Boolean` |

Indicates whether the addon's scripts should be considered enabled when the addon is enabled while the page is running. Defaults to `false`.

## `injectAsStyleElt`

| | |
| - | - |
| Type | `Boolean` |

Indicates whether the addon's userstyles should be injected as style elements rather than link elements. Defaults to `false`.

## `updateUserstylesOnSettingsChange`

| | |
| - | - |
| Type | `Boolean` |

Indicates whether the addon's userstyles should be removed and rematched to the new settings. Defaults to `false`.

## `customCssVariables`

| | |
| - | - |
| Type | `Array` |

An array of CSS variables that will be set if the addon is enabled. Each item is an object with two properties, both required:
- `name` (string): the name of the variable. To avoid conflicts between variables with the same name in different addons, the actual name will be `--{addonId}-{name}`, where `{addonId}` is the addon ID converted to camel case and `{name}` is the value of this property.
- `value`: a *value provider* - a string, number, or an object with a `type` property that defines what the CSS variable will be set to. The possible types are:
  - `settingValue`: the value of an addon setting. Value providers of this type have an additional required property named `settingId` (string).
  - `ternary`: returns one of two possible values depending on the result of a Boolean value provider. The following additional properties are required:
    - `source`: a value provider that returns a Boolean.
    - `true`: the result that will be used if `source` returns true.
    - `false`: the result that will be used if `source` returns false.
  - `textColor`: chooses one of two possible text colors based on a background color. The following additional properties can be set:
    - `source` (required): a value provider that returns a background color.
    - `black`: a value provider that returns the text color that will be used on bright background colors. Defaults to `#575e75`.
    - `white`: a value provider that returns the text color that will be used on dark background colors. Defaults to `#ffffff`.
    - `threshold`: white text will be used on colors at least as dark as the threshold, which must be a number between 0 and 255. Defaults to 170, which is equivalent to the color `#aaaaaa`.
  - `multiply`: multiplies components of the result of the `source` color value provider (required) with specified coefficients `r`, `g`, `b`, and `a`, which must be numbers between 0 and 1. 1 is the default value if a coefficient is not specified.
  - `brighten`: same as `multiply`, but increases the components of the source color instead.
  - `alphaBlend`: has two additional properties, `opaqueSource` and `transparentSource`. Both are required and must be value providers that return colors. `opaqueSource` does not need to be fully opaque, but its opacity will be ignored.
  - `makeHsv`: converts a HSV color to RGB. The additional properties are `h`, `s`, and `v`. Each must be a value provider that returns either a number or a color. Colors will be converted to HSV and the value of the relevant component will be used. This allows making a color that uses the hue of one color chosen by the user and the brightness of another.
  - `recolorFilter`: a CSS filter that replaces every color with the result of the `source` color value provider (required).

## `latestUpdate`

| | |
| - | - |
| Type | `Object` |

Provides information to the settings page about the latest update to this addon. Responsible for the "New options" tag and the New tag on individual addon settings. If not specified, no update-specific tags will be added.

Sub-properties:
- `version` (string, required) The version that this update applies to. If the value is the same as the current version of the extension, the addon will get the "New options" tag and display the indicators (if any) specified in `temporaryNotice` and `newSettings`.
- `isMajor` (boolean, optional) Indicates if the addon should be included in the "Featured new addons and updates" category. Defaults to `false` if not specified. This will be discussed before merging the addon to the repository using the same discretion as the Featured or Recommended tags on regular new addons.
- `temporaryNotice` (string, optional) A text description of the new features or changes. This will appear as a notice-style banner at the top of the info section (above any warnings or notices) when the addon has the "New options" tag. If not specified, no banner will be displayed.
- `newSettings` (array of strings, optional) The IDs of any settings that should be designated as new in this update. These settings will display the New tag when the addon has the "New options" tag. If not specified, no settings will display the New tag.

Example:
```json
{
  "latestUpdate": {
    "version": "3.0.0",
    "isMajor": true,
    "temporaryNotice": "Aaaaaaaaaa my update.",
    "newSettings": ["setting-2", "setting-3"]
  }
}
```