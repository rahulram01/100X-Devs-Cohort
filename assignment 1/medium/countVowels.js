/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str1) {
  let vowels = ["a", "e", "i", "o", "u"];
  let string1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  count = 0;
  for (let i = 0; i < string1.length; i++) {
    if (vowels.includes(string1[i])) {
      count = count + 1;
    }
  }
  return count;
}
let count_char = countVowels("heybro");
console.log(count_char);
module.exports = countVowels;
