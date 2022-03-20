# 04 Network Protocols
This repo demonstrates a simple server that handles HTTP requests.

## To run this example
1. Open a terminal and run the server 
    ```
    node server.js
    ```
2. Open another terminal to try sending a GET request.
    ```
    curl localhost:3000/hello
    ```
3. Open another terminal to try sending a POST request.
    ```
    curl --header 'content-type: application/json' localhost:3000/hello --data '{"foo": "bar"}'
    ```