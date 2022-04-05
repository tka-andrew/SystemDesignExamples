# Miscellaneous Notes
- A hot spot can occur in a system when:
    - A sharding key for a set of databases is suboptimal
    - A hashing function for a set of destination servers is suboptimal
    - The system's workload is naturally skewed

- Some legimate use cases of proxies:
    - load balancing requests across servers
    - masking a client's identity
    - logging client information
    - caching server responses

- Vertical Scaling vs Horizontal Scaling
    - Vertical Scaling keeps your existing infrastructure but adds computing power to the existing machines
    - Horizontal Scaling simply adds more instances of machines without improving the existing specifications