---
title: Installing
weight: 2
---

## From extension stores

Scratch Addons is available in both Chrome Web Store and Add-ons for Firefox.

- Chrome Web Store (for Google Chrome, Opera, Brave, Vivaldi, Microsoft Edge (>79), and other Chromium-based browsers)  
  https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco  
- Add-ons for Firefox (for Mozilla Firefox)  
  https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/  


## From source

### About GitHub releases

[The releases page](https://github.com/ScratchAddons/ScratchAddons/releases) contains the code and installation files for all development builds of Scratch Addons, as well as the mirror of the store builds.

### Cloning the repository

This is the recommended way to install Scratch Addons for development purposes. This assumes you have Git installed.

To download the repository, simply clone `https://github.com/ScratchAddons/ScratchAddons.git`.

```sh
$ git clone https://github.com/ScratchAddons/ScratchAddons.git
```
To update Scratch Addons, first `cd` into its folder, and then run the following commands.

```sh
$ git fetch
$ git pull
```

This will update Scratch Addons and get it ready for code editing. Note that you will need to see the finish updating section [here](#install-on-google-chrome) if you are using Google Chrome.


### Downloading the zipball

If you don't have Git installed, you can try this method instead. Note that you will need to manually repeat this process every time you want to update Scratch Addons.

1. Go to the [repository](https://github.com/ScratchAddons/ScratchAddons) and find the download code button.

   ![Download code button screenshot](/assets/img/docs/download-code-button.png)

2. Click it and select "Download ZIP".

   ![Download ZIP button screenshot](/assets/img/docs/download-zipball-button.png)

3. Extract the archive into a folder.

### Installing on Google Chrome

1. Type `chrome://extensions` into your address bar to open the Extension Management page.

2. Click the toggle next to `Developer mode` to turn on the Developer Mode. This allows you to install extensions from a folder or file.

   ![Extension Managment top bar screenshot](/assets/img/docs/developer-mode-toggle.png)

3. You should see the `Load unpacked` button appear. Clicking it will allow you to select a folder to upload.

   ![Load unpacked button screenshot](/assets/img/docs/load-unpacked-button.png)

4. Select the extracted folder.
5. The extension should now be loaded.

To finish updating (assuming you followed the updating steps [here](#cloning-the-repository)), click the `Update` button:

![Update button screenshot](/assets/img/docs/update-button.png)


### Installing on Mozilla Firefox

1. Type `about:debugging` into your address bar to open the debugging page.

2. Click `This Firefox` on the left-hand menu.
   
   ![Left-hand menu screenshot](/assets/img/docs/left-hand-menu.png)

4. Click `Load Temporary Add-on...`.
   
   ![Load Temporary Add-on button screenshot](/assets/img/docs/load-addon.png)
   
6. Select the manifest.json file inside the extracted folder.
7. The extension should now be loaded.

Note: Firefox temporary add-ons are actually temporary. Restarting Firefox will remove them, so if you want to use the development version of Scratch Addons all the time, it is recommended that you use a Chromium-based browser like Google Chrome.

