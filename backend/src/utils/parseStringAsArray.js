module.exports = function parseStrintAsArray(arrayAsString) {
    return arrayAsString.split(',').map(str => str.trim());
}