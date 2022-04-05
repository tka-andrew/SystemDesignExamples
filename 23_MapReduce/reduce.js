const mapReduce = require('./map_reduce.js');


function reduce(key, values) {
    const valuesCount = values.length;
    mapReduce.emitReduceResult(key, valuesCount);
}

const reduceInputs = mapReduce.getReduceInputs();
for (const input of reduceInputs) {
    reduce(input[0], input[1])
}