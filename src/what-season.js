const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) { //если аргумент не был передан
    return 'Unable to determine the time of year!';
  }




//if (date.hasOwnProperty('toString')) throw new Error('Invalid date!')

  if (isNaN (Date.parse(date)) ||
      date === undefined || //
      ! (date instanceof Date) || date.constructor.name !== "Date"
      || Object.keys(date).length > 0)
      {
    throw new Error('Invalid date!');
  }
  let month = date.getMonth();
  if (month  <= 1 || month === 11) {
    return 'winter';
  } else if (month > 1 && month <= 4) {
    return 'spring';
  } else if (month <= 7) {
    return 'summer';
  } else if (month <= 10) {
    return 'fall';
  }
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

getSeason(new Date(2020, 2, 31));
let t = new Date;
console.log(t.hasOwnProperty('toString'));

//фргумет переденный в функцию это то же что вызвать заново тот же параметр
const fakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};
Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

console.log(fakeDate.hasOwnProperty('toString'))
console.log(Object.keys(t));
