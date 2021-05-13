# Scratch Addons website

![Site Deployment workflow status](https://img.shields.io/github/workflow/status/ScratchAddons/website-v2/Site%20Deployment?label=deploy&style=flat-square) [![Website: scratchaddons.com](https://img.shields.io/badge/website-scratchaddons.com-ff7b26.svg?style=flat-square)](https://scratchaddons.com) [![License](https://img.shields.io/github/license/ScratchAddons/website-v2?style=flat-square)](https://github.com/ScratchAddons/website/blob/master/LICENSE)

These are the files behind the Scratch Addons website. It is build with Hugo as the static site generator, Bootstrap 4 as the CSS framework, and GitHub Pages as the hosting provider. The website is built simple with accessibility and readability in mind, and is mobile-compatible.

## Building

1. You will need [Hugo]. Read [Install Hugo](https://gohugo.io/getting-started/installing/) if you haven't got Hugo installed.

2. Serve the website for development (`localhost:1313` by default):

```batch
hugo -D serve
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the terms of GNU General Public License v3.0.

----

## Themes

There are four themes that is implemented on this website.

1. Normal light theme (normal Bootstrap colors): `body`
2. Normal dark theme (colors customized with Material Design dark theme colors): `body.dark`
3. Extension-styled light theme (Sora font, colors same as normal): `body.extension-styled`
4. Extension-styled dark theme (Sora font, colors customized based on extension): `body.extension-styled.dark`

Each page development should be prioritized from the normal themes first, then the extension-styled themes, and light first, then dark. (top to bottom basically)

Extension-styled themes can be accessed by pressing `SHIFT` when clicking the dark theme toggle switch.
