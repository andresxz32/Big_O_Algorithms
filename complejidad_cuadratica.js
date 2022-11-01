/*
    O(N ^ 2) Complejidad cuadratica
*/

function catArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                console.log(`Miau! ${i} element is equals to ${j} element`)
            }
        }
    }
}