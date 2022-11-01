function generateRandomArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * length));
}

module.exports = generateRandomArray;