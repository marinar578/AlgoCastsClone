// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// //  my solution
// function anagrams(stringA, stringB) {
//   const strippedA = stringA.replace(/[^\w]/g,"").toLowerCase();
//   const strippedB = stringB.replace(/[^\w]/g,"").toLowerCase();

//   if (strippedA.length != strippedB.length) {
//     return false;
//   }

//   const stringAMap = {};
//   const stringBMap = {};
//   let isAnagram = true;

//   for (let letter of strippedA) {
//     stringAMap[letter] = stringAMap[letter] + 1 || 1;
//   }

//   for (let letter of strippedB) {
//     stringBMap[letter] = stringBMap[letter] + 1 || 1;
//   }

//   for (let key in stringAMap) {
//     if (stringBMap[key] !== stringAMap[key]) {
//       isAnagram = false;
//       return;
//     }
//   }

//   return isAnagram;
// }


// //  stephen's first solution:
// //  use a helper function to not be repetitive

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};
//   const strippedStr = str.replace(/[^\w]/g,"").toLowerCase();

//   for (let letter of strippedStr) {
//     charMap[letter] = charMap[letter] + 1 || 1;
//   }

//   return charMap;
// }



//  stephen's second solution
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  const strippedStr = str.replace(/[^\w]/g,"").toLowerCase();
  return strippedStr.split('').sort().join('');
}

module.exports = anagrams;
