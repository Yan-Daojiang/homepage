---
title: "Raft"
type: "project"
featuredImage: "https://raft.github.io/logo/solo.svg"
url: "https://github.com/Yan-Daojiang/6.824"
sourceCode: "https://github.com/Yan-Daojiang/6.824"
imgUrl: "https://raft.github.io/logo/solo.svg"
blurb: "A replicated state machine protocol."
date: 2022-05-01
technologies: ['']
---
- Raft organizes client requests into a sequence, called the log, and ensures that all the replica servers see the same log. Each replica executes client requests in log order, applying them to its local copy of the service's state. 
- Since all the live replicas see the same log contents, they all execute the same requests in the same order, and thus continue to have identical service state.
- If a server fails but later recovers, Raft takes care of bringing its log up to date. Raft will continue to operate as long as at least a majority of the servers are alive and can talk to each other. If there is no such majority, Raft will make no progress, but will pick up where it left off as soon as a majority can communicate again.

