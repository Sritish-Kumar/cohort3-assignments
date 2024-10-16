/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  // Your code here
  for (let index = 0; index < str.length; index++) {
    if (["a", "e", "i", "o", "u"].includes(str.toLowerCase().charAt(index))) {
      console.log(str.charAt(index));
      count++;
    }
  }

  console.log(count);

  return count;
}

countVowels("programming");

module.exports = countVowels;
