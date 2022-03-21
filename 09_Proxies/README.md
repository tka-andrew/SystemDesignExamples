# 09 Proxies
This demonstrates a simple reverse proxy with the help of nginx.

## Notes
1. Forward Proxy = a server that sits between a client and servers, and acts on behalf of the client, typically used to mask the client's IP address.
2. Reverse Proxy = a server that sits between servers and clients, and acts on behalf of the
servers, typically used for logging, load balancing, or caching.


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

4. Open a terminal and run the server 
    ```
    node server.js
    ```
5. Open another terminal and run
    ```
    curl localhost:3000/hello
    ```

6. Run the following and observe the output of server.js
    ```
    curl localhost:8081/hello
    ```