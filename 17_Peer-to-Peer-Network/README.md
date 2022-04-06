# 17 Peer-To-Peer Network

## Note
- Introduction: 
    - In a centralized network, a simple loss of connection between the server and clients is enough to cause a failure.
    - But in Peer-To-Peer Networks, the connections between every node must be lost in order to cause a data sharing failure.


- Peer-To-Peer Network
    - A collection of machines referred to as peers that divide a workoad between themselves to presumably complete the workoad faster
    - For example, in a centralised solution, let's say there are 1000 machines, and the main machine wants to transfer a 5GB file to the rest of 999 machines, it will take very long time to do so. However, if the file is splitted into 1000 chunks, with a 5MB per chunk and every chunk send to a machine, then the peer-to-peer network allows the machines to exchange the chunk until every machine get the complete one. With this mechanism, it will much faster than sending the file one by one to all machines.
    - For a peer-to-peer netowrk to function, there are 2 ways:
        - With a central database/tracker that will tell all the nodes where they should get the rest of the chunks
        - Using gossip protocol (also called epidemic protocol), where the nodes to each other by themselves in a uncoordinated manner in a cluster

- A popular use case for a peer-to-peer network is sending a large file to thousands of machines at once. 

- The following are the properties of peer-to-peer systems:
    - They're able to use a lot more of a network's bandwidth (more data can be sent and received at one time)
    - They remove throughput bottlenecks that centralized solutions have