# 05 Storage
This repo demonstrates a simple server that allows us to store data in memory and on disk.

## To run this example
1. Open a terminal and run the server 
    ```
    node server.js
    ```
2. Open another terminal and try saving data in memory.
    ```
    curl localhost:3001/memory/foo --header 'Content-Type: application/json' --data '{"data": "There is some data in memory."}'
    ```
3. Open another terminal to try retrieving data stored in memory.
    ```
    curl localhost:3001/memory/foo -w "\n"
    ```
4. Open another terminal and try saving data on disk.
    ```
    curl localhost:3001/disk/foo --header 'Content-Type: application/json' --data '{"data": "There is some data on disk."}'
    ```
5. Open another terminal to try retrieving data stored on disk.
    ```
    curl localhost:3001/disk/foo -w "\n"
    ```
6. You may restart the server and repeat step 3 and step 5 to observe the difference.