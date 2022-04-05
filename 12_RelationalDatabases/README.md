# 12 Relational Databases

## Note
- Relationaal database = a type of structured database that stores data in tabular format, and most of the relational databases support SQL

- SQL database = any database that supports SQL and must use ACID transactions.

- The 3 primary entities in a SQL database:
    - Tables
    - Rows
    - Columns

- ACID transation = a type of database transactin that has 4 important properties:
    - Atomicity = the operations should be either succeed or faile
    - Consistency = the transaction cannot bring the database to an invalid state
    - Isolation = the execution of multiple transactions concurrently will have the same effect as if they had been exectuted sequentially
    - Durability = any commited transaction is written to non-volatile memory

- Database Index = a special auxiliary data structure that allows your relational database to perform read queries faster, but with the downside of slightly longer time taken for when you write into your database.
