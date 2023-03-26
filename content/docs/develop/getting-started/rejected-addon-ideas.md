---
title: Rejected Addon Ideas
description: (TODO)
weight: 4
---

<!-- Introduction TODO -->

Below there's a list of some reasons why we've rejected addons in the past.

Please note that these are general rules. Feature ideas are considered in a case-by-case basis.


## Features not specific to Scratch

If a general-purpose extension can be developed to achieve the exact same result in the Scratch website, it's likely that the addon idea will be rejected.

Some examples of rejected ideas:
- Convert Unicode emojis to Twemoji
- Always open links in a new tab
- Applying some CSS to all elements on the page, without any Scratch-specific selectors/logic


## Features that could be implemented as a website first

Some features don't strictly need any extension capabilities. Implementing them as websites first benefits the whole Scratch community, and specially students that cannot download extensions to their devices.

If a website already exists, the developer community can consider whether it makes sense to integrate it as an addon or not.

Some examples of features that could be implemented as websites:
- Displaying public data from a user, such as their profile statistics
- Letting users choose a status and seeing other people's


## Non-urgent vanilla Scratch bug fixes

When a bug is reported to the Scratch Team, we generally give them enough time to fix it for all users. If possible, Scratch Addons contributors should send a pull request directly to Scratch's GitHub repository. Only if enough time has passed without it being merged, we should consider creating a new addon that fixes the bug.


## Unnecessarily using external libraries, services or REST APIs

If possible, all computation should happen on the client's machine for privacy reasons.

This restriction does not include the Scratch website or its REST API.

Some examples of rejected implementations:
- Calling a server that computes project statistics with a project JSON file
- Using an hypotetical image service to show a Scratcher's profile picture by providing their username instead of their user ID
