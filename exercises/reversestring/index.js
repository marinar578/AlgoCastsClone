// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// // one solution from vid
// function reverse(str) {
//   const arr = str.split('')
//   arr.reverse()
//   return arr.join('')
// }



// function reverse(str) { 
//   return str
//     .split('')
//     .reverse()
//     .join('') 
// }



// // second solution from vid
function reverse(str) {
  let reversed = '';

  // es2015 syntax
  for (let character of str) {
    reversed = character + reversed;
    // debugger;
  }

  return reversed;
}



// // he recommends to avoid using the regular for loop syntax because of all the place you can make a mistake:
// function reverse(str) {
//   let reversed = ''

//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }



// // he recommends to avoid using the regular for loop syntax:
// function reverse(str) {
//   let reversed = ''

//   for (var i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }

//   return reversed;
// }



// // avoid using regular loop syntax if possible (know language well)
// function reverse(str) {
//   let reversed = ''
//   let i = 0

//   while (i < str.length) {
//     reversed = str[i] + reversed;
//     i++;
//   }

//   return reversed;
// }



// // fancy shmancy, shows good knowledge of js:
// reduce function takes a function and a starting value as parameters. return value of function will become new starting value for each iteration in which function runs. function parameter takes the new starting value and the element of the array as it loops through.
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '')
// }



// // make it nice:
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '')
// }



// // my original solution
// function reverse(str) {
//   const strArr = str.split('')
//   let reversedStr = ''

//   strArr.forEach(chr => reversedStr = chr + reversedStr)

//   return reversedStr;
// }



// reverse('apple');

module.exports = reverse;
