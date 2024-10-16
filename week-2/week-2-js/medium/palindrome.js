/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if ([",", " ", "?", "!", "."].includes(str.charAt(i))) {
      i++;
      continue;
    } else if ([",", " ", "?", "!", "."].includes(str.charAt(j))) {
      j--;
      continue;
    }
    if (str.toLowerCase().charAt(i) !== str.toLowerCase().charAt(j)) {
      break;
    }
    i++;
    j--;
  }

  if (i == j) {
    return true;
  } else if (i > j) {
    return true;
  }

  return false;
}

// console.log(isPalindrome("r a ce,   ca r"));

module.exports = isPalindrome;
