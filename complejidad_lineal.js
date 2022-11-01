/*
    O(N) Complejidad Lineal
*/
const generateRandomArray = require('./random_array');
const array = generateRandomArray(100000);

function printArray(array) {
    console.time('Time');
    array.forEach(element => element);
    console.timeEnd('Time');
}

printArray(array);

