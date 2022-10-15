const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let numberString = String(n);
    let arrResults = [];
    let arr = numberString.split("");
    for (let i = 0; i < arr.length; i++) {
        let tempArr = arr.slice();
        tempArr.splice(i, 1);
        let num = Number(tempArr.join(""));
        arrResults.push(num);
    }
    return Math.max(...arrResults)
}

module.exports = {
    deleteDigit
};
deleteDigit(154);