# 08 Caching
This repo demonstrates a simple server with caching ability.

## Note
- The main objective of caching is to reduce latency in retrieving data.

- Cache Eviction Policy = The policy by which values get evicted or removed from a cache. Popular cache eviction policies include LRU (least-recently used), FIFO (first in first out) and LFU (least-frequently used)

- Content Delivery Network (CDN) = a third party service that acts like a cache for your servers. Two of the most popular CNDs are Cloudfare and Google Cloud CDN. With CDN having servers all around the world, the latency for the clients to retrieve the data from the CDNs will be much lower than from your server in different country.

- Caching is less likely to be advisable if accessed data is frequently updated.

- Some examples of system-design scenarios where you would likely to use a cache:
    - Users accessing static content on the home page of a website
    - Users acessing articles on an online-newspaper website

## To run this example
1. Open a terminal and run the server 
    ```
    node server.js
    ```
2. Open a browser and browses localhost:3001/withcache/index.html

3. Open a browser and browses localhost:3001/nocache/index.html

4. Repeat step 2 and 3 and pay attention to the loading time.