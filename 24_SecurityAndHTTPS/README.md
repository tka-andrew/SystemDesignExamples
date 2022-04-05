# 24 Security and HTTPS
This demonstrates a simple encryption using a npm package called aes256

## Note
- In modern day systems, most machines communicate with one another over HTTP.

- Actually, when you have 2 machines communicating over HTTP, any malicious actor who is well trained can hijack the communication channel and then intercept the IP packet. This is known as a Man-In-The-Middle attack.

- Symmetric Encryption = a type of encryption that relies on a single key on both encrypt and decrypt data

- Since Symmetric Encryption relies only on a key, and the key has to be shared between the two parties. Hence, if the malicious actor able to intercept the IP packet, he still can get the key and encrypt decrypt the message. Hence, there is problem with symmetric encryption also.

- Asymmetric Encryption = also known-as public-key encryption, and it relies on two keys (a public key and a private key) - to encrypt and decrypt data

- Asymmetric Encryption is slower than Symmetric Encryption, since it requires 2 keys.

- HTTPS is an extension of HTTP, that runs on top of Transport Layer Security (TLS)

- SSL Certificate = a digital certificate that contains server's public key

- Certificate Authority = a trusted entity that signs SSL Certificate

- TLS hanshake process
    - The client sends a client hello (a string of random bytes) to the server
    - The server responds with a server hello (another string of random bytes) as well as its SSL certificate which contains the public key
    - The client verifies that the certificate was issued by a certificate authority and sends a premaster secret (another string of random bytes encrypted with the server's public key) to the server
    - The client and the server use the client hello, the server hello, and the premaster secret to then generate the same symmetric-encryption session keys, to be used to encrypt and decrypt all data communicated through the remainder of connection

- A typical TLS handshake can be best summarized as:
    - Generating symmetric-encryption session keys, to be used by both the server and the client to encrypt and decrypt future communications

## To run this example
1. 
    ```
    node encryption.js
    ```