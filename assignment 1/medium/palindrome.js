/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str1) {
  string1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let string2 = str1
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}
let palindrome = isPalindrome("A man a plan a canal Panama");
console.log(palindrome);
module.exports = isPalindrome;
