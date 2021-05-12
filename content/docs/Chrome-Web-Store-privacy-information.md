---
title: Chrome Web Store Privacy Information
weight: 0
---
## Single purpose
Allows users to customize their experience on the Scratch website (scratch.mit.edu) by providing previously unavailable features - including many related to reading and replying of Scratch messages/notifications. This extension makes use of the "Scratch API" (api.scratch.mit.edu).

## Permission justification
| Permission                  | Justification                                                                                                                         |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Host permission | Used to access information from, and run content scripts on the Scratch website.                                                        |
| cookies                     | Used to access the scratchcsrftoken cookie, which needs to be included as an X-CsrfToken header for Scratch API calls.                |
| webRequest                  | Necessary in order to add an artificial "Referer" header so that requests to the Scratch API from the background page correctly work. |
| webRequestBlocking          | Necessary in order to add, edit and remove headers before they are sent (see webRequest).                                                                                                                 |
| storage                     | Used to store extension settings.                                                                                                     |
| contextMenus                | Used to show the "mute for..." feature.  
| alarms                      | Used for the "mute for..." feature.

### Optional Permissions
| Optional Permission | Justification |
| -------------------- | ------------- |
| notifications | To notify users about new Scratch messages/notifications. |

## Are you using remote code?
No, I am not using remote code