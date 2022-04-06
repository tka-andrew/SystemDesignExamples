# 11 Hashing

## Note
- To ensure every time the load balancer routes the same client to the same server (so that the cache of the client which is stored in the server can be retrieved), a hashing function is needed for the load balancer.

- In practice, you are likely never gonna be writing your own hashing function. You are just gonna use some pre-made industry-grade hashing function.\

- Normally you have to do rehashing if you add or remove some servers. Hence, Consistent Hashing and Rendezvous Hashing are introduced to solve this problem.

- Consistent Hashing
    - Consistent hashing solves the problem of rehashing by providing a distribution scheme which DOES NOT directly depend on the number of servers.
    - Consistent Hashing is a distributed hashing scheme that operates independently of the number of servers or objects in a distributed hash table by assigning them a position on an abstract circle, or hash ring. 
    - This allows servers and objects to scale without affecting the overall system.
    - Consistent Hashing helps in preventing hot spots
    - For more detailed explanation, refer to [this](https://medium.com/system-design-blog/consistent-hashing-b9134c8a9062).

- Rendezvous Hashing
    - Rendezvous Hashing also solves the problem of rehashing
    - Rather than picking a single server, each key generates a randomly sorted list of servers and chooses the first server from the list. 
    - For example, let's say the hashing algorithm results in such mappings:
        - key a - [S1, S2, S3], 
        - key b - [S2, S3, S3],
        - key c - [S3, S1, S2]
    - For the case above, a will be mapped to S1, b will be mapped to S2 and c will be mapped to S3.
    - If let's say S2 is down, then a will still be mapped to S1, c will still be mapped to S3, and then only b will be mapped to different server, which is S3 since the first option S2 is no longer available.
    - For more detailed explanation, refer to [this](https://randorithms.com/2020/12/26/rendezvous-hashing.html).