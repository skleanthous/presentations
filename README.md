# My presentations

## Presentations

[Presentations page](https://skleanthous.github.io/presentations/)

- DDD London 30th Jan 2020: [DDD Fireside chat: what worked, what didn't, and what we did about it!](https://skleanthous.github.io/presentations/20200130-ddd-fireside-chat/Presentation.html)
- DDD London 28th May 2020: [An intro to arc42](https://skleanthous.github.io/presentations/20200528-an-intro-to-arc42/presentation.html)
- UXDX Amsterdam 23rd June 2020: [Becoming (and staying) a high-performance organization](https://skleanthous.github.io/presentations/20200623-becoming-a-high-perf-org/presentation.html)
- μServices London meetup 30th June 2020: [Becoming (and staying) a high-performance organization](https://skleanthous.github.io/presentations/20200630-becoming-a-high-perf-org/presentation.html)
- DDD London 14th September 2020: [An introduction to CQRS and Event Sourcing, and Q & A](https://skleanthous.github.io/presentations/20200914-intro-to-cqrs-and-es/presentation.html)
- UXDX 6th-9th October 2020: [Event Storming: Building the right thing](https://skleanthous.github.io/presentations/20201006-event-storming-build-the-right-thing-right/presentation.html)
- DDD Vienna & Microservices, Reactive, and Distributed Systems Vienna 30th November 2020: [An intro to arc42](https://skleanthous.github.io/presentations/20201130-an-intro-to-arc42/presentation.html). The slides are the same, but there are minor changes in the comments.
- In-house 21st of January 2021: [A crash-course on theory of constraints](https://skleanthous.github.io/presentations/20210121-a-crash-course-on-toc/presentation.html)
## How to build them

The presentations were built using [Marp](https://marp.app/) and using Visual Studio Code with the [Marp plugin installed](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode).

### If presentation only uses built-in marp features

Open the presentation inside VS Code and you'll be able to view, edit, and build the presentations.

Alternatively, from the CLI just run `npx @marp-team/marp-cli {NameOfPresentation}.md -o {NameOfPresentation}.html` to convert the presentation into html.

### If you want to use markdown-it plugins for your presentation

1. Make sure you have markdown-it engine installed locally by running `npm install markdown-it --save-dev`
1. Make sure you have plugin installed locally by running `npm install {Plugin Name} --save-dev`
1. Add the plugin in [engine.js](engine.js) as per it's instructions and similar to the existing examples already in engine.js
1. When building the presentation, you'd have to use `marp-cli` and provide an engine by running `npx @marp-team/marp-cli --engine {Path to engine} {Path to presentation}`. For example if you're in the [DDD Fireside chat folder](./20200130-DDD-fireside-chat/), you can run:
   - `npx @marp-team/marp-cli --engine ../engine.js Presentation.md`

