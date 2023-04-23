---
title: Creating an Addon
weight: 3
aliases:
  - /docs/developing/getting-started/creating-an-addon
---
Required software: 
- Text editor
- Chromium-based browser
Recommeneded software:
- Git or GitHub Desktop
- Visual Studio Code
- Firefox

Disable the Scratch Addons extension you downloaded from the store before proceeding to avoid issues.

## 1. Read the [addon basics](/docs/develop/getting-started/addon-basics/)
Make sure to read that article so that you are familiar with the terminology.

## 2. Fork and clone the [repository](https://github.com/ScratchAddons/ScratchAddons)
Follow [these instructions](/docs/getting-started/installing/#from-source) to download the source code locally.

## 3. Load the extension into Chrome
*Note: Chrome is recommended for working on addons, but addons are expected to work on Firefox and Edge.*
Now that you have the extension in your filesystem, go to `chrome://extensions` and turn on "developer mode".
Click "load unpacked", then select the folder where Scratch Addons is located. If you're having issues with this, make sure to be selecting the folder where `manifest.json` is located.
That's it, you loaded the extension! It should look similar to this:
Note: you can safely ignore it says "errors". That's just a warning for an unrecognized manifest key that's required by Firefox.

## 4. Create the addon folder
Think of a self descriptive addon ID without any spaces or special characters, except hyphens.
Go to the folder where Scratch Addons is located on your system and open the `addons` folder.
Open the `addons.json` file and add your addon ID to the array near the bottom.
Then, create a new folder with your addon ID as its name.

## 5. Add an addon manifest
The addon manifest tells Scratch Addons how your addon works. Make sure to get this right to avoid headaches.
Inside the folder you just created, create a file named `addon.json`.
This is a base you can use to start coding, make sure to change it in the future:
```json
{
  "name": "My addon",
  "description": "TODO",
  "tags": ["community"]
}
```
For more information on what you can declare in the manifest, check [this article](/docs/reference/addon-manifest/).

## 6. Test it
Your addon does nothing at the moment, so it's a good time to check to make sure everything works.
Go to `chrome://extensions` and reload Scratch Addons by clicking the refresh symbol on its card.
Now, right-click the Scratch Addons icon, and click "options".
You should see your addon on the list! Once you find it, enable it.

## 7. Adding Code
*Before proceeding, make sure you read the wiki article linked in step 1.*
  
Here comes the fun part: create your own JS or CSS files!
After making changes to your addon, refresh the Scratch Addons extension like you did in step 6.
  
Depending on what you want your addon to do, you should now check these wiki pages:
- [Userscripts](/docs/develop/userscripts)
- [Userstyles](/docs/develop/userstyles)

## 8. Make your addon customizable
If you want, you can make your addon customizable!
Users of your addon will be able to toggle settings, enter numbers, and more!
To get started, see [how to declare settings in the addon manifest](/docs/reference/addon-manifest/#settings-object).
Then, head to the [addon.settings documentation](/docs/reference/addon-api/addon.settings) to learn how to access user choices from userscripts.

## 9. Before publishing your addon
Now that your addon works, let's make sure we can add it to the addon library.
Make sure your addon's manifest is suitable, [more info here](/docs/reference/addon-manifest). Keep close attention to the name, description and tags of your addon. Make sure it isn't enabled by default.
Make sure your addon doesn't break other addons.
Make sure your code is understandable; having unnecessary comments is better than no comments.

## 10. Send a pull request!
Follow the steps on our [contributing guidelines](https://github.com/ScratchAddons/ScratchAddons/blob/master/.github/CONTRIBUTING.md). Simply put, fork the repo if you haven't already, commit your new addon and send a PR!
If your addon isn't finished or you need help with somthing, create a draft pull request.
Keep in mind we might request you to make some changes, however, we will probably accept your addon as long as it's minimally suitable.
