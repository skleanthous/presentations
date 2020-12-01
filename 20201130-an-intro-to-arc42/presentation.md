---
marp: true
class: invert
theme: gaia
paginate: true
_paginate: false
_footer: ""
footer: An introduction to arc42 - @skleanthous
---

<!-- _class: lead invert -->

# An introduction to arc42

---

## Schedule

1. What is arc42?
2. Sections in arc42
3. arc42 in context

---

<!-- _class: lead invert --> 

## What is arc42?

---

<!-- _header: "What is arc42? 1 of 8" -->

## arc42...

...is an accessible,  template for authoring architectural documentation

<!--
| Is | Is _not_ |
|---|---|
| A template for architectural documentation | An architecture |
| Easy to read / accessible | A modelling tool |
| A "pit of success" | A silver bullet for documentation |
-->
---

<!-- _header: "What is arc42? 2 of 8" -->
<!-- _class: lead invert -->

## Should I use it?

---

<!-- _header: "What is arc42? 3 of 8" -->

## My most common experience with documentation:

<p style="text-align:center;"><img src="./resources/empty-box.jpg" height="400" alt=""/></p>

---

<!-- _header: "What is arc42? 4 of 8" -->

## My experience with documentation in startups:

<p style="text-align:center;"><img src="./resources/stickies.jpg" height="400" alt=""/></p>

---

<!-- _header: "What is arc42? 5 of 8" -->

## My experience with formal documentation (what little I got to see):

<p style="text-align:center;"> <img src="./resources/single-puzzle-piece.jpeg" height="400" alt=""/></p>

---

<!-- _header: "What is arc42? 6 of 8" -->

## My experience with formal documentation:

<p style="text-align:center;"><img src="https://i.imgflip.com/432d64.jpg" alt="when documentation finally makes sense"/></p>

---

<!-- _header: "What is arc42? 7 of 8" -->

## (not really) side-tracking:

<p style="text-align:center;"><img src="./resources/grady-booch-wisper.jpg" height="240" alt=""/></p>

---

<!-- _header: "What is arc42? 8 of 8" -->

## We can and should do better than that

- Accessible
- Low ceremony
- Thorough
- Extensible

<!--
- As much or as little as it makes sense
- Easy to use
- Meant to be adapted to current context
-->
---

<!-- _class: lead invert --> 

## Sections of arc42

---

<!-- _header: "Sections in arc42. 1 of 16"-->

## Section 1: Introduction and goals

It is a high (but invaluable) overview of the project. Made up of:

- Introduction
- Requirements overview
- Quality goals
- Stakeholders

<!--

| Do's | Don't |
|---|---|
| Provide context | Don't skip this |
| Cover the important bits | Avoid going into details |
| Use diagrams | Don't make this too long |
| Use concrete examples | |


- Focus on this section
- Use diagrams to succintly describe and and give context
- Examples are easy to understand
- Also examples \ scenarios can very clearly convey quality requirements

-->

---

<!-- _header: "Sections in arc42. 2 of 16"-->

## Section 2: Architecture constraints

Things that restrict freedom of architectural decisions. These may be:

- Environmental
- Political and / or organizational
- Technical

<!-- 

- External constraints refers to ability to hire talent, maturity of constrained tooling, anything impacting scale, etc
- Technical includes existing or available skillset, having to use a tool or platform due to agreements etc.


Do's and dont's

- Use small tables to present and explain
- Explain consequences of breaking a constraint. Sometimes you may prefer to do so, but note the consequences.
- Don't ignore organizational and political constraints

-->

---

<!-- _header: "Sections in arc42. 3 of 16"-->

## Section 3: Context and scope

- An overview of the ecosystem
- Specify communication & dependencies
- Focus on _public_ interfaces and data flow

<!--

- An overview of the ecosystem -> where the sytem we're building lives, with it's neighbours: who drives it, 

