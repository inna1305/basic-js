const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
    let resultArr = arr.slice();


    for (let i = 0; i < resultArr.length; i++) {
        let currentElement = resultArr[i];


        if (currentElement === '--discard-next') { //если в исх массиве нет элемента то он не считается и ничего не делать с ним
            if (resultArr[i+2] === '--double-prev' || resultArr[i+2] === '--discard-prev') {
                resultArr.splice(i, 3);
                return resultArr;
            }
            if (i < arr.length - 1) {
                resultArr.splice(i, 2);
            } else {
                resultArr.splice(i, 1);
            }

        } else if (currentElement === '--discard-prev') { //слайсом скопировать массив в новый массив, сплайсом вырезать два элемента
            if (i > 0) {
                resultArr.splice(i - 1, 2);
            } else {
                resultArr.splice(i, 1);
            }


        } else if (currentElement === '--double-next') {
            if (i < arr.length - 1) {
                resultArr.splice(i, 1, arr[i + 1]);
            } else {
                resultArr.splice(i, 1);
            }


        } else if (currentElement === '--double-prev') {
            if (i > 0) {
                resultArr.splice(i, 1, arr[i - 1]);
            } else {
                resultArr.splice(i, 1);
            }
        }
    }
        return resultArr;
}

module.exports = {
    transform
};
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
//Функция должна выдать Error сообщение with, 'arr' parameter must be an instance of the Array!если arrэто не Array.

