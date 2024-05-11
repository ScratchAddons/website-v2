---
title: Best Practices
description: Follow these best practices when writing or reviewing userstyles.
---

Follow these best practices when writing or reviewing userstyles.


<!-- TODO: ## Addon dark mode support -->
<!-- Examples on referencing CSS variables from editor-dark-mode, dark-www and scratchr2 -->


## Internationalization

### Consider languages with longer words

Remember that in some languages, UI elements such as buttons may be narrower or wider.

<!-- TODO: ### Supporting right-to-left languages (RTL) -->


## Styling existing Scratch UI


### Avoid targeting hashed class names

The Scratch project editor usually contains class names that follow the `class_name_{hash}` format. For example, `green-flag_green-flag_1kiAo`.

As the hashes might change in the future and may differ between Scratch forks, you should avoid using them in userstyles.

{{< admonition error >}}
```css
/* Don't do this: */
.green-flag_green-flag_1kiAo {
  visibility: hidden;
}
```
{{< /admonition >}}

{{< admonition success >}}
```css
/* Do this instead: */
[class*="green-flag_green-flag_"] {
  visibility: hidden;
}
```
{{< /admonition >}}

### Avoid `!important` unless absolutely necessary

If possible, use [CSS specificity](https://web.dev/learn/css/specificity/) features to make your selectors more specific, instead of using `!important`.
<!-- This could be more detailed -->


## Styling addon UI elements


### Begin addon-defined class names with `sa-`

{{< admonition info >}}
We always use `kebab-case` when defining our own class names.
{{< /admonition >}}

We recommend that addon-defined class names begin with `sa-` to avoid potential name collisions with Scratch or other extensions.

It is also recommended to include the addon ID (or part of it) in the class name.

<!-- TODO: ### explain usage of z-index in the Scratch editor and related concepts -->
