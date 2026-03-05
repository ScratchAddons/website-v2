---
title: Testing on a Pre-Release Version of Scratch
---

This page explains the process of setting up a version of the Scratch editor or website not yet available on scratch.mit.edu to test Scratch Addons with.

## Editor

### Pre-built Branch

The `develop` branch of the Scratch editor is available at https://scratchfoundation.github.io/scratch-editor/scratch-gui. Pre-release versions of Scratch Addons are configured to run on scratchfoundation.github.io by default. Other domains will require patches in Scratch Addons and Scratch Lab is not supported.

### From source

Start by cloning `scratch-editor` and specifying `--branch <branch-name>` if needed. `--depth=1` may be added to speed up the download as the Git history is very large.

```sh
git clone https://github.com/scratchfoundation/scratch-editor.git
```

Then in the freshly cloned repository run `npm ci` to install the dependencies and `npm run build` to build it.

To start the editor run `npm run start` in `scratch-editor/packages/scratch-gui` and open `localhost:8601` in a browser.

## Website

These instructions are for running a local instance of the Scratch 3 pages (`scratch-www`). Scratch 2 pages (`scratchr2`) such as user profiles or the forums are not supported because the code is not open source.

### Building

```sh
git clone https://github.com/scratchfoundation/scratch-www.git
cd scratch-www
npm install
npm run translate
npm run build
```

### Additional setup

Install the [cors-anywhere](https://github.com/Rob--W/cors-anywhere) proxy:

```sh
npm install -D cors-anywhere`
```

Then to fix `/session`:

1. Install the [Redirector](https://einaregilsson.com/redirector/) browser extension.
2. Open its pop-up and click "Edit Redirects"
3. Create a new redirect
4. Set the include pattern set to `http://localhost:8333/session/` where port 8333 is `scratch-www`
5. Set the "redirect to:" field set to `http://localhost:8080/https://scratch.mit.edu/session/` where port 8080 is cors-anywhere
6. Expand the advanced options check "XMLHttpRequests (Ajax)"
7. Click save

### Running

Start cors-anywhere:

```sh
node ./node_modules/cors-anywhere/server.js
```

Then in another terminal point the hosts to it and start `scratch-www`:

```sh
export API_HOST=http://localhost:8080/https://api.scratch.mit.edu
export BACKPACK_HOST=http://localhost:8080/https://backpack.scratch.mit.edu
npm run start
```

Finally open `localhost:8333` in a browser.
