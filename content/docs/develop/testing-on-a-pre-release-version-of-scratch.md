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

### Running

Install and run [cors-anywhere](https://github.com/Rob--W/cors-anywhere) which will provide a proxy on port 8080.

```sh
npm install -D cors-anywhere
node ./node_modules/cors-anywhere/server.js
```

Then in another terminal point the hosts to it and start `scratch-www`:

```sh
export API_HOST=http://localhost:8080/https://api.scratch.mit.edu
export BACKPACK_HOST=http://localhost:8080/https://backpack.scratch.mit.edu
npm run start
```

Finally open `localhost:8333` in a browser.

### Fixing /session

{{< admonition warning >}}
Avoid including a token unless it is actually necessary, for example to test the backpack.
{{</ admonition >}}

Generate a data URI from a valid `/session` response. On macOS or Linux assuming it has already been downloaded as a file this can be done with:

```sh
echo "data:application/json;base64,$(base64 response.json)"
```

Then setup a redirect:

1. Install the [Redirector](https://einaregilsson.com/redirector/) browser extension.
2. Create a new redirect
3. Set the include pattern to `http://localhost:8333/session/` where port 8333 is `scratch-www`
4. Paste the data URI in the "redirect to:" field
5. Expand the advanced options check "XMLHttpRequests (Ajax)"
