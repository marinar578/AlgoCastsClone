// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// stephen's second - with recursion - his solution
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }

  // stair.length <= row ? stair += '#' : stair += ' ';

  // const add = stair.length <= row ? '#' : ' '

  stair += stair.length <= row ? '#' : ' ';

  steps(n, row, stair);
}

module.exports = steps;


// // my first
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = '';

//     for (let p = 0; p < i; p++) {
//       str += '#'
//     }

//     for (let s = i; s < n; s++) {
//       str += ' ';
//     }

//     console.log(str)
//   }
// }


// // stephen's first
// function steps(n) {
//   for (let row = 0; row < n; row++) {
// // don't name 'stair' step' because 'step' is too close to function name of 'steps'
//     let stair = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }


// // stephen's second - with recursion - my solution (with his hints and pseudocode)
// function steps(n, row = 0, str = '') {
//   if (row === n) {
//     return;
//   }

//   if (str.length === n) {
//     console.log(str);

//     steps(n, row + 1) // <-- should add a return here or after because don't need to continue with logic if this if statement has been met. if using return, can get rid of else here (to make more readable?)
//   } else {
//     if (str.length <= row) {
//       str += '#';
//     } else {
//       str += ' ';
//     }

//     steps(n, row, str)
//   }
// }

