---
marp: true
#class: invert
theme: gaia
paginate: true
_paginate: false
_footer: ""
footer: Becoming a high performance organization - @skleanthous
---

<!-- _class: lead invert -->

# Becoming a high-performance organization
## (and how to stay one)

---

## Schedule

1. Definition of high-performance - 2mins
1. Process - 7mins
1. People - 3 mins
1. Architecture - 5mins
1. Q & A - 10mins

---

<!-- _class: lead invert -->

# Definition of high performance

---

<!-- _class: lead -->
<!-- header: "Definition of high performance"-->
# A high-performance organization

↕

> An organization which relentlesly delivers value to it's customers

<!-- 

• Small lead times
• Low waste
• Very low change failure rates
• A meaningful definition of value

• Two of the four key metrics: correlation and causation
-->
---

<!-- header: ""-->
<!-- _class: lead invert -->
# Process

---

<!-- header: "Process"-->
# Drop the waste

- Drop scrum and "Agile" (noun)
- Kanban is not enough
- Go back to principles

<!-- 

• Scrum is bad:
  - Development does not fit neat X week periods
  - Redirects focus from customers to process
  - Zero actual value ceremonies, bandaids over real problems
  - Enforced process don't work
  - Scrum master role very frequenctly is absused
• I started with Scrum
• Kanban is a framework for one part of development; goot to reduce waste, but doesn't cover enough of the processs

-->

---

<!-- header: "Process"-->
# baseline

1. Split work into sub-day parts
1. Invest on rock-solid CI / CD
1. Everything just-in-time:
   - Prioritization
   - Analysis
   - Development
1. Daily retrospective

---

<!-- header: ""-->
<!-- _class: lead invert -->
# People

---

<!-- header: "People" -->
# Teams

- Small, cross-functional teams (including business)
- Teams form around non-it business functions (no overlap)
- Decision happen internally

<!-- 
• Small teams need less coordination
• Have teams own core services along with supportive that the core needs.
• Team per core BC ideal -> if more, this is a risk of dependency of one team with the other
• Team should be empowered. For this they need to be able to make their own decisions
-->

---

<!-- header: ""-->
<!-- _class: lead invert -->
# Architecture

---
<!-- header: "Architecture"-->
# Start with collaborative modelling

1. Keyword: _collaborative_
1. User story mapping
1. Event storming (big picture → process )
1. Just-in-time:
   - Example mapping
   - Event modeling

---

<!-- header: "Architecture"-->
# Tip 1: Prefer asynchronous communication

- Best fit for internal communication...
- ...when latency isn't a problem
- Use the model
- Prefer choreography

---

<!-- header: "Architecture"-->
# Tip 2: Most stable service owns the contract

- If producer is stable, raise events
- If receiver is stable, send commands
- Webhooks behave like synchronous events

---

<!-- header: "Architecture"-->
# Tip 3: Visualize the architecture

- Use C4 system & container diagrams
- Make it be an DAG

---

<!-- header: "Architecture"-->
# Tip 4: Isolate data

- Avoid semantic grouping of data...
- ...only consider use
- Split (or distribute) data on entry in the system

---
<!-- header: ""-->
<!-- _class: lead invert -->
# Thank you

```

```

Savvas Kleanthous
Twitter: <a href="https://twitter.com/skleanthous?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @skleanthous</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
More to come. Follow me on Twitter for more details.
