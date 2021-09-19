---
title: Frequently Asked Questions
description: This page lists frequently asked questions related to the Scratch Addons extension and project.
weight: 51
aliases:
  - /faq
  - /docs/frequently-asked-questions
embed_js: 
  - /assets/js/faq.js
---

This page lists frequently asked questions related to the Scratch Addons extension and project.

## General Questions

### What is Scratch Addons?

Scratch Addons is an "all-in-one" browser extension for the Scratch website and project editor. It provides features and themes (called addons internally), both for the Scratch website and the project editor. Scratch Addons' mission is to combine all existing Scratch extensions, userscripts and userstyles, developed by several members of the Scratch community, into a single easy-to-access place, while still letting users choose which ones to enable.

### Who created Scratch Addons?

Scratch Addons is a team project led by World_Languages. You can find the list of people who have contributed to us on the [Contributors](/contributors) page. While the "Developer tools" addon was initially created by griffpatch, he does not maintain the extension.

### What does Scratch Addons include?

Scratch Addons includes over 100 addons, which can be enabled or disabled individually. Some addons can also be customized on the Settings page. You can change each settings or use a preset to change color scheme or block styles. Scratch Addons also includes a popup, which can be used to enable addons quickly. Addons such as "Scratch messaging" provide additional functionalities to the popup. Scratch Addons is translated to many languages, including German, French, Spanish, and Japanese.

### Is this the same as TurboWarp Addons?

