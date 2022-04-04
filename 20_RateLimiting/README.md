# 20 Rate Limiting
This demonstrates a simple rate limiting based on username, and the same user cannot send HTTP request within 5 seconds.

## Note
- Rate Limiting
    - The act of limiting the number of requests sent to or from a system
    - This is often used to prevent DoS attcks
    - Rate limiting can be enforced at IP-address level, user-account level or even region level

- DoS attack
    - Short for "denial-of-service attack"
    - An attack in which a malicious user tries to bring down a system

- DDoS attack
    - Short for "distributed denial-of-servcie attack"
    - A type of DoS attack in which the traffic flooding the target system comes from many different sources

- Redis is also often used for rate limiting

## To run this example
1. Open a terminal and run the server
    ```
    node server.js
    ```

2. Open another terminal and curl the api using username 'clement'
    ```
    curl -H 'user: clement' http://localhost:3000/index.html
    ```

3. Open another terminal and curl the api using username 'anthony'
    ```
    curl -H 'user: anthony' http://localhost:3000/index.html
    ```

4. You may try