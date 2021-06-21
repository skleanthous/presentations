---
marp: true
theme: gaia
paginate: false
_footer: ""
footer: Ignore metadata at your own peril - @skleanthous
---

<!-- _class: lead invert -->

# Ignore metadata at your own peril

--- 

<!-- _class: lead invert -->

![bg blur:3px](./images/hourglass.jpg)

# This will be short

<style scoped>
h1,h2,h3 {
  text-shadow: 0 0 3px #000000, 0 0 5px #0000FF;
}
</style>

---

<!-- _class: lead -->

# Metadata are data useful for cross-cutting concerns and observability

<!-- 

Examples:
- Routing
- Authorization
- Debugging
- Sampling
- Throttling (sometimes)

Metadata are NOT supposed to carry data needed for core or supportive domains - those belong in message data. If you need to send a message to a generic domain (send an email to a user), put the data in the event, and not rely on metadata

-->

---

<!-- _class: lead invert -->

# Opinion: _minimum_ set of metadata

---

1. Message name
1. Message version
1. Message id
1. Correlation id
1. Causation id

---

1. BC\service that owns contract
1. UTC timestamp
1. Auth token
1. Entity version (expected for commands, source for events)
1. Source entity

---
<!-- _class: lead invert -->

# Sample use-cases

---

# 1. Understand what your system does \ did in response to a request

1. Filter based on message name
1. Take random sample
1. Get all events that have the same correlation id as sample

---

# 2. Debug an exception

1. Get all error events of specified error type (filtering on resource)
1. Take random sample
1. Get all events that have the same correlation id as sample
1. Use event id and causation id to create causal chain
1. Use resource name and version and incoming message to replay what happened in prod

<!--

All of these can be fully automated and can result in being able to run locally with:

- the right version of code
- the same command
- the same data
- with debugger attached to local process able to step though line-by-line

-->
---

# 3. Advanced concurrency

1. Load events newer than expected version number
1. Decide based on message type if message can still be processed considering the new events

---

# 4. Discovering domain

- How often a user does something
- Find functionality that is used in quick succession by same user
- Discover common causes for a particular event

<!-- 

1. Get all events of type -> group per user -> count

2. Get all events of a type -> group by user id and day & hour -> count

3. Get samples of a particular event, build causal chains, compaere event types before and compare

-->

---

<!-- header: "" -->
<!-- _class: lead invert -->
<!-- _footer: "" -->
# Thank you

``` text

```

Savvas Kleanthous

You can find this presentation here: https://skleanthous.github.io/presentations/

Twitter: <a href="https://twitter.com/skleanthous?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @skleanthous</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
More to come. Follow me on Twitter for more details.
