---
title: Quality Guidelines
aliases:
  - /docs/developing/getting-started/quality-guidelines
---
Keep these guidelines in mind when creating or reviewing a pull request (PR). If you're not sure about a certain guideline when creating a PR, you can submit the PR as a draft and mention that you need help with a specific aspect of your PR. Many developers and community members are willing and able to help your PR improve!

All PRs:
- should have sound reasoning as to why they should be merged. This should be specified under the "Reason for changes" header when writing the PR description. Even if it seems obvious, others may need the additional context. PRs with little to no reason to be merged are likely to be delayed, ignored, or even closed.
- must support both the Chromium and Firefox browser engines. Avoid using new or experimental web technologies unless a fallback is implemented that preserves feature parity. View the [unsupported browser](https://scratchaddons.com/unsupported-browser/) page to determine the current minimum versions that must be supported.
- must be tested thoroughly. We have a very large userbase, so it's especially important that all possible use cases are considered. Every PR should be tested on a Chromium-based browser (Chrome, Edge, Brave, or another) **and** Firefox. Any tests done should be added to the "Tests" section of the PR description. **Org members, this is required in order to give approval.**
- must have **all** code reviewed line-by-line. **Org members, this is required in order to give approval.**
- should be reviewed by someone familiar with the aspects that the PR is changing. This isn't a hard requirement, but a person like this will help iron out edge cases and minor issues.

New addons:
- must have clear, concise, and easy-to-understand titles, descriptions, info notices (if any), and setting names (if any). English is required: the base addon manifest is used as a reference for our translators. The developers and members of the community should scrutinize and help with this. An effective meter for this is to test it **blindly** -- that is, download and try out the addon before reading the PR description.
- must be easy to use. The labels and design language used in any UI that the addon adds or modifies should be understandable by whoever will be using that addon. Again, testing blindly is an effective meter for this. Addons without an effective UI communicating its changes will be ranked lower than other addons in the settings page.
- must be compatible with our existing addons. This doesn't just mean avoiding bugs: addons should complement each other by supporting each other's features. For example, an addon that has a user interface should support our respective dark mode addon. View the [compatibility checklist](/docs/reference/compatibility-checklist) for common issues to consider.