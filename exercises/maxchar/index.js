// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// // my long, probably extra expensive solution, attempted without hints except for hint about making an object. this goes through the object more times than it has to. see stephen's solution below for a better way.
// function maxChar(str) {
//   let frequencies = {};

//   str.split('').forEach((letter) => {
//     if (frequencies[letter]) {
//       frequencies[letter] ++
//     } else {
//       frequencies[letter] = 1
//     }
//   })

//   maxValue = Math.max(...Object.values(frequencies))

//   for (const key in frequencies) {
//     if (frequencies[key] === maxValue) return key;
//   }
// }



// stephen's solution
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // 'of' used to iterate through arrays or strings
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  // 'in' used to iterate through objects (they don't use 'o' for objects, they use 'i')
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
