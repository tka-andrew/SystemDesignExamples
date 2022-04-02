# 04 Network Protocols
This repo demonstrates a simple server that handles HTTP requests.

## Note
- Modern internet effectively runs on Internet Protocol (IP).

- An IP packet is a fundamental unit of data that is sent from one machine to another.

- An IP packet has a header that stores the source and destination IP address, as well as IP version.

- There are 2 types of famous IP version: IPv4 and IPv6.

- IP packets are only 2^16 bytes, and this is definitely not enough. And splitting the data into multiple IP packets is not a good solution because it is difficult to make sure the IP packets are received in correct sequence. This is where Transmission Control Protocol (TCP) comes into play. 

- TCP builds on top of IP. As compared to IP packet, a TCP packet has an extra TCP header which has the information about ordering of packet.

- When a machine communicates with another machine over TCP, it is first going to create a TCP connection with the destination computer, and this is called a handshake. Once the connection is established, both machines can freely send data to one another. 

- TCP lacks a roboust framework that software engineers can use to really define meaningful

- HTTP stands for HyperText Transfer Protocol and it is built on top of TCP. HTTP basically provides the request response paradigm, and with it we can forget about TCP and IP.

- Refer to the http_request_example.js to see the schema of HTTP request and HTTP response.

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