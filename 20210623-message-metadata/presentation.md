---
marp: true
theme: gaia
paginate: true
_paginate: false
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

<!-- _class: lead invert -->

# An attempt at a _practical_ definition

---

<!-- _class: lead -->

# Metadata are data that are useful for cross-cutting concerns and observability

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

# Metadata in real life

---

<!-- _class: lead  -->
## Example: Pre-computing phone sales

<!-- 
- Customer calls sales
- Sally (from sales picks up) and takes the order
- Sally calls fulfillment
- Farid (from fulfillment) picks up
- Sally tells Farid to ship X items to Y location using Z service 
-->
---

## Did you spot the metadata?

- Fulfillment departments phone number (routing)
- Sally requesting a shipment (command type)

---

## More metadata!

(sometimes metadata are not obvious)

- Sally (source)
- Farid (receipient)

---

## Even more metadata!

(sometimes metadata are REALLY not obvious)

- Farid knowing who Sally is (auth)
- Time of the call request

---

<!-- _class: lead invert -->

# Why are metadata important?

---

<!-- _class: lead -->

# 1. We don't polute our data with unecessary info

Implicit information must become explicit, but not everyone is interested

<!--
Thinking back on the previous, real-life example, should the order form include information about what number to call to fulfill the order? Should it include Farid's name? The fulfillment department (isn't it implicit)?
-->

---

<!-- _class: lead -->
# 2. We need them to fix problems

Which is **very** difficult at scale

<!-- 

Something goes wrong:
- Who placed the order?
- Who received the request to ship?
- When?
etc.

At the same time:
- Manual inspection is impossible
- Software doesn't have enough "smarts" to discover and fix
- Too many things happen
- Too much implicit info
-->

---

<!-- _class: lead -->

# 3. Understanding / discovering implicit behaviour

<!-- 
Complex systems are complex. Cause-and-effect is lost. Metadata can help us understand what really happens in our systems
-->


<!-- 

Sample uses of metadata:
1. Understand what your system does \ did in response to a request
1. Debug an exception
1. Advanced concurrency
1. Discovering domain
    - How often a user does something
    - Find functionality that is used in quick succession by same user
    - Discover common causes for a particular event


Understanding what happens:
1. Filter based on message name
1. Take random sample
1. Get all events that have the same correlation id as sample

Debug exceptions
1. Get all error events of specified error type (filtering on resource)
1. Take random sample
1. Get all events that have the same correlation id as sample
1. Use event id and causation id to create causal chain
1. Use resource name and version and incoming message to replay what happened in prod
All of these can be fully automated and can result in being able to run locally with right versions, remote data, debugger attached...

Advanced concurrency:
1. Expected version (instead of hash-etag)
1. Check newer events and confirm they're compatible
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
