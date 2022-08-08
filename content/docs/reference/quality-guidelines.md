---
title: Quality Guidelines
aliases:
  - /docs/developing/quality-guidelines
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
- must be compatible with our existing addons. This doesn't just mean avoiding bugs: addons should complement each other by supporting each other's features. For example, an addon that has a user interface should support our respective dark mode addon.
- must work without any other addons enabled.

In order for an approval to be valid, it must have the following checklist accompanying it as a comment:
```markdown
<!-- The following checklist items apply to all PRs. -->
[] Valid reason to merge
[] To the best of my knowledge, supports all browsers supported by the extension
[] I personally tested all features in both a Chromium-based browser and Firefox
[] I personally reviewed all code line-by-line
<!-- For new addons and features, the following checklist items must also be included and completed. -->
[] All titles, descriptions, info notices, and setting names provided are clear and concise
[] I personally found the addon to be easy to use during my testing
[] I personally tested with all other addons and features enabled and did not find compatibility issues
[] I personally tested with no other addons enabled and did not find issues
[] The addon is well-integrated with other addons
<!-- The following checklist items aren't required, but please check them if applicable to give us as much info on your approval as possible. -->
[] I blind-tested this PR
[] I'm a specialist in the area this PR is changing
```