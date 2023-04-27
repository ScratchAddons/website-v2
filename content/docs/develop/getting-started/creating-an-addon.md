---
title: Creating an Addon
weight: 3
aliases:
  - /docs/developing/getting-started/creating-an-addon
---

This page describes the basics on how to create an addon for Scratch Addons. Before proceeding, read the [addon basics](../addon-basics/) and disable any other instances of Scratch Addons to avoid conflicts.

{{< admonition info >}}
If you plan to submit the addon you are developing as a pull request to our GitHub repository, please read our [contributing guidelines](https://github.com/ScratchAddons/ScratchAddons/blob/master/.github/CONTRIBUTING.md) first.
{{< /admonition >}}

## Reqirements
Scratch Addons does not reqire any software for development except a text editor and Chromium-based browser, but we also recommened having Git, Firefox and a more advanced code editor such as Visual Studio Code installed.

Disable the Scratch Addons extension you downloaded from the store before proceeding to avoid issues.

## Downloading the source
The recommened way of downloading Scratch Addons' source if you are planning to contribute to the project is to first fork the repository on GitHub and then cloning it with `git clone https://github.com/<username>/ScratchAddons.git`

Other methods are described on the [/docs/getting-started/installing/#from-source](installtion page)

## Loading the extension
{{< admonition info >}}
Chrome is recommended for working on addons, but addons are expected to work on Firefox and Edge.
{{< /admonition >}}

### Chrome
To load the extension into Chrome, go to [chrome://extensions](chrome://extensions), turn on "developer mode" in the top-right corner, click "Load unpacked" and select the `ScratchAddons` folder.

This procsess should be similar in most other Chromium-based browsers.

{{< admonition info >}}
You can safely ignore the "Unrecognized manifest key" warning. It's required by Firefox.
{{< /admonition >}}

To reload the extension when testing, use the refresh icon on the extension's card.

## Firefox
To load the extension into Firefox go to [about:debugging](about:debugging), click "This Firefox" in the sidebar, then click "Load Temporary Add-on..." and select `manifest.json` inside the `ScratchAddons` folder.

{{< admonition info >}}
Addons loaded into Firefox this way are tempoary and must be re-loaded every time the browser restarts.
{{< /admonition >}}

To reload the extension when testing, use the reload button on the extension's card.

## Creating the addon folder
Each addon has its own internal id used by the extension and other addons. Addon ids should not contain any spaces or special characters except hyphans. Addon ids should be self-descriptive, but not too long.

Open the `addons.json` file in the `addons` folder, add your new addon id near the bottom of the file and create a subfolder in the `addons` folder with the same name.

## The addon manifest
Each addon has it's own [addon manifest](/docs/reference/addon-manifest/) that handles any settings the addon may have, how it is displayed on the settings page and which userscripts and userstyles to run.

The addon manifest is is located in each addon's folder and named `addon.json`.
Here is a basic addon manifest that can be expanded on in the future:
```json
{
  "name": "My addon",
  "description": "TODO",
  "tags": ["community"]
}
```

For more information on what you can declare in the manifest, see the [Addon manifest refrence](/docs/reference/addon-manifest/).

The addon doesn't do anything yet, but it should appear in the extension after reloading it.

## Userscripts and userstyles
[Userscripts](/docs/develop/userscripts/) and [userstyles](/docs/develop/userstyles/) are what makes the addon work. Userscripts run JavaScript code and userstyles inject CSS styles. Addons may have a combination of userstyles and userscripts.

When adding a userscript or userstyle it must be declared in the addon mafifest or it won't run.

## Addon settings
The [settings object](/docs/reference/addon-manifest/#settings-object) in the addon maifest allows adding options such as toggles and text boxes to your addon to make it customizable.

See the [addon.settings](/docs/reference/addon-api/addon.settings) documentation on how to access user choices from userscripts and usersctipts.

## Before contributing
{{< admonition info >}}
In case there is no existing GitHub issue in that repository related to your new addon idea, please create one. However, if there is already an issue related to your feature idea, we suggest that you leave a comment on it stating your intention to develop the addon. This will enable other contributors to provide feedback on whether the addon could be accepted, or if further discussion is required.

Also note that GitHub's terms of service reqire users to be 13 years or older to create an account.
{{< /admonition >}}

If you want to submit your addon to the Scratch Addons GitHub repository, so it can be added to the addon library, make sure the addon works as expected, with and without other addons enabled and that it doesn't break other addons. The addon's manifest should have a good name and description, `versionAdded` should be set to the next version of the extension and the addon should not be enabled by default. Addons should support dynamic enable and disable, but it's not required.
Make sure your code is understandable; having unnecessary comments is better than no comments.

## Sending a pull request
Follow the steps on our [contributing guidelines](https://github.com/ScratchAddons/ScratchAddons/blob/master/.github/CONTRIBUTING.md). Simply put, fork the repo if you haven't already, commit your new addon and send a pull request.
If your addon isn't finished or you need help with somthing, create a draft pull request.
Keep in mind we might request you to make some changes, and the review peocsess may be slow, however, we will probably accept your addon as long as it's minimally suitable and Scratch-specifc.
