---
title: Chrome Web Store Privacy Information
description: This is how we fill the "privacy practices" form on the Chrome Web Store Developer Dashboard.
weight: 100
aliases:
  - /docs/chrome-web-store-privacy-information
  - /docs/policies/chrome-web-store-privacy-information
no_comments: true
---

This is how we fill the "privacy practices" form on the Chrome Web Store Developer Dashboard.

## Single purpose
Allows users to customize their experience on the Scratch website (scratch.mit.edu) by providing previously unavailable features - including many related to reading and replying of Scratch messages/notifications. This extension makes use of the "Scratch API" (api.scratch.mit.edu).

## Permission justification
| Permission                  | Justification                                                                                                                         |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Host permission | Used to access information from, and run content scripts on the Scratch website.                                                        |
| cookies                     | Used to access the scratchcsrftoken cookie, which needs to be included as an X-CsrfToken header for Scratch API calls.                |
| webRequest                  | Used to detect 404s through the statusCode property. |
| declarativeNetRequestWithHostAccess | Necessary in order to add an artificial "Referer" header so that requests to the Scratch API from the background page correctly work.
| storage                     | Used to store extension settings.                                                                                                     |
| contextMenus                | Used to show the "do not disturb for X minutes" feature.  
| alarms                      | Used for the "do not disturb for X minutes" feature.

### Optional permissions
| Optional permission | Justification |
| -------------------- | ------------- |
| notifications | To notify users about new Scratch messages/notifications. |

## Data usage and Privacy policy

The extension privacy policy is available at [https://scratchaddons.com/docs/privacy/policies/extension/](https://scratchaddons.com/docs/privacy/policies/extension/).
