# Preparation material

Please read the below before joining the workshop, as it contains information which will help during the workshop. There is not preparation that needs to happen other than reading this document, so it shoulnd't take more than 5 minutes. If you have any questions left after reading this document: that's good! The purpose of the big-picture Event Storming session is to raise and answer any questions, so bring them into the session!

## Description of workshop

During this workshop we'll be modelling a parcel delivery domain using big-picture event storming. Due to the limited time, the focus of the workshop is conveying how big-picture event storming can:

- Be used to explore an unknown domain
- Help assure that everyojne understands the same thing (creates shared understanding)
- Make problems visible
- (If we have time) make natural service boundaries visible (useful in system decomposition)

## Problem domain

For the purpose of this exercise, we'll assume we're all working for the fictitious "LogisticsTurnkeySoftware Ltd". LogisticsTurnkeySoftware is developing logistics solutions that allows major retailers and fulfillment houses to optimize the cost of shipping with courriers. However, in some of our market analysis we found out that some of the recipients of packages are having a bad delivery experience, because they do not correctly understand what they need to do in the case of some exceptions in delivery. Due to this, LogisticsTurnkeySoftware ltd decided we want to develop a tracking service that will convey the status of the shipment in an easy-to-understand way, and also clearly guide the recipient along any actions needed to resolve any exceptions that may exist.

Currently LogisticsTurnkeySoftware ltd does not have any tracking solutions, and the team (you) do not have experience or deep knowledge of this part of logistics, outside of some domain experts (a couple of people who have deep knowledge of statuses and resolving exceptions). However, LogisticsTurnkeySoftware ltd has heard of big-picture event storming, and decided to bring in a consultant to help guarantee that everyone who will be building this product has a shared understanding of how things work and knows where the problems are.

## Things to be aware of before joining the session

The things you need to know before joining this session are:

1. A shipment is a set of one or more parcels going from a collection address to a destination address
1. The carrier is the company transporting the goods
1. The shipper is the one who the carrier collects from, and the recipient is the one the carrier is delivering to
1. One shipment may have one or more tracking numbers
1. We provide the tracking number to the carrier and the carrier responds with a list of scans through an API
1. Scans are a piece of text along with a time and a status code, which describes something that happened to the shipment at the time
1. We need to pull scans ahead of someone tracking a shipment because of carrier API quota and time limits, and because we want to be proactive in informing our customers of issues
