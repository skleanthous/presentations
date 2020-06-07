---
marp: true
#class: invert
theme: gaia
paginate: true
_paginate: false
_footer: ""
footer: Becoming a high performance team - @skleanthous
---

<!-- _class: lead invert -->

# Becoming a high-performance team
## (and how to stay one)

---

## Schedule

1. Definition of high-performance - 5mins
1. Process - 5mins
1. Architecture - 5mins
1. Team structure - 5 mins
1. Q & A - 10mins

---

<!-- _class: lead invert -->

# Definition of high performance

---

<!-- header: "Definition of high performance"-->
# A high-performance organization has:

- Small lead times
- Low waste
- Very low change failure rates
- A meaningful definition of value (hint: it's not always money or customer satisfaction)

---

<!-- header: "Definition of high performance"-->
# A high-performance organization has:

- <mark>**Small lead times**</mark>  (👈 needs quick deployments)
- Low waste
- Very low change failure rates
- A meaningful definition of value (hint: it's not always money or customer satisfaction)

---

<!-- header: ""-->
<!-- _class: lead invert -->
# Process

---

<!-- header: "Process"-->
# Process overview

1. Story mapping
1. Event storm
1. Analyse, update model, implement just-in-time
   - Split work to sub-day sizes
   - Periodically go back to 1.
1. Many mini-retros

*: For a _specific_ definition of value

---

<!-- header: ""-->
<!-- _class: lead invert -->
# Architecture

---

<!-- header: "Architecture"-->
# Side-tracking: Benefits of a good architecture

- Not _only_ performance and availability
  - Changes are easy
  - Changes do not cascade
  - Changes are targeted
  - All architectures have tradeoffs

<!-- 
All of which are necessary for short cycle times
Note the absence of easy and zero downtime deployments 
  -> Deployment is hard or easy depends on technical details
  -> Zero downtime deployment may not be needed at all, so not necessarily a benefit
-->

---

<!-- header: "Architecture"-->
<!-- _class: lead -->

## Restrict dependencies & Reduce coupling

<!-- 
MULTIPLE other points. The above are just two of the most important ones. Others:

- Architect "heavily inspired" from collaborative model
- Separate logical boundaries (even if running in same process)
- Maintainability-> Easy to support
- Prefer performance with un-availability in face of partitions.

-->

---

<!-- header: "Architecture"-->
## Restrict dependencies

- Top tip: visualize dependencies with C4 container diagrams clearly indicating public contracts
- Dependencies should form DAG
- Split semantic data and store only where it's used
- Use local caches of data
- Duplicate data types

<!-- 
• !!Avoid semantic grouping of data!! Most common pitfall. Think processes.
• Check to see, but vast majority of processes can live with stale data

• Split\distribute data when it enters your system
• Any dependencies must form a DAG (Directed Acyclical Graph)
• "Tell don't ask"

An example of customer with name, email, payment info, and bank details
-->

---
<!-- header: "Architecture" -->
# Reduce coupling

- Avoid temporal coupling
- Avoid behavioural coupling
- Data coupling or stamp coupling

<!-- 
• Temporal couipling ==> use messaging. Event ECST avoids temporal coupling and is a good first step in modernization projects
• Avoid behavioural coupling ==> Use events with reactive principles. Avoid commands
• Avoid behavioural coupling #2 ==> Prefer choreography over 
  - Need to be aware that choreography has issues with error handling of complex workflows
• Data coupling ==> only have a single COHESIVE place the data is used by. Messages only include it's ID NOTE: NOT always possible
• If 👆 is not possible fall-back to stamp / message coupling ==> publish events, observers depend on part of that structure
  - Use local caches of data
  - Duplicate definitions (don't share library)
-->

---

<!-- header: ""-->
<!-- _class: lead invert -->
# People

---

<!-- header: "People" -->
# Teams

- Small, cross-functional teams
- Teams form around business processes
- "The business" is collocated with developers
- Decision happen internally

<!-- 
• Small teams need less coordination
• Have teams own core services along with supportive that the core needs.
• Team per core BC ideal -> if more, this is a risk of dependency of one team with the other
• Team should be empowered. For this they need to be able to make their own decisions
-->
