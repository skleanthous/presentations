---
marp: true
class: invert
theme: gaia
paginate: false
_footer: ""
footer: An introduction to toc - @skleanthous
---

<!-- _class: lead invert -->

# A crash course on the theory of constraints

---

# Becoming a floor manager at a jam workshop

- You just got kidnapped by a strawberry jam company and you are assigned as the floor manager
- This infamous jam company expects you to optimize their jam creation process
- They need to be able to deal with a 10x increase in jam demand

---

<!-- _class: lead invert -->

# Where would you even start?

---

## Is it really the same to optimize:

- A car manufacturing plant pipeline
- Jam production
- Software pipeline that processes some data
- Processing a loan application (takes multiple people)

---

<!-- _class: lead invert -->
# YES!

---

<!-- _class: lead invert -->
## ...and to do this (optimize workflows/pipelines) we use the "Theory of Constraints"

---

(which is a theory in the same way as the theory of gravity)

---

# Step #1: Identify the bottleneck in your process

- This is the easier part of the process: Just look at the backlog _of each_ step in the process
- This is super easy if you use messaging: just see the queues. One should always fill up: there it is!

---

# Step #2: Exploit the system's bottleneck

- i.e. remove waste from the bottleneck

---

# Step #3: Subordinate everything else to help exploint the bottleneck

- Eveything else should help the step that is the bottleneck
- There is no point in focusing elsewhere. Investment there is a waste.
- Increasing throughput in steps _before_ the bottleneck is even worse than waste: it makes matters worse. It's better to have the previous step idle

---

# Step #4: Elevate the bottleneck

- Optimize it: 
  - Start benchmarking
  - Do performance optimizations
- Scale out

---

# Step #5: Go back to 1

- It is very likely that the system changed behaviour, and now there is another bottleneck which may be causing problems
- Go back to identifying bottlenecks if throughput isn't enough
- If on the other hand throughput is enough: stop, but be vigilant. Systems change

