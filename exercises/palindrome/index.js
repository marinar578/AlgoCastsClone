// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// // one solution (mine and vid's, in a way)
// const reverse = require('../reversestring/index');
// function palindrome(str) { return str === reverse(str) }

// // another solution - my solution with .every()
// // stephen demonstrated this solution to show that there is an easy to spot problem here - you only need to go through half of the array to detect if the word is a palindrome. it would be redunant to go through the whole array. can explain this to interviewer if asked.
function palindrome (str) {
  hasSameOppositeLetter = (currentValue, index) => {
    const backwardIndex = str.length - index - 1;
    return currentValue === str[backwardIndex];
  }

  return str.split('').every(hasSameOppositeLetter)
}

module.exports = palindrome;
