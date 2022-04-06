# 18 Polling and Streaming
This demonstrates the differences between Polling and Streaming.

## Note
- Polling = the act of fetching data regularly at an interval of time

- Streaming = the act of continuously getting a feed of information from server by keeping an open connection between the client and the server

- Examples of streaming:
    - Sending and receiving messages on Slack
    - Watching videos on YouTube

## To run this example
1. Open a terminal and run the server:
    ```
    node server.js
    ```

2. Open another terminal and run a client with MODE=stream and NAME=Clement:
    ```
    MODE=stream NAME=Clement node client.js
    ```

3. Open another terminal and run a client with MODE=poll and NAME=Anthony:
    ```
    MODE=poll NAME=Anthony node client.js
    ```

4. Type something on the client terminals such as "Hi Anthony, how are you?" and "Hi Clement, I am fine." and observe the output.