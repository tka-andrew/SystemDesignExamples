# 03 Client-Server Model

## Note
- When our browser surfs "www.google.com", it is actually making a DNS query and the DNS will return the ip address of the server that serves us the Google.com. 

- A server listens for requests on specific ports.

- IP address = an address given to each machine connected to the public Internet.

- IPv4 addresses consist of four numbers separated by dots and all the four numbers are between 0 and 255.

- localhost IP address = 127.0.0.1

- IP address of private network = 192.168.x.y (For example, every device that connected to the same private wifi network will have the same prefix)

- Any machine that has a distinct IP address has 2^16 ports in total (between 0 and 65535).

- Ports 0-1023 are reserved for system ports and should not be used by user-level processes.

- If a client is trying to speak to a server using HTTP protocol, it's always going to use port 80.

- Some ports with pre-defined uses:
    - 22: Secure Shell
    - 53: DNS lookup
    - 80: HTTP
    - 443: HTTPS