// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// recommends to stray towards iterative rather than regexp solution, safer in an interview setting

// stephen's second
function vowels(str) {
  // g makes sure you don't stop searching at the beginning of string - will attempt to find all vowels if there are multiple
  // i flag = case insensitive
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;


// // my first iterative solution
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let vowelCount = 0;

//   for (let letter of str.toLowerCase()) {
//     for (let vowel of vowels) {
//       if (vowel === letter) {
//         vowelCount ++;
//       }
//     }
//   }

//   return vowelCount;
// }


// // my second iterative solution
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let vowelCount = 0;

//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       vowelCount ++;
//     }
//   }

//   return vowelCount;
// }


// // my regexp solution
// function vowels(str) {
//   const exp = new RegExp('a|e|i|o|u', 'gi')
//   const array = [...str.matchAll(exp)];
//   return array.length
// }


// // stephen's first
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u']; // didn't call this 'vowels' because function name

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count ++;
//     }
//   }

//   return count;
// }


