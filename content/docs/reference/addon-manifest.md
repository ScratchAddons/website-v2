---
title: Addon Manifest
description: In order to tell the addon loader how the addon plans to work, addons use a standard addon.json file located at the root of the addon's folder. 
aliases: 
  - /docs/developing/the-addon-manifest-(addon.json)
---

> Some parts of this documentation may be missing or outdated. [You can help improving this page](https://github.com/ScratchAddons/website-v2/issues/75).  
> Do not hesitate to ask questions regarding this by using the provided channels.

Addons are located inside the `addons` folder. Each addon is inside its own folder as well.
In order to tell the addon loader how the addon plans to work, addons use a standard `addon.json` file located at the root of the addon's folder.  

## `name` (string, required)
The name of the addon. Must be `Sentence case`.  
It needs to be relatively short and consistent with other addon's names.  
Use nouns instead of verbs (for example, `Customizable new sprite position` instead of `Change new sprite position`) unless doing so would result in the addon name being overly complicated.

## `description` (string, required)
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

## `tags` (array, required)
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

## Optional factual tags
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

## `permissions` (array)
You can specify permissions by providing a `permissions` array.  
Possible items: `"notifications"`, `"clipboardWrite"`.  

## `userscripts` and `userstyles` (array)
Declaring userscripts and userstyles is very similar.
This is an array of objects, not strings.  
Each object must specify the url to the userscript/userstyle through the `"url"` property, and provide an array of URL matches. If any of these patterns match, the userscript/userstyle is injected.

### `matches` (array)
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
      "matches": ["https://scratch.mit.edu/", "https://scratch.mit.edu/users/*"]
    }
  ]
}
```

### `if` (object, userstyles only)
Optionally, you can provide an `if` object that will only apply your userstyle if any of the specified sub-properties evaluates to `true`. More advanced behavior can be achieved in userscripts using [`addon.settings.get`](https://scratchaddons.com/docs/reference/addon-api/addon.settings/#addonsettingsget) and [`addon.self.getEnabledAddons`](https://scratchaddons.com/docs/reference/addon-api/addon.self/#getenabledaddons).

Sub-properties:
- `"settings"` (object, optional) The settings within this addon that must be of specific values. The key(s) are the IDs of the settings, and the value(s) are the corresponding expected values. All key(s) must evaluate to `true` for the sub-property to evaluate to `true`. 

  In the following example, the `signature` setting must equal `true` and the `mode` setting must equal `"forums"` in order for the userstyle to be applied. If either of these settings are set to values that do not match the expected values, the userstyle will not be applied.
  ```json
  "if": {
    "settings": { "signature": true, "mode": "forums" }
  }
  ```
  An array can also be provided for the value of a key: the key will evaluate to `true` if the setting is set to *any* of the provided values.

  In the following example, the `mode` setting may equal either `"forums"` or `"new"` for the userstyle to be applied. If the setting is not set to either of these, the userstyle will not be applied.
  ```json
  "if": {
    "settings": { "mode": ["forums", "new"] }
  }
  ```
- `"addonEnabled"` (string / array of strings, optional) The addon(s) that must be enabled. If multiple addons are listed, only one has to be enabled for the sub-property to evaluate to `true`. The string(s) are the IDs of the addons.

  In the following example, either the `debugger` or `clones` addon must be enabled for the userstyle to be applied. If neither of these addons are enabled, the userstyle will not be applied.
  ```json
  "if": {
    "addonEnabled": ["debugger", "clones"]
  }
  ```

### `runAtComplete` (boolean, userscripts only)
Specifies whether the userscript should run after the page has loaded (after the window load event). If unspecified, `true` is assumed.  
If set to `false`, the userscript is only guaranteed to run after the \<head> element of the document has loaded.

## `settings` (object)
Settings allow the addon's users to specify settings in Scratch Addons' settings panel. Inside your userscripts, you can then access those settings with the `addon.settings` API.  
Specify a `settings` property and provide an array of option objects.

Sub-properties:
- `"name"` (string, required) The user-visible text for the option.   
- `"id"` (string, required) An identifier to get the user-specified value from your code.  
- `"type"` (string, required) Either `"boolean"` (a checkbox), `"positive_integer"` (an input box that only allows 0 and above), `"string"` (up to 100 chars),`"color"` (a browser color input that returns a hex code)  or `"select"` (see `"potential_values"`).  
- `"default"` (string, required) The default value for the option. A boolean, string, or number, depending on the specified type.  
- `"potentialValues"` (array of objects, required for `"select"` type only) Array of objects, with properties `"id"`, the value received from `addon.settings.get()`, and `"name"`, the user-visible option text.
- `"allowTransparency"` (boolean, required for `"color"` type only) Whether the user should be allowed to enter transparent colors or not.
- `"if"` (object, optional) Only make this setting visible if any of the specified sub-properties evaluates to `true`.
  
  **Be careful -- hiding a setting does not revert its value or nullify it. This only affects the settings page UI. If you want to handle a case where this setting is hidden, you must replicate the condition check that results in this setting being hidden.**
   - `"settings"` (object, optional) The settings within this addon that must be of specific values. The key(s) are the IDs of the settings, and the value(s) are the corresponding expected values. All key(s) must evaluate to `true` for the sub-property to evaluate to `true`. 

      In the following example, the `signature` setting must equal `true` and the `mode` setting must equal `"forums"` in order for this setting to be visible. If either of these settings are set to values that do not match the expected values, this setting will not be visible.
      ```json
      "if": {
        "settings": { "signature": true, "mode": "forums" }
      }
      ```
      An array can also be provided for the value of a key: the key will evaluate to `true` if the setting is set to *any* of the provided values.

      In the following example, the `mode` setting may equal either `"forums"` or `"new"` for this setting to be visible. If the setting is not set to either of these, this setting will not be visible.
      ```json
      "if": {
        "settings": { "mode": ["forums", "new"] }
      }
      ```
   - `"addonEnabled"` (string / array of strings, optional) The addon(s) that must be enabled. If multiple addons are listed, only one has to be enabled for the sub-property to evaluate to `true`. The string(s) are the IDs of the addons.

      In the following example, either the `debugger` or `clones` addon must be enabled for this setting to be visible. If neither of these addons are enabled, this setting will not be visible.
      ```json
      "if": {
        "addonEnabled": ["debugger", "clones"]
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

## `addonPreview` (object, optional)
Specifies the type of preview to show above the addon's settings.

Sub-properties:
- `"type"` (string, required) Only `editor-dark-mode` is currently supported. To add more, use the `editor-dark-mode` files in the `/webpages/settings/components/previews` folder as an example, then add the components to [/webpages/settings/index.html](https://github.com/ScratchAddons/ScratchAddons/blob/d6f41737c8162e6feeb98f6a9f5b479378e8b813/webpages/settings/index.html#L88) and [/webpages/settings/index.js](https://github.com/ScratchAddons/ScratchAddons/blob/d6f41737c8162e6feeb98f6a9f5b479378e8b813/webpages/settings/index.js#L52).

Example:
```json
{
  "addonPreview": {
    "type": "editor-dark-mode"
  }
}
```

## `presetPreview` (object, optional)
Specifies the type of preview to show inside the preset buttons.

Sub-properties:
- `"type"` (string, required) Possible values:
  - `palette` Shows a ribbon of colors.
- `"colors"` (array of strings, required for `palette` type only) The hex colors to show in the ribbon. By convention, the array should contain 6 colors, but more or less can be shown if needed.

Example:
```json
{
  "presetPreview": {
    "type": "palette",
    "colors": ["#000000", "#222222", "#444444", "#666666", "#aaaaaa", "#ffffff"]
  }
}
```

## `credits` (array)

You can provide a `credits` array of objects. This attribution is shown in the extension settings.  
These objects must have a `"name"` attribute set to a string, and they can have a `"link"` attribute with a URL value.  
Example:  
```json
{
  "credits": [
    {
      "name": "Maximouse",
      "link": "https://github.com/mxmou/customize-scratch#watch-youtube-videos-on-scratch-in-full-screen"
    }
  ]
}
```

## `enabledByDefault` (boolean)
You can provide the `enabledByDefault` property and set it to `true` to specify if the addon should be enabled by default. Its default value is `false`.  
Keep in mind, few addons will be enabled by default. If you want your addon to be enabled by default, please open a discussion issue.

## `info` (array)
An array of additional information (e.g. warnings, notices) about the addon. Each item of the array is an object consisting of `type` (string) -either `warning` or `notice` - `text` (string) - the text to be displayed - and `id` (string) - the id of the information.
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

## `presets` (array)
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

## `libraries` (array)
An array of libraries that the addon uses.

## `popup` (object)
When added, creates a new popup tab in the browser popup.

Sub-properties:
- `"icon"` (string, required) The path to the icon that shows in the popup's tab. The root of a relative path is `/popups/<addonId>/`.
- `"name"` (string, required) The name that will display in the popup's tab.
- `"fullscreen"` (boolean, optional) Whether or not the popup tab should provide the option to open in full screen mode. Defaults to `false`.
- `"html"` (string, required) The path to the popup's HTML file. The root of a relative path is `/popups/<addonId>/`.
- `"script"` (string, required) The path to the popup's JS file. The root of a relative path is `/popups/<addonId>/`.

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

## `dynamicDisable` (boolean)
Indicates whether the addon's scripts should be considered disabled when the addon is disabled while the page is running. Defaults to `false`.

## `dynamicEnable` (boolean)
Indicates whether the addon's scripts should be considered enabled when the addon is enabled while the page is running. Defaults to `false`.

## `injectAsStyleElt` (boolean)
Indicates whether the addon's userstyles should be injected as style elements rather than link elements. Defaults to `false`.

## `updateUserstylesOnSettingsChange` (boolean)
Indicates whether the addon's userstyles should be removed and rematched to the new settings. Defaults to `false`.

## `versionAdded` (string)
The version the addon was added. If the value is the same as the current version of the extension, the addon will get the new tag.

## `latestUpdate` (object, optional)
Provides information to the settings page about the latest update to this addon. Responsible for the "New options" tag and the New tag on individual addon settings. If not specified, no update-specific tags will be added.

Sub-properties:
- `"version"` (string, required) The version that this update applies to. If the value is the same as the current version of the extension, the addon will get the "New options" tag and display the indicators (if any) specified in `temporaryNotice` and `newSettings`.
- `"isMajor"` (boolean, optional) Indicates if the addon should be included in the "Featured new addons and updates" category. Defaults to `false` if not specified. This will be discussed before merging the addon to the repository using the same discretion as the Featured or Recommended tags on regular new addons.
- `"temporaryNotice"` (string, optional) A text description of the new features or changes. This will appear as a notice-style banner at the top of the info section (above any warnings or notices) when the addon has the "New options" tag. If not specified, no banner will be displayed.
- `"newSettings"` (array of strings, optional) The IDs of any settings that should be designated as new in this update. These settings will display the New tag when the addon has the "New options" tag. If not specified, no settings will display the New tag.

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
