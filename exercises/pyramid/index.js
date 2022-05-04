// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// stephen's recursive
function pyramid(n, row = 0, level = '') {
  if (n === row) {
    return;
  }

  const columns = 2 * n - 1;

  if (columns === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);

  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length ) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;


// // my first
// function pyramid(n) {
//   for (row = 0; row < n; row++) {
//     let level = '';
//     const colNum = (2 * n) - 1;

//     for (col = 0; col < colNum; col++) {
//       if (col >= (n - row - 1) && col < (n + row)) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }



// // mine refactored
// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     const colNum = (2 * n) - 1;

//     for (let col = 0; col < colNum; col++) {
//       level += 
//         (col >= (n - row - 1) && col < (n + row)) ? 
//         '#' : 
//         ' '
//     }
//     console.log(level);
//   }
// }


// // stephen's first
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }


// // my recursive
// function pyramid(n, row = 0, level = '') {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   if (n === row) {
//     return;
//   }

//   const columns = 2 * n - 1;

//   if (columns === level.length) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   level += (midpoint - row <= level.length && midpoint + row >= level.length ) ?
//     '#' : ' ';

//   pyramid(n, row, level);
// }
