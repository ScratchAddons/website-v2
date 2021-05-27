---
title: Privacy
description: How the Scratch Addons extension and website handle your data.
---

> _**Last update: May 27th 2021**_

How the Scratch Addons extension and website handle your data.

## Summary
#### Extension
- **We do not track extension usage at all.** We don't know how many users have enabled the pause button or turned on light mode.  
- **We never send Scratch account information or extension settings outside of your browser.**
- **By default, the extension only interacts with the Scratch website and this website.** You need to opt-in to features if they require external services.

#### Website
- **We do not use cookies.** Local storage is used to store basic preferences such as whether dark mode is enabled.
- **We track trends in website traffic, without tracking individual visitors.** We do not collect any personally identifiable information. You can see the same data we can see on the [public analytics dashboard](https://analytics.scratchaddons.com).  
- **You can send feedback anonymously.** Your IP address isn't stored when sending feedback.

## Extension
"Extension" refers to our browser extension, which you can download from the [Chrome Web Store](https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco) or [Add-ons for Firefox](https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/).  
"The Scratch website" refers to <https://scratch.mit.edu> and all of its subdomains, such as <https://api.scratch.mit.edu> and <https://clouddata.scratch.mit.edu>.  
"Other software" refers to software, such as browser extensions other than Scratch Addons, that are able to access information from the Scratch website on your device in a similar way Scratch Addons does it.

#### Information stored temporarily
We store some data on your device temporarily. This information is generated while the extension is running and cannot be recovered after your browser is restarted.  
This data can only be accessed by the Scratch Addons extension on your device, and potentially other software.

Information stored temporarily might include:

- Your Scratch account's username and user ID.
- Values of the `scratchcsrftoken` and `scratchlanguage` cookies.
- Value of your Scratch authentication token "X-Token".
- Your most recent Scratch messages.

#### Information stored permanently
We store some data locally on your device permanently. This information is still available even if your browser is restarted.  
This data can only be accessed by the Scratch Addons extension on your device. However, the Scratch website and other software might be able to read or deduce some of it (for example, the Scratch website could potentially deduce you've enabled "website dark mode" if it detects the background color is black).

Information stored permanently might include:

- Addon settings (what addons are enabled and their settings).
- Extension settings (such as theme preference).
- Whether the Scratch Addons update notification was shown.
- Whether the extension was muted through the context menu.

The extension by itself does not send any of this information outside of your device.  
However, if you enable Chrome Sync, Firefox Sync or any other compatible browser data synchronization feature, this information might be sent to that service by your browser.

#### Third parties
By default, Scratch Addons only reaches 2 services automatically:
1. The Scratch website (for example, to get your unread message count).
2. This website (for example, <https://scratchaddons.com/welcome> opening as a new tab after you've installed the extension).

Some extension features that are disabled by default might require other external services to function. In those cases, the description of the addon will mention the name and/or URL of the service. 

#### Scratch website
The Scratch website, as well as other software, might be able to know you are using Scratch Addons. They might also be able to read or deduce some of your addon settings.

#### Websites other than Scratch
If you use a Chromium-based browser such as Chrome, any websites you visit might be able to know whether Scratch Addons is installed in your browser. In the future, with the launch of new extension platform updates that let us limit what origins can access extension files, we expect this to change. This does not affect Firefox.

## Website
"Website" refers to to the Scratch Addons website (<https://scratchaddons.com>). This is the website you're on right now.

#### Cookies and local storage
We do not store cookies on your device.  
We might, however, use local storage capabilities to store basic preferences such as whether dark mode is enabled on this website.

#### Analytics
We use a self-hosted Plausible Analytics instance routed through our analytics subdomain to count website visits, downloads, etc. You can see the same data we can see on the [public analytics dashboard](https://analytics.scratchaddons.com).

#### Feedback
When sending feedback through <https://scratchaddons.com/feedback>, some data might be included in the request, such as:

- Text written in the "identifiers" field, if any.
- Text written in "feedback" field.
- The version number for your Scratch Addons instance.
- Your browser's user agent string (which often includes your browser's and operating system's names and version numbers).

Feedback is sent to a public open source [Glitch.com Node.js server instance](https://glitch.com/edit/#!/scratchaddons-feedback) which then redirects the information to a [Discord](https://discord.com) server. We do not log the IP addresses of the users that send feedback, and you can verify that by looking at the Glitch server source code linked above.

#### Third parties
When using our website, third party services might be reached, such as:
- [Cloudflare.com](https://www.cloudflare.com/privacypolicy/) (website hosting)
- [GitHub.com](https://docs.github.com/en/github/site-policy/github-privacy-statement) (website hosting)
- [cdn.jsdelivr.net](https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net) (library CDN)
- [Skypack](https://www.skypack.dev/legal/privacy-policy) (library CDN)
- [YouTube.com and fonts.googleapis.com](https://policies.google.com/privacy) (by Google)
- [Glitch.com](https://glitch.com/legal/privacy) (when sending feedback)

## Edit changelog

- **May 27th 2021:** page created

## How to contact us

If you have any questions, please contact us through our feedback page at <https://scratchaddons.com/feedback>. Make sure to fill out the "identifiers" field so that we can reply to your message.