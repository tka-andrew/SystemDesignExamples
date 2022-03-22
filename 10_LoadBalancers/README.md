# 09 Proxies
This demonstrates a simple load balancer with the help of nginx.

## Note
1. Load balancer is a type of reverse proxy that distributes traffic across servers.

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