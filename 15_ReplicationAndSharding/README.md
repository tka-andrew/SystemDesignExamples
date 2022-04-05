# 15 Replication and Sharding
This demonstrates how sharding can be implemented using a proxy.

## Note
- Replication = the act of duplicating data from one database server to another.

- Example of reasons to replicate a database in a system:
    - To make the system more fault-tolerant
    - To move data closer to a set of clients so as to improve latency for those clients

- Sharding = the act of splitting a database into multiple pieces called shards.

- Some examples of sharding strategies:
    - Sharding based on a client's region
    - Sharding based on a customer's username
    - Sharding based on the type of data stored

## To run this example
1. Open a terminal and run the server which listens to port 3000:
    ```
    DATA_DIR=aedb_data_0 PORT=3000 node aedb.js
    ```

2. Open another terminal and run the server which listens to port 3000:
    ```
    DATA_DIR=aedb_data_1 PORT=3001 node aedb.js
    ```

3. Open one more terminal to run the aedb_proxy.js
    ```
    node aedb_proxy.js
    ```

4. Open a terminal and try to curl different endpoint
    ```
    curl --header 'Content-type: application/json' --data '{"data": "This is some data."}' localhost:8080/a
    curl --header 'Content-type: application/json' --data '{"data": "This is some data."}' localhost:8080/b
    curl --header 'Content-type: application/json' --data '{"data": "This is some data."}' localhost:8080/c
    ```