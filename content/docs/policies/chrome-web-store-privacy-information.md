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
| webRequest                  | Necessary in order to add an artificial "Referer" header so that requests to the Scratch API from the background page correctly work. |
| webRequestBlocking          | Necessary in order to add, edit and remove headers before they are sent (see webRequest).                                                                                                                 |
| declarativeNetRequestWithHostAccess | Necessary in order to add an artificial "Referer" header so that requests to the Scratch API from the background page correctly work.
| storage                     | Used to store extension settings.                                                                                                     |
| contextMenus                | Used to show the "mute for..." feature.  
| alarms                      | Used for the "mute for..." feature.

### Optional Permissions
| Optional Permission | Justification |
| -------------------- | ------------- |
| notifications | To notify users about new Scratch messages/notifications. |

## Are you using remote code?
No, I am not using remote code

## Data usage

**What user data do you plan to collect from users now or in the future?**

❌ **Personally identifiable information.** For example: name, address, email address, age, or identification number.  
❌ **Health information.** For example: heart rate data, medical history, symptoms, diagnoses, or procedures.  
❌ **Financial and payment information.** For example: transactions, credit card numbers, credit ratings, financial statements, or payment history.  
❌ **Authentication information.** For example: passwords, credentials, security question, or personal identification number (PIN).  
❌ **Personal communications.** For example: emails, texts, or chat messages.  
❌ **Location.** For example: region, IP address, GPS coordinates, or information about things near the user’s device.  
❌ **Web history.** The list of web pages a user has visited, as well as associated data such as page title and time of visit.  
❌ **User activity.** For example: network monitoring, clicks, mouse position, scroll, or keystroke logging.  
❌ **Website content.** For example: text, images, sounds, videos, or hyperlinks.

**I certify that the following disclosures are true:**

✔️ I do not sell or transfer user data to third parties, outside of the approved use cases  
✔️ I do not use or transfer user data for purposes that are unrelated to my item's single purpose  
✔️ I do not use or transfer user data to determine creditworthiness or for lending purposes
