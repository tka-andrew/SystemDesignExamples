#! /bin/bash

# Clean up
rm -rf host1/map_results/*.txt
rm -rf host2/map_results/*.txt
rm -rf map_results/*.txt
rm -rf reduce_results/*.txt

# Run the app on both hosts
HOST=host1 node map.js &
HOST=host2 node map.js &

# wait for them to be done
wait

# Run the shuffle step
HOSTS=host1,host2 node shuffle.js

# Run the reduce step
node reduce.js

# View the final result
cat reduce_results/results.txt