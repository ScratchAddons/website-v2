---
title: Localizing Addons
description: Localizing addons is easy.
---
Localizing addons is easy.

## Adding messages
Under `addons-l10n/en/`, make a file named `ADDONID.json`, where ADDONID is the addon's ID (the folder name). Write your messages that you want to translate there:

```json
{
  "ADDONID/meow": "Meow",
  "ADDONID/cats": "{number, plural, one {1 cat} other {# cats}}",
  "ADDONID/eat": "I want to eat {food}!",
  "ADDONID/salmon": "salmon",
  "ADDONID/sardine": "sardine",
  "ADDONID/move-steps": {
    "string": "move {number} steps",
    "developer_comment": "Please translate this to match Scratch's official translation for the block."
  }
}
```

### Placeholders
Sometimes messages need to have things that are dynamically generated. For example, number of cats, or input. To handle this, you can use placeholders like `{placeholderName}`. Placeholder name should only contain letters (no numbers).

### Plurals
What if the placeholder is a number? We can use plurals like `{placeholderName, plural, one {when there is one thing} other {when there are # things}}`. If the placeholder is 1, it will show "when there is one thing", otherwise it says "when there are (placeholder) things".

### Developer comments

Transifex will display the developer comment when a translator has selected the specified string. These comments are usually used to ask for a particular translation of the string or to provide additional information for languages that do not differentiate between uppercase and lowercase characters.

## Using the translations
Change your userscript's first line from something like:
```
export default async function ({ addon, console }) {
```

to:
```
export default async function ({ addon, console, msg }) {
```

The `msg` added is the function you use to get translations. For example, `text = "Meow"` can now be `text = msg("meow")`. The addon ID and the slash is omitted.

### Placeholders
You can provide placeholder values:
```js
cat = msg("cats", {number: 1}) // shows "1 cat"
cats = msg("cats", {number: 3}) // shows "3 cats"
hungry = msg("eat", {food: "cod"}) // shows "I want to eat cod!"
```

You can also "nest" messages:
```js
hungry2 = msg("eat", {food: msg("salmon")}) // shows "I want to eat salmon!"
```

### Safety
If you are writing raw HTML, `msg` should be replaced with safer version of `safeMsg`.
