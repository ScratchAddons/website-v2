---
title: Creating an Addon
weight: 3
aliases:
  - /docs/developing/getting-started/creating-an-addon
---

This page describes the basics on how to create an addon for Scratch Addons. Before proceeding, please read the [addon basics](../addon-basics/) and disable any other instances of Scratch Addons to avoid conflicts.

{{< admonition info >}}
If you plan to submit the addon you are developing as a pull request to our GitHub repository, please read our [contributing guidelines](https://github.com/ScratchAddons/ScratchAddons/blob/master/.github/CONTRIBUTING.md) first.
{{< /admonition >}}

## Requirements
Scratch Addons does not require any software for development except a text editor and a Chromium-based browser (121+), but we also recommend having Git, Firefox (121+) and Visual Studio Code installed.

## Installation
To install the extension for development, see [Installing from source](/docs/getting-started/installing/#from-source).

## Creating the addon folder
Each addon has its own internal ID used by the extension and other addons. Addon IDs should not contain any spaces or special characters except hyphens and should be self-descriptive, but not too long.

New addons should not use an ID that was included in a stable version of the extension but later removed. These include:

- `a11y`
- `data-category-tweaks`
- `featured-dangos`
- `fix-buttons`
- `forum-time-zones`
- `image-uploader`
- `redirect-mobile-forums`
- `scratchstats`
- `tutorials-button`

Open the `addons.json` file in the `addons` folder, insert a new addon ID near the bottom of the file, then create a sub-folder with the same name.

## The addon manifest
Each addon has it's own [manifest](/docs/reference/addon-manifest/) that handles how it is displayed on the settings page, any settings the addon may have, which userscripts or userstyles to run and where to run them.

Addon manifests are located in each addon's folder and named `addon.json`.
Here is a minimal addon manifest:
```json
{
  "name": "My addon",
  "description": "TODO",
  "tags": ["community"]
}
```

For more information on what can be declared in the manifest, see the [the Addon Manifest reference](/docs/reference/addon-manifest/).

The addon does not do anything yet, but it should appear in the popup and settings page after reloading the extension.

## Userscripts and userstyles
[Userscripts](/docs/develop/userscripts/) and [userstyles](/docs/develop/userstyles/) are what make the addon work. Userscripts run JavaScript code and userstyles inject CSS styles. Addons may have a combination of userstyles and userscripts.

Userscripts have access to [addon APIs](/docs/reference/addon-api/) to make Scratch-specific tasks such as fetching the currently logged in user easier.

When adding a userscript or userstyle to the addon's folder, it must be declared in the addon manifest or it will not run.

## Addon settings
The [settings object](/docs/reference/addon-manifest/#settings-object) in the addon manifest allows adding options such as toggles, text boxes or color pickers to your addon on the settings page to make it customizable by users.

See the [addon.settings](/docs/reference/addon-api/addon.settings) documentation on how to access user choices from userscripts and userstyles.

## Before contributing
{{< admonition info >}}
In case there is no existing GitHub issue in that repository related to your new addon idea, please create one. However, if there is already an issue related to your feature idea, we suggest that you leave a comment on it stating your intention to develop the addon. This will enable other contributors to provide feedback on whether the addon could be accepted, or if further discussion is required.

Also note that GitHub's terms of service require users to be 13+ to create an account with them.
{{< /admonition >}}

If you want to submit your addon to the Scratch Addons GitHub repository, so it can be added to the addon library, ensure the addon works as expected, with and without other addons enabled and that it does not break other addons. The addon's manifest should have a good name and description, `versionAdded` should be set to the next version of the extension and the addon should not be enabled by default. Addons should support dynamic enable and disable, but it is not required.
Make sure the code is understandable; having unnecessary comments is better than no comments.

## Sending a pull request
Follow the steps on our [contributing guidelines](https://github.com/ScratchAddons/ScratchAddons/blob/master/.github/CONTRIBUTING.md). Simply put, fork the repository if you haven't already, commit your new addon and send a pull request.

If your addon isn't finished or you need help with something, create a draft pull request.

Keep in mind we might request you to make some changes, and the review process may be slow, however, we will probably accept your addon as long as it's minimally suitable and Scratch-specific.
