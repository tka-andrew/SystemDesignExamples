# 14 Specialized Storage Paradigm

## Note
- Blob Storage/Object storage
    - Usually people use this to store things like large binaries, images, or other static assets
    - Examples of blob storage providers:
        - Google Cloud Storage
        - Amazon S3

- Time Series Database
    - Optimized for storing and analyzing time-indexed data
    - Examples of Time Series Database:
        - InfluxDB
        - Prometheus
        - Graphite

- Graph database
    - Stores data following the graph data model
    - Data entries in a graph database can have explicitly defined relationships
    - With the underlying graph structure, graph database can perform complex queries on deeply connected data very fast. And hence graph databases are often preferred for social network applications.
    - Examples of Graph Database:
        - Neo4j
    - Neo4j graph database developed a graph query language called Cypher and it has been standardized to be used with other graph databases

- Spatial database
    - Optimized for storing and querying spatial data like locations on a map
    - Spatial databases rely on spatial indexes such as quadtrees to quickly perform spatial queries.
    - Quadtree
        - a tree data structure most commonly used to index 2D spatial data
        - each node in a quadtree has either zero children node or exactly 4 children nodes