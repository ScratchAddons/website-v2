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

This will update Scratch Addons and get it ready for code editing. Note that you will need to see the finish updating section [here](https://scratchaddons.com/docs/getting-started/installing/#install-on-google-chrome) if you are using Google Chrome.


### Downloading the zipball

If you don't have Git installed, you can try this method instead. Note that you will need to manually repeat this process every time you want to update Scratch Addons.

1. Go to the [repository](https://github.com/ScratchAddons/ScratchAddons) and find the download code button.

   ![Download code button screenshot](https://user-images.githubusercontent.com/61319150/92291572-f17ef080-eede-11ea-85e8-fda961a56074.png)

2. Click it and select "Download ZIP".

   ![Download ZIP button screenshot](https://user-images.githubusercontent.com/61319150/92291570-f0e65a00-eede-11ea-80ee-f32e340327d9.png)

3. Extract the archive into a folder.

### Installing on Google Chrome

1. Type `chrome://extensions` into your address bar to open the extension management page.

2. Click the toggle next to `Developer mode` to turn on the Developer Mode. This allows you to install extensions from a folder or file.

   ![image](https://user-images.githubusercontent.com/61319150/92291715-8550bc80-eedf-11ea-9ec1-6628c5b3fbc2.png)

3. You should see the `Load unpacked` button appear. Clicking it will allow you to select a folder to upload.

   ![image](https://user-images.githubusercontent.com/61319150/92291792-d3fe5680-eedf-11ea-9d62-8e02b262f575.png)

4. Select the extracted folder.
5. The extension should now be loaded.

To finish updating (assuming you followed the updating steps [here](https://scratchaddons.com/docs/getting-started/installing/#cloning-the-repository)), click the `Update` button:

![Update button screenshot](https://user-images.githubusercontent.com/76265544/120306266-97725680-c2c9-11eb-9583-d4ae7bdd2064.png)


### Installing on Mozilla Firefox

1. Type `about:debugging` into your address bar to open the debugging page.

2. Click `This Firefox` on the left-hand menu.
   
   ![Left-hand menu screenshot](https://user-images.githubusercontent.com/76265544/120303509-cfc46580-c2c6-11eb-9dcc-69dbd0ad8d18.png)

4. Click `Load Temporary Add-on...`.
   
   ![Load Temporary Add-on button screenshot](https://user-images.githubusercontent.com/76265544/120303764-1023e380-c2c7-11eb-81b6-6d0805d80980.png)
   
6. Select the manifest.json file inside the extracted folder.
7. The extension should now be loaded.

Note: Firefox temporary add-ons are actually temporary. Restarting Firefox will remove them, so if you want to use the development version of Scratch Addons all the time, it is recommended that you use a Chromium-based browser like Google Chrome.