- I _love_ this section
- Normally split into two sections: business context and technical context
- At least tech context is a DIAGRAM-heavy section
- Wardley maps in business context + C4 System level and business model canvas may just be enough
- Focus on public interfaces for system context.
- Avoid too much detail -> This is an overview. The other sections will expand and link back
- Again: show data flow - this is useful for some non-techy, but tech-related stakeholders.
-->

---

<!-- _header: "Sections in arc42. 4 of 16"-->

## Section 3: Context and scope (cont.)

Use / add / link to:

- Wardley maps
- Business model canvas
- C4 system context diagrams
- Additional modeling artifacts

<!--
Since this section is about context and understanding how it's used, add following (if they exist) to provide context:
- User story mapping
- Use Example mapping diagrams
- Use Domain story-telling
-->

---

<!-- _header: "Sections in arc42. 5 of 16"-->

## Section 4: Solution strategy

- A summary of important decisions about the system
- These should clearly explain the next sections
- Link to constraints and goals

<!--

- All important decisions MUST be documented here - none missing
- Analysis, design, hosting, (internal and external) integration, data, all should be reflected if possible and make sense
- Link to next sections
- Don't get carried away. This is not an ADR list -> that's section 9 :)

-->

---

<!-- _header: "Sections in arc42. 6 of 16"-->

## Section 5: Building block view

- Present the static view of the system
- Start from system view
- Zoom to show services --> Level 1
- Zoom to show components --> Level 2
- (C4 container and component) Diagrams + text

<!--
- Avoid zooming into all services
- A tree view where system is zoomed in to C4 containers \ Logical services
- C4 containers are zoomed in to C4 components -> pieces of logic which sit inside the same process
- Potentially zoom components into code (which is level 3), but avoid unless really necessary due to cost of maintenance
- Absolutely use diagrams!
- Use tables to describe black boxes which you don't zoom into
- Use some text to explain purpose
-->

---

<!-- _header: "Sections in arc42. 7 of 16"-->

## Section 5: building block view (cont.)

<p style="text-align:center;"><img src="https://docs.arc42.org/images/05-building-block-hierarchy.png" height="400" alt="Fred Brooks picture" align="bottom" /></p>
<font size="4">Sample taken from https://docs.arc42.org/section-5/</font>

<!--
- Avoid zooming into all services
- A tree view where system is zoomed in to C4 containers \ Logical services
- C4 containers are zoomed in to C4 components -> pieces of logic which sit inside the same process
- Potentially zoom components into code (which is level 3), but avoid unless really necessary due to cost of maintenance
- Absolutely use diagrams!
- Use tables to describe black boxes which you don't zoom into
- Use some text to explain purpose
-->

---

<!-- _header: "Sections in arc42. 8 of 16"-->

## Section 5: Building block view (cont.)
#### Buidling block view and DDD

- Clearly mark Bounded Contexts
- Consider Bounded Context Canvas
- Consider Aggregate Design Canvas

<!--
- Clearly define bounded context. Better yet align your diagrams with your bounded contexts
- Bounded context canvas will be replacing the text describing the blackboxes at different levels. Maybe do this?
- Aggregate design canvas maybe a reasonable addition for a level 3 (a zoom on components to show code)
-->

---

<!-- _header: "Sections in arc42. 9 of 16"-->

## Section 6: Runtime view

- Focuses on the dynamic aspects
- Document:
  - Use cases
  - Workflows
  - Interactions \ data flows
  - Sad paths
- Add links or pictures from any Event storming sessions here

<!--

- Dynamic diagrams in the sense of UML dynamic diagrams:
  - Sequence diagrams
  - Activity diagrams

- Don't try to be thorough! Focus on the important ones. It can be a huge productivity drain to maintain. 
- Diagrams! Diagrams!
- Link to the building blocks view parts which are participating
- Do not underestimate the ability of dynamic aspect documentation to convey behaviour and context. This is a very important bit of the architecture.
-->

---

<!-- _header: "Sections in arc42. 10 of 16"-->

## Section 7: Deployment view

- Most well known aspect of architecture :)
- Document technical infrastructure
- Map building blocks to hardware

<!--
- Use multiple levels in these documentation
- Document various environments
- Link decisions about hardware to quality goals
-->

