// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



// // my solution, based on some initial hints from stephen
// function reverseInt(n) {
//   if (n === 0) { return 0 }

//   const numIsNegative = Math.sign(n) === -1;
//   const reversedString = n.toString().split('').reverse().join('');
//   const reversedInt = parseInt(reversedString);

//   if (numIsNegative) {
//     return -reversedInt;
//   }

//   return reversedInt;
// }



// // stephen's solution
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
