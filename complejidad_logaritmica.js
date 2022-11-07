/*
    O(log N) Complejidad cuadratica
*/
console.time('binarySearch');
function binarySearch(array, num, prefix = 0) {
    if (array.length === 1) return array;
    let mIndex = Math.floor(array.length / 2);
    let mNumber = array[mIndex];
    let newArr = [];
    let newPrefix = prefix;

    if (mNumber === num) {
        return prefix + mIndex;
    }
    if (num > mNumber) {
        newArr = array.slice(mIndex);
        newPrefix += mIndex;
    } else {
        newArr = array.slice(0, mIndex);
    }
    return binarySearch(newArr, num, newPrefix);
}
binarySearch([1, 2, 3, 4, 5, 6], 10)
console.timeEnd('binarySearch');


