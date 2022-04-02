# 11 Hashing

## Note
- To ensure every time the load balancer routes the same client to the same server (so that if the cache of the client which is stored in the server can be retrieved), a hashing function is needed for the load balancer.

- In practice, you are likely never gonna be writing your own hashing function. You are just gonna use some pre-made industry-grade hashing function.

- Algorithms based on consistent hashing minimize the number of requests that get forwarded to different servers when new servers are added or when existing servers are brought down.

- On the other side, Rendezvous Hashing Algorithm is quite similar to consitent hashing, but rather than picking a single server, each key generates a randomly sorted list of servers and chooses the first server from the list. 

- For example, let's say the hashing algorithm results in such mappings:
    - key a - [S1, S2, S3], 
    - key b - [S2, S3, S3],
    - key c - [S3, S1, S2]

- For the case above, a will be mapped to S1, b will be mapped to S2 and c will be mapped to S3.

- If let's say S2 is down, then a will still be mapped to S1, c will still be mapped to S3, and then only b will be mapped to different server, which is S3 since the first option S2 is no longer available.