---

<!-- _header: "Sections in arc42. 11 of 16"-->

## Section 8: Concepts
> #### The pattern language of your solution

- 👆 Elevator pitch for the section
- Describe cross cutting concerns
- Technical decisions which apply across the system
- Probably the only place where source code makes sense

<!--

- Concepts as in "conceptual integrity", think uniformity and cohesion of practices. Hence pattern language
- Stuff to put here:
    + Architectural patterns
    + Tech decisions
    + Metadata use
    + Shared processes
- Only the important ones
-->

---

<!-- _header: "Sections in arc42. 12 of 16"-->

Side-track: Cross-cutting concerns are important in a system:

> I will contend that Conceptual Integrity is the most important consideration in system design. It is better to have a system omit certain anomalous features and improvements, but to reflect one set of design ideas, than to have one that contains many good but independent and uncoordinated ideas.

<p style="text-align:right;"><img src="http://www.cs.unc.edu/~brooks/Brookspic2.jpg" height="160" alt="Fred Brooks picture"/><br>Fred Brooks</p>

<!--
- Don't do unexpected things!
- Don't run the risk of moving to another part of the system, and brake stuff due to muscle memory
- Productivity across code that adheres to the conceptual integrity
-->

---

<!-- _header: "Sections in arc42. 13 of 16"-->

## Section 9: Architecture decisions

- Relates to ADR's
- Focus on important or expensive decisions
- Prefer to document decisions near the effect

<!--

- This is a section to document your _important_ ADR's...
- ...but it's not an ADR record. Use something else for that. Carefuly consider which ADR's belong here
- If you can document the decision near the effect it has on the different sections, prefer to do so. Cause and effect make sense together.
- Only exception: the important \ expensive bits. You will probably want to go deeper into some decisions and this breaks the benefit of having cause-effect in the different architectural views.
- Things to write:
    + Provide context
    + Explain cost
    + Alternatives considered
    + Explain decision
-->

---

<!-- _header: "Sections in arc42. 14 of 16"-->

## Section 10: Quality

- Thorough list of quality requirements
- Quality scenarios
- "Quality Attribute Utility Tree"

<!--
- A place for all qualiry requirements which didn't make the cut for section 1.2
- Link quality with stakeholders.
- Quality requirements are very important for architecture
- Quality tree gives an overview. It has a basic structure, but takes the shape of a mind map. Good option to give an overview, but probably safe to skip and focus on scenarios, unless you have a lot of requirements from different SME's \ stakeholders
- Useful as a checklist to validate architecture (hence maybe the place in the template??)
-->

---

<!-- _header: "Sections in arc42. 15 of 16"-->

## Section 11: Risk and technical debt

- A list of risk and technical debt

<!--
- Link with stakeholders
-->

---

<!-- _header: "Sections in arc42. 16 of 16"-->

## Section 12: Glossary

- A place for our Ubiquitous Language
- Structure by BC's

<!--
- This is an important bit (especially for DDD'ers)
- (obviously) Be specific about the term used
- Explain expectations of seeing the terms in code (classes, structures, variables, processes, etc)
-->

---

<!-- _class: lead invert --> 

## arc42 in context

---

<!-- _header: "arc42 in context. 1 of 3"-->

## arc42 with DDD

- Eniterely orthogonal
- arc42 doesn't cater for DDD-specific expectations _by default_
- Add to documentation where needed

<!--
- There are things which are useful in DDD, which arc42 does not specifically cater for
- Regardless they are orthogonal concerns and can be used together nicely
- I already made some suggestions for extending to include artifacts one expects from analysis using DDD
-->

---

<!-- _header: "arc42 in context. 2 of 3"-->

## arc42 in startups / small orgs

- Yes, within reason
- Collaborative ownership
- Make it lean
- Still focus on 1-3

---

<!-- _header: "arc42 in context. 3 of 3"-->

## arc42 without an architect

- Do it
- Collaborative ownership again

---

<!-- _class: lead invert -->
# Thank you

Savvas Kleanthous
@skleanthous
