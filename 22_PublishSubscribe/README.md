# 22 Publish Subscribe Pattern
This demonstrates how publish subscribe pattern can be implemented using NodeJs.

## Note
- Publish/Subscribe Pattern
    - Publishers publish messages to special topic without caring about who will read those messages
    - Subscribers subscribe to topics and read messages coming through those topics
    - Pub/Sub system often guarantees:
        - at-least-once delivery
        - persistent storage
        - ordering of messages
        - replayability of messages

- Idempotent Operation = an operation that has the same ultimate outcome regardless of how many times it is performed

- Some examples of idempotent operations:
    - Updating a phone number in a bank account
    - Unsubscribing from a email list
    - Making a Slack channel private
    - Marking an email as read

- Some examples of non-idempotent operations:
    - Increasing like count
    - Adding a new post

- An example use case of Pub/Sub pipeline:
    - Facebook News Feed handles sharing new posts on relevant people's news feeds in real time

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
