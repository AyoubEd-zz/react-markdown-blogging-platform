# A Primer on Database Replication

this article is a synopsis of what I learned reading [Brian Storti](https://www.brianstorti.com/about/)'s amazing [article](https://www.brianstorti.com/replication/) on database replication.

As this is my first article summary, I wanted to point out a couple of things. I think the best thing to retain information is
asking the right questions, so I will write the summary in that format(question, answer). The second thing is that I'm only discovering a lot of the topics I'm reading about, so please check the facts very thoroughly, I will do my best to do the same.

The article is talking about the authors experience in scaling databases, we can make our applications faster and increase our tolerance to failure?

* So, why can't we keeping scaling vertically?

Even if we keep increasing our servers performance and that is by: increasing database capacity, getting a more powerful machine, adding more RAM,etc. We can't surpass a threshold set by the maximum speed of our requests.

* What's the solution then?

To solve this problem, we have to scale horizentally. So, how can we do it, and how does it solve the issue at hand?
scaling vertically means creating muliple replicas of our database, possibly in different geographical areas. This way
        - we can keep data close to the users, so less travel time.
        - we can  handle the requests, wich means reducing our latency.
        - we have multiple copies of our data, so more failure tolerance.

when partitioning our databases, we run into some issues concerning availability and consistency that can be summarized by the CAP theorem.

* What does this theorem say?
When dealing with distributed systems we can't possibly have these 3 properties at the same time: consistency, availability and partition tolerance. Practically, we can say that we are always trading consistency for availability (or vice-versa) when dealing with network partitions.

So, to insure consistency we have to write the data that a user sends to one node on all the other nodes. Here we have to possible solutions: synchronous and asynchronous replication.

* What are these and what are the tradeoffs?
Asynchronous replication consists of writing to one node and then writing to the others, a confirmation reponse is sent when the first operation succeeds.
This is a great solution for increasing performance, however it exposes us to two issues: durability(a possible node failure can result in loss of data the user thinks is already saved), and replication lags.

Synchronous replication consists of writing to all the nodes before considering the operation successful. Wich ensures that our data is safe but results in performance overhead because we need to wait for all the replicas to sync, plus we can have an issue if one of the nodes is not available.

| Because of this, a popular strategy is to use a mix of the two which we call semi-synchronous replication.
| In the Following we are going to delve into a number of solutions implementing this concept.

## Single Leader Replication
This is the most common topology, where we have a single leader.
 leader:   - handles all the 'write' requests
           - replicate the changes to all followers
 followers:- handle 'read' requests
 
* What problems do we need to keep in mind when choosing this approach?
- the leader node should be able to handle all the writes.
- increased latency on write requests
- the leader node is a single point of failure

* How can we prepare for the leader node failure?
we can have a failover strategy

* What are the challenges of an automatic failover strategy?
- knowing if a node is dead or not and hence knowing when to start the failover process
- deciding who is the new leader(consensus problem): the new leader might not have all the data the leader had, choosing the one with the most recent update.
- request routing problem: redirecting client requests to that node or routing layer
- a network partition can create two clusters and result in two clusters and two masters

## Multi Leader Replication

* How can we deal with conflict in this situation?


