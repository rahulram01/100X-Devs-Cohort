/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(num) {
  let init_num = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > init_num) {
      init_num = num[i];
    }
  }
  return init_num;
}

module.exports = findLargestElement;
