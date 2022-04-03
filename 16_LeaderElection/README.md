# 16 Leader Election

## Note
- Leader Election = The process by which nodes in a cluster elect so-called "leader" among them.

- When implemented correctly, all nodes in the cluster know which one is the leader at any given time, and can elect a new leader if the leader dies.

- Consensus Algorithm = a type of complex algorithms used to have multiple entities agreed on a single data value

- Two popular consensus algorithms are Paxos and Raft


## To run this example
1. You need to install python3 and etcd3.

2. You need to pull the etcd docker image
    ```
    sudo docker pull bitnami/etcd:latest
    ```

3. Modify the permission of the DockerRunEtcd.sh
    ```
    chmod +x DockerRunEtcd.sh
    ```

4. Use the sh file to run etcd:
    ```
    ./DockerRunEtcd.sh
    ```

5. Open a new terminal and run the leader_election.py with server name: "server1"
    ```
    python3 leader_election.py server1
    ```

6. Open a new terminal and run the leader_election.py with server name: "server2"
    ```
    python3 leader_election.py server2
    ```

7. Open a new terminal and run the leader_election.py with server name: "server3"
    ```
    python3 leader_election.py server3
    ```

8. Open a new terminal and run the leader_election.py with server name: "server4"
    ```
    python3 leader_election.py server4
    ```

9. You may stop the leader node and observe what happen to the other nodes.