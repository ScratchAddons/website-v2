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
Scratch Addons does not require any software for development except a text editor and Chromium-based browser, but we also recommend having Git, Firefox and Visual Studio Code installed.

## Downloading the source
The recommended way of downloading Scratch Addons' source for development is to first fork the repository on GitHub and then clone the fork with`git clone https://github.com/<username>/ScratchAddons.git`.

Other methods are described on the [/docs/getting-started/installing/#from-source](installation page).

## Loading the extension
{{< admonition info >}}
Chrome is recommended for working on addons, but addons are expected to work on Firefox and Edge.
{{< /admonition >}}

### Chrome
To load the extension into Google Chrome go to [chrome://extensions](chrome://extensions), turn on "Developer mode" in the top-right corner, click "Load unpacked" and select the `ScratchAddons` folder.

This process should be similar on Microsoft Edge, Opera, Brave, Vivaldi and most other Chromium-based browsers.

{{< admonition info >}}
You can safely ignore the "Unrecognized manifest key" warning. It's required by Firefox.
{{< /admonition >}}

To reload the extension when testing, click the refresh icon on the extension's card.

## Firefox
To load the extension into Firefox go to [about:debugging](about:debugging), click "This Firefox" in the sidebar, then click "Load Temporary Add-on..." and select `manifest.json` inside the `ScratchAddons` folder.

{{< admonition info >}}
Addons loaded into Firefox this way are temporary and must be reloaded every time the browser restarts.
{{< /admonition >}}

To reload the extension when testing, click the "Reload" button on the extension's card.

## Creating the addon folder
Each addon has its own internal id used by the extension and other addons. Addon ids should not contain any spaces or special characters except hyphens. Addon ids should be self-descriptive, but not too long.

Open the `addons.json` file in the `addons` folder, add a new addon id near the bottom of the file, then create a sub-folder with the same name.

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

For more information on what you can declare in the manifest, see [the Addon Manifest refrence](/docs/reference/addon-manifest/).

The addon doesn't do anything yet, but it should appear in the popup and settings page after reloading it.

## Userscripts and userstyles
[Userscripts](/docs/develop/userscripts/) and [userstyles](/docs/develop/userstyles/) are what makes the addon work. Userscripts run JavaScript code and userstyles inject CSS styles. Addons may have a combination of userstyles and userscripts.

Userscripts have access to [addon APIs](/docs/reference/addon-api/) to make Scratch-specific tasks such as fetching the currently logged in user easier.

When adding a userscript or userstyle to the addon's folder, it must be declared in the addon manifest or it won't run.

## Addon settings
The [settings object](/docs/reference/addon-manifest/#settings-object) in the addon manifest allows adding options such as toggles, text boxes or color pickers to your addon on the settings page to make it customizable by users.

See the [addon.settings](/docs/reference/addon-api/addon.settings) documentation on how to access user choices from userscripts and userstyles.

## Before contributing
{{< admonition info >}}
In case there is no existing GitHub issue in that repository related to your new addon idea, please create one. However, if there is already an issue related to your feature idea, we suggest that you leave a comment on it stating your intention to develop the addon. This will enable other contributors to provide feedback on whether the addon could be accepted, or if further discussion is required.

Also note that GitHub's terms of service require users to be 13+ to create an account with them.
{{< /admonition >}}

If you want to submit your addon to the Scratch Addons GitHub repository, so it can be added to the addon library, make sure the addon works as expected, with and without other addons enabled and that it doesn't break other addons. The addon's manifest should have a good name and description, `versionAdded` should be set to the next version of the extension and the addon should not be enabled by default. Addons should support dynamic enable and disable, but it's not required.
Make sure your code is understandable; having unnecessary comments is better than no comments.

## Sending a pull request
Follow the steps on our [contributing guidelines](https://github.com/ScratchAddons/ScratchAddons/blob/master/.github/CONTRIBUTING.md). Simply put, fork the repository if you haven't already, commit your new addon and send a pull request.

If your addon isn't finished or you need help with somthing, create a draft pull request.

Keep in mind we might request you to make some changes, and the review process may be slow, however, we will probably accept your addon as long as it's minimally suitable and Scratch-specific.
