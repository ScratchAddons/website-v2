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

## From GitHub

[The releases tab](https://github.com/ScratchAddons/ScratchAddons/releases) contains all builds of Scratch Addons, as well as the mirror of the store builds hosted on both servers.

## From source

### Cloning the repository

This is the recommended way to install for development purposes. This assumes you have Git installed.

To download the repository, simply clone `https://github.com/ScratchAddons/ScratchAddons.git`. Here's an example.

```sh
$ git clone https://github.com/ScratchAddons/ScratchAddons.git
```

### Downloading the zipball

If you don't have Git installed, you can try this method instead.

1. Go to the [repository](https://github.com/ScratchAddons/ScratchAddons) and find the download code button

![Screenshot 2020-09-04 at 6 41 12 PM](https://user-images.githubusercontent.com/61319150/92291572-f17ef080-eede-11ea-85e8-fda961a56074.png)

2. Click it and select "Download ZIP"

![Screenshot 2020-09-04 at 6 43 57 PM](https://user-images.githubusercontent.com/61319150/92291570-f0e65a00-eede-11ea-80ee-f32e340327d9.png)

3. Extract the archive into a folder.

### Installing on Google Chrome

1. Go to the [Extension Management page](chrome://extensions) (`chrome://extensions`).

2. Click the toggle next to `Developer mode` to turn on the developer mode. This allows you to install the addon from a file.

![image](https://user-images.githubusercontent.com/61319150/92291715-8550bc80-eedf-11ea-9ec1-6628c5b3fbc2.png)

3. You should see `Load unpacked`. Clicking it will allow you to select a folder to upload.

![image](https://user-images.githubusercontent.com/61319150/92291792-d3fe5680-eedf-11ea-9d62-8e02b262f575.png)

4. Select the folder.
5. The extension should now be loaded. 

### Installing on Mozilla Firefox

<!-- TODO: Add pictures -->

1. Go to the [Debugging page](about://debugging#/runtime/this-firefox) and click "This Firefox" (`about://debugging#/runtime/this-firefox`).
2. Click `Load Temporary Add-on...` 
3. Select the manifest.json file
4. The extension should now be loaded.
