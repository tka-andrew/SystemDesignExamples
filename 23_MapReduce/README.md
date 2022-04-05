# 23 Map Reduce
This demonstrates a map/reduce example.

## Note
- Majority of data processing tasks could be split up into two steps: Map step and Reduce step. 

- Map step -> transform data into key-value pairs

- One of the main things that this Map/Reduce model tries to accomplish is to handle faults and failures. 

- When we're talking about the Map/Reduce model, we almost always assume or require the Map function and the Reduce function be idempotent.

- MapReducce job comprised of 3 main steps:
    - Map step runs a map function on the various chunks of datasets and transforms these chunks into intermediate key-value pairs
    - Shuffle step reorganizes the intermediate key-value pairs such that pairs of the same key are routed to the same machine in the final step
    - Reduce step runs a reduce function on the newly shuffled key-value pairs and transform them into more meaningful data

- Examples of where an asynchronous MapReduce job could be used:
    - Find the most commonly-occuring errors in a web application
    - Aggregate North-American YouTube-channel view counts
