# 22 Publish Subscribe Pattern
This demonstrates how publish subscribe pattern can be implemented using NodeJs.

## To run this example
1. Open a terminal and run the server:
    ```
    node server.js
    ```

2. Open another terminal and run a subscriber node that subscribes to TOPIC_ID=stock_prices:
    ```
    TOPIC_ID=stock_prices node subscriber.js
    ```

3. Open another terminal and run a subscriber node that subscribes to TOPIC_ID=news:
    ```
    TOPIC_ID=news node subscriber.js
    ```

4. Open another terminal and run a publisher node to keep publishing to the stock_prices topic:
    ```
    (for i in `seq 1 10000`; do sleep 1; echo New Stock Price;done) | NAME=STOCK_BROKER TOPIC_ID=stock_prices node publisher.js
    ```

5. You will notice that only the subscriber that subscribe to the corresponding topic will receive the message.
