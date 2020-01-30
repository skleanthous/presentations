# My presentations

## How to build them

The presentations were built using [Marp](https://marp.app/) and using Visual Studio Code with the [Marp plugin installed](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode).

### If presentation only uses built-in marp features

Open the presentation inside VS Code and you'll be able to view, edit, and build the presentations.

Alternatively, from the CLI just run `npx @marp-team/marp-cli {NameOfPresentation}.md -o {NameOfPresentation}.html` to convert the presentation into html.

### If you want to use markdown-it plugins for your presentation

1. Make sure you have markdown-it engine installed locally by running `npm install markdown-it --save-dev`
1. Make sure you have plugin installed locally by running `npm install {Plugin Name} --save-dev`
1. Add the plugin in [engine.js](engine.js) as per it's instructions and similar to the existing examples already in engine.js
1. When building the presentation, you'd have to use `marp-cli` and provide an engine by running `npx @marp-team/marp-cli --engine {Path to engine} {Path to presentation}`. For example if you're in the [DDD Fireside chat folder](./20200130%20-%20DDD%20fireside%20chat/), you can run:
   - `npx @marp-team/marp-cli --engine ../engine.js Presentation.md`

## Presentations

- DDD London 30th Jan 2020: [DDD Fireside chat: what worked, what didn't, and what we did about it!](./20200130%20-%20DDD%20fireside%20chat/Presentation.html)
