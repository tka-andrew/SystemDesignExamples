# 10 Load Balancers
This demonstrates a simple load balancer with the help of nginx.

## Note
- Load balancer is a type of reverse proxy that distributes traffic across servers.

- A load balancer has a server-selection strategy that determines the load balancer should distribute the traffic to which server.

- Some common server-selection strategies for load balancers:
    - Client-IP based
    - Round-robin
    - Server-health-based

- Nginx is an example of load balancing software.

## To run this example
1. Install the open source NGINX from the [official website](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#installing-prebuilt-ubuntu-packages).

2. Run NGINX with -c argument to specify the directory of the nginx.conf
    ```
    sudo nginx -c YourAbsolutPath/nginx.conf
    ```

3. You may run the following command to check whether your nginx is listening to the correct port
    ```
    sudo netstat -tulpn
    ```

4. Open a terminal and run a server that listens to PORT 3000
    ```
    PORT=3000 node server.js
    ```
5. Open another terminal and run a server that listens to PORT 3001
    ```
    PORT=3001 node server.js
    ```

6. Open one more terminal and run the following commands a few times
    ```
    curl localhost:8081/hello
    ```