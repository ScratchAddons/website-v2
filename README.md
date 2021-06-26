# Scratch Addons website

[![Deployment status (Site Deployment workflow status)](https://img.shields.io/github/workflow/status/ScratchAddons/website-v2/Site%20Deployment?label=deploy&style=flat-square)](https://github.com/ScratchAddons/website-v2/actions/workflows/deploy-site.yml) [![Last deployment date (Date of the last commit on gh-pages)](https://img.shields.io/badge/dynamic/json?label=last%20deploy&query=%24.commit.author.date&url=https%3A%2F%2Fapi.github.com%2Frepos%2FScratchAddons%2Fwebsite-v2%2Fcommits%2Fgh-pages&style=flat-square)](https://github.com/ScratchAddons/website-v2/tree/gh-pages) [![Website: scratchaddons.com](https://img.shields.io/badge/website-scratchaddons.com-ff7b26.svg?style=flat-square)](https://scratchaddons.com) [![License](https://img.shields.io/github/license/ScratchAddons/website-v2?style=flat-square)](https://github.com/ScratchAddons/website-v2/blob/master/LICENSE)

These are the files behind the Scratch Addons website. It is build with Hugo as the static site generator, Bootstrap 4 as the CSS framework, and GitHub Pages as the hosting provider. The website is built simple with accessibility and readability in mind, and is mobile-compatible.

Check out [the repo wiki](https://github.com/ScratchAddons/website-v2/wiki) for documentation related to the website.

## Building

1. You will need [Hugo](https://gohugo.io) (extended version). Read [Install Hugo](https://gohugo.io/getting-started/installing/) if you haven't got Hugo installed.

2. Serve the website for development (`localhost:1313` by default):

```batch
hugo -D serve
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the terms of GNU General Public License v3.