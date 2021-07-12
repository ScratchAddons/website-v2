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
The name of the addon. Don't make it too long.  
Try to make a descriptive name, avoid words like "Scratch", "tool", "feature".

## `description` (string, required)
The description of the addons.
For consistency, descriptions **must** end with a dot.

## `tags` (array, required)
Tags are used for filtering and badges on the Scratch Addons settings page.  
One of these is **required**:  `community`, `editor`, `popup`, `easterEgg`.  
Other options are: `theme`, `beta`, `recommended`, `forums`, `danger`, `codeEditor`, `costumeEditor`, `projectPlayer`, `editorMenuBar` `projectPage`, `profiles`, `studios`, `comments`.

## `permissions` (array)
You can specify permissions by providing a `permissions` array.  
Possible items: `"notifications"`, `"badge"`, `"clipboardWrite"`.  

## `persistentScripts` (array)
You can add persistent scripts by providing a `persistentScripts` array conformed of JS files (e.g. `["example.js"]`).

## `userscripts` and `userstyles` (array)
Declaring userscripts and userstyles is very similar.
Unlike persistent scripts, this is an array of objects, not strings.  
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

### `settingMatch` (object)
You can provide a `settingMatch` object that will result in your userscript/userstyle only running if the specified option is set to the specified value.
```json
{
  "userstyles": [
    {
      "url": "signature.css",
      "matches": ["https://scratch.mit.edu/discuss/topic/*"],
      "settingMatch": {
        "id": "signature",
        "value": true
      }
    }
  ]
}
```
### `runAtComplete` (boolean, userscripts only)
Specifies whether the userscript should run after the page has loaded (after the window load event). If unspecified, `true` is assumed.  
If set to `false`, the userscript is only guaranteed to run after the \<head> element of the document has loaded.

## `settings` (object)
Settings allow the addon's users to specify settings in Scratch Addons' settings panel. Inside your persistent scripts and userscripts, you can then access those settings with the `addon.settings` API.  
Specify a `settings` property and provide an array of option objects.

The properties of the object are as follows. All properties are required.
- `"name"`: the user-visible text for the option.   
- `"id"`: an identifier to get the user-specified value from your code.  
- `"type"`: either `"boolean"` (a checkbox), `"positive_integer"` (an input box that only allows 0 and above), `"string"` (up to 100 chars),`"color"` (a browser color input that returns a hex code)  or `"select"` (see `"potential_values"`).  
- `"default"`: the default value for the option. A boolean, string, or number, depending on the specified type.  
- `"potential_values"`: for `"select"` type only. Array of strings.
- `"allowTransparency"`: for `"color"` type only. Boolean.

```json
{
  "settings": [
    {
      "name": "Send notifications",
      "id": "send_notifications",
      "type": "boolean",
      "default": false
    },
    {
      "name": "Notification close delay in seconds",
      "id": "close_delay",
      "type": "positive_integer",
      "default": 5
    }
  ]
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
Example:
```json
{
  "popup": {
    "icon": "../../images/icons/envelope.svg",
    "name": "Messaging",
    "fullscreen": true
  }
}
```

## `dynamicDisable` (boolean)
Indicates whether the addon's scripts should be considered disabled when disabled as the page is running. Defaults to `false`.

## `dynamicEnable` (boolean)
Indicates whether the addon's scripts should be considered enabled when enabled as the page is running. Defaults to `false`.

## `injectAsStyleElt` (boolean)
Indicates whether the addon's userstyles should be injected as style elements rather than link elements. Defaults to `false`.

## `updateUserstylesOnSettingsChange` (boolean)
Indicates whether the addon's userstyles should be removed and rematched to the new settings. Defaults to `false`.

## `versionAdded` (string)
The version the addon was added. If the value is the same as the current version of the extension, the addon will get the new tag.
