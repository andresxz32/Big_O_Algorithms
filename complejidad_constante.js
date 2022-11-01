/*
    O(1) Complejidad Constante
*/
const generateRandomArray = require('./random_array');
const array = generateRandomArray(100000);

function getLastItemFromArray(array) {
    console.time('Time');
    const length = array.length;
    const lastItem = array[length - 1];
    console.timeEnd('Time');
    return lastItem
}

getLastItemFromArray(array);