[TurboWarp](https://turbowarp.org/) has some addons from Scratch Addons which can be used on their editor without installing Scratch Addons. However, Scratch Addons also includes addons for the Scratch website and the popup display. Therefore, it is still useful to have Scratch Addons even if you only code using TurboWarp.

## System Requirements

### What are the system requirements for Scratch Addons?

Scratch Addons is officially supported on [Google Chrome](https://google.com/chrome/) (version 80 and above) and [Mozilla Firefox](https://mozilla.org/firefox/) (version 74 and above). Scratch Addons should also work on other desktop browsers that are based on those browsers, such as:

- [Microsoft Edge](https://microsoft.com/edge/) (version 80+)
- [Opera](https://opera.com/download/) (version 67+)
- [Vivaldi](https://vivaldi.com/download/) (version 2.11+)
- [Brave](https://brave.com/download/) (version 1.3+)

Additionally, Scratch Addons (for obvious reasons) requires Internet connection.

### Can I use Scratch Addons on a mobile device?

For Android users: Yes, but it is not recommended. Major browsers do not allow Scratch Addons (or any other extensions) to be installed, so you need to use browsers such as [Kiwi](https://kiwibrowser.com/) to do so. Scratch Addons' UI is not well-tested on touchscreens or environments with small viewport size, so some of the features might not work as expected.

For iOS and iPadOS users: Sadly, it is not. App Store policy does not allow browser implementations to be uploaded, which means all browsers available on that platform are just re-skinned Safari. This causes some problems (see below).

### Can I use Scratch Addons on Safari?

Currently, you cannot.

First, Safari extension store requires all developers to pay an annual fee to list extensions on the store. As Scratch Addons team does not have a source of income, this makes it very hard to maintain the extension. There is also a technical problem with the implementation of browser extensions in Safari which makes some of the core features to be unusable.

### Can I use Scratch Addons on the offline editor?

Most of the project editor addons are also available on [TurboWarp](https://turbowarp.org/) which has a [downloadable app](https://desktop.turbowarp.org/) for Windows, macOS, and Linux. Additionally, on browsers that support Progressive Web Application (PWA) such as Google Chrome on Chromebook, you can also install the TurboWarp editor as a PWA and use it without Internet connection.

Scratch Addons cannot be used on the official Scratch app.

### Are there any incompatible programs?

Some browser extensions and userscripts may interfere with Scratch Addons. If you experienced problems, you should turn off those programs:

- Scratch 3 Developer Tools: This browser extension is a copy of the Developer tools addon. You should uninstall the Developer Tools browser extension and turn on the addon instead.
- Better3.0: This browser extension can interfere with some addons. Luckily, most of its features are also available as addons.
- Redux DevTools: This can interfere with the internal workings of Scratch Addons. Disable it if you are not using.

## Security and Privacy

### Is Scratch Addons safe? 

Yes. Scratch Addons should not have any security issues in its most recent version. Scratch Addons is an open source project, so the code is constantly being verified by Scratch Addons contributors, as well as by reviewers from the Chrome Web Store and Add-ons for Firefox.

### How can I report a security vulnerability?

If you happen to find a security vulnerability please contact World_Languages privately by emailing `worldxlanguages (at) gmail.com`. If you don't get a response within 48 hours, please create an issue [here](https://github.com/ScratchAddons/ScratchAddons/issues/) mentioning you sent an email.

You can either [read our security policy](https://github.com/ScratchAddons/ScratchAddons/security/policy), or [check our advisories that we have published](https://github.com/ScratchAddons/ScratchAddons/security/advisories?state=published).

### Will my account be safe when using Scratch Addons?

Scratch Addons doesn't use your account credentials to essentially work. In fact, you can be logged out from Scratch, and Scratch Addons will still work. Scratch Addons will only send requests based on the cookies that you have, which is supplied by the browser for each request, so some addons like Scratch Messaging won't work when you are logged out, but it won't affect other parts of the extension.

Addons on Scratch Addons also have been audited by multiple contributors on the repository, so no-one can just slip some malicious code under our eyes.

We never send Scratch account information outside of your browser. See [the extension privacy policy](/docs/privacy/policies/extension) for more information.

## Using Scratch Addons

### How do I enable addons?

To enable addons, first go to the settings by:

- Opening the popup and clicking the gear icon, or:
- by going to [https://scratch.mit.edu/scratch-addons-extension/settings](https://scratch.mit.edu/scratch-addons-extension/settings). Note: this URL only works for Scratch Addons users.

Then, find the addon to enable using the sidebar or the search box. Toggle the switch at the right side to enable the addon. Some addons ask for additional permissions, which must be granted to enable the addon.

### Can I tell people about Scratch Addons on Scratch?

You can't, and please don't. There is a policy that forbids mentioning browser extensions/userscripts [here](https://scratch.mit.edu/discuss/post/2907564/), and violations have resulted in Scratch Team removing posts or muting accounts. You may, however, use different methods to tell your friends about Scratch Addons.

### I think Scratch Addons slows down Scratch. What can I do?

Try to turn off addons that you don't need. Also, check addon notices and warnings to decide which addons should be turned off for better performance.

Some specific advices:
- Turn off 60FPS addon. While the addon can increase the maximum speed a project can run, it does not reduce lags. To run such projects faster, use [TurboWarp](https://turbowarp.org/).
- "Variable manager" addon should not be used while the project is running.

### I cannot receive notifications. Why?

First, disable and re-enable the "Scratch notifier" addon. This can fix some issues.

If the problem continues, then check the operating system's notification settings. You have to allow the browser - such as Google Chrome - to send notifications. For example, on Windows, you can configure it on the "Notifications & actions" settings' "Change notification settings for individual senders" section. For more information, you should check [the help article](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e).

### How do I watch the recorded project?

The video recorded using "Project video recorder" addon is in the WebM format, which is usually smaller than other filetypes such as MP4. You can view WebM files using the browser (by dragging and dropping the file), or by using apps such as [VLC Media Player](https://www.videolan.org/).

To convert WebM files into MP4 or other formats, use online converters such as [https://cloudconvert.com/webm-to-mp4](https://cloudconvert.com/webm-to-mp4). Note that this can take a long time depending on the size of the video.

### How can you activate the easter egg addons?

To reveal the easter egg addons, do the Konami Code (↑↑↓↓←→←→BA) with your keyboard on the settings page. After that, the easter egg addons will be shown, letting you to activate them.

Some of our easter egg addons are "Fix capitalization of Account Settings" and "Semicolon glitch". Check out [the addons tab](/addons) for a complete list.

## Contributing

### How can I contribute to Scratch Addons?

Firstly, thank you for your interest of contributing to Scratch Addons. We appreciate your interest and your later contributions. 

As an open source project, we welcome any kind of contributions. You don't even need to ask us or to have a certain rank. Anyone is welcome. There's even a chance that you don't even realize that you have contributed to the project! 

Anyway, back to the point. You can contribute in many ways, and some of it is really easy.

- **Contribute some code**
  
  If you can code on JavaScript, HTML, and CSS, you can contribute by doing some coding/programming. You can fix bugs, tackle some requests, or create your own addon.

  After that, you need to create a pull request. You can do so by forking [the repository](https://github.com/ScratchAddons/ScratchAddons/), do your necessary changes, and create a pull request. If it is deemed feasible, we will merge it.

  We're also open for contributions of other aspects than the extension. You can view our repositories on [our GitHub organization page](https://github.com/ScratchAddons) and help us build them.

- **Suggest an idea**  
  
  Have something that you think would be a good addition to Scratch Addons? [Tell us!](#i-think-you-missed-a-feature-what-can-i-do)

- **Report a bug**
  
  Found a bug in one of our addon, the settings page, or anything else on our extension? [Send us a bug report](#what-can-i-do-if-i-find-a-problem).

- **Translate Scratch Addons**  
  
  If you can speak another language than English fluently, you can help translate/localize Scratch Addons to your language. You can start from [here](/docs/localization/joining-the-localization-team).

- **Write the documentation**

  Are you familiar with Scratch Addons? If so, you can write the documentation for it. The documentation can include how to use it, or how it works. Please contact us on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions) for further information.

- **Send feedback**  
  
  You can send feedback on our form, located at [the feedback page](https://scratchaddons.com/feedback). Your feedback may give us a different perspective in the extension development and help us know things needed attention and fix bugs.

- **Leave a review on the stores**

  You can leave us a review about Scratch Addons on [the Chrome extension page](https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco) or [the Firefox addon page](https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/).

- **Star our repository**

  Basically, the GitHub star is similar to the Scratch star/favorite. You can do this by going to [our repository](https://github.com/ScratchAddons/ScratchAddons) and click the "Star" button on the top-right corner.

- **Spread the word**

  You can tell anyone about Scratch Addons, like your friends, your relatives, your family members, or even your teacher, if you want. We're just asking you to [not do this on the Scratch website](#can-i-tell-people-about-scratch-addons-on-scratch).

### How can I create my own addon?

Read more about how to create an addon on Scratch Addons [here](/docs/develop/getting-started).

### What can I do if I find a problem?

You can tell us using one of these methods.

- Send it through [our feedback form](https://scratchaddons.com/feedback).
- Create an issue on [the repository](https://github.com/ScratchAddons/ScratchAddons/issues).
- Create a post on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions).
- Tell us on [our Discord server](https://discord.gg/R5NBqwMjNc).

### I think you missed a feature. What can I do?

If you think a feature is missing, or you want to suggest an addon to the extension, or you have a good idea, tell us by [following one of the methods mentioned above](#what-can-i-do-if-i-find-a-problem).

### Where can I discuss about Scratch Addons?

You can do it on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions) or [our Discord server](https://discord.gg/R5NBqwMjNc). There, you can discuss about it and ask questions if you're having trouble.

## Technical Questions

### What is an "addon", exactly?

An addon is similar to an extension or a userscript, but they use special APIs provided by the Scratch Addons extension. These APIs allow addons to run scripts on a Scratch page (userscripts), run scripts on the background (persistent scripts), or apply styles to the Scratch website (userstyles).

Userscripts and persistent scripts can use the `addon.*` JavaScript APIs, which allow them to obtain Scratch-related information (for example, get the current logged in user) and also use extension APIs (like sending notifications).

### If everything is an addon, then what does Scratch Addons do?

By itself, Scratch Addons is just an addon loader. Its main tasks are:

- Allow users to enable, disable and configure addons.
- Run addons and provide APIs to them.
- Provide useful data to addons (for example, the addon.auth API).
- Pollute prototypes for use by addon userscripts.
- Provide ways to access and modify Redux state.
- Avoid addons from interfering with each other.
- Avoid duplicate work from different addons.


## I have more questions!

If you have more questions that need answers, you can create a post on [our Discussion tab](https://github.com/ScratchAddons/ScratchAddons/discussions) or send a message [on our Discord server](https://discord.gg/R5NBqwMjNc). Someone will try to answer it for you.
