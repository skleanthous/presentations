---
marp: true
theme: gaia
paginate: true
_paginate: false
_footer: ""
footer: DDD Fireside chat - 30th Jan 2020 - @skleanthous
---

<!-- _class: lead invert -->

![bg left:30% blur:3px](Fireplace.png)

# DDD Fireside chat

## What worked, what didn't, and what we did about it!

---

# Timetable

1. Intro 10 minutes
1. Write topics 10 minutes
1. Vote 5 minutes
1. Discussion 60 minutes
1. Feedback 5 minutes

---

# About me

- Savvas Kleanthous
- Head of Engineering @ ParcelVision Ltd.

Social:
- Twitter: @skleanthous

---

<!-- _class: lead -->

# Inspiration

Some years ago at a DDDx...

<!-- "Are we missing something from DDD" -->
<!-- 
Question was about tactical: needed to load a collection of VO's from a repo 

This is about OUR domain: as DDD practitioners! Approach DDD as a domain we should learn collaboratively: on our day-to-day we advocate speaking to our SME's and collaboratively learning about our domain. This talk is about doing just that, in a "meta" way: speak about what worked for us, to learn about the domain of applying DDD

-->

---

# Even if we're not "missing" anything...

<!-- It's a messy messy world out there -->

<!-- - There are a lot of problems a new team faces when trying to adopt DDD for the first time -->

---

# Things I wish I knew 8 years ago:

### 1. DDD is actually made up of a lot of principles and **very** few rules.

### 2. No matter the domain: someone already did most of the difficult parts. _Probably_ by hand.

<!-- Which is just another way of saying: trust the requirements first before anything else -->

---

<!-- _class: lead invert -->

# Types of problems

Just some ideas to kick things off

---

# People problems

Examples:

1. Onboarding
1. Non-collaborative
1. No buy-in

---

# Strategic problems

Examples:

1. Little effort in domain discovery
1. Experts of old systems, not domain
1. Not enough focus on strategic patterns
1. Wrong boundaries

---

# Tactical problems

Examples:

1. God aggregates
1. Event source \ CQRS everything
1. Applying tactical patterns blindly

---

<!-- _class: lead invert -->

# Format of this meetup

---

# How does it work?

1. Write what you want to talk about and stick it on the whiteboard
1. Vote on what you want to speak about

---

# Hints - what to speak / ask about:

|--------------|---|
| - What problem did you face?  |  | \
| - What did or didn't worked for you? | - People problems | \
| - What _should_ have worked but _didn't_? | - Strategic problems | \
| - What unconventional thing did you do, | - Tactical problems | \
|   which proved valuable? | |

<!--

Points of discussion in case of stalling
- Lack of SME in PVA -> solved by focusing on boundaries to encapsulate complexity, making the aggregate as small as it could be, and having relatively aneamic domain models with PM's which use admin configuration to make decisions, pushing the decisions in. 

- Business causing god aggregates to appear: Business way too insistent on everything needing to be immediately consistent -> solution was to focus on the customer. async CQRS was introduced because it allowed us to be able to decouple processing and scalability of multiple services with vastly different behaviour and expectations (throughput, response times, scalability)

- During Event Storming, the aggregate\BC boundaries were not clear -> pivot events, common terms in events with stickies being far apart (remember lack of SME's), re-use of projection by business logic resulted in aggregate boundaries.

- Lack of trust in messaging, and eventual consistency caused too much reliance on end-to-end tests, which grew significantly, causing testing times to soar

-->

---

<!-- _class: lead invert -->

# Feedback

![QR Code for feedback form](./FeedbackQR.png)
Form link: https://forms.gle/6ssVf8VecsHhAjVP9
Presentation link: https://skleanthous.github.io/presentations/

<!--
1. How did you find this format?
1. Did you enjoy this talk?
1. Did you learn anything?
-->

---

<!-- _class: lead -->
# Thank you

Savvas Kleanthous
@skleanthous