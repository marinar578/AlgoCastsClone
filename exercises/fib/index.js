// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // with memoization
function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    } else {
      const result = fn.apply(this, args);
      cache[args] = result;
      return result;
    }
  }
}

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);

// // technically, to keep it truly recursive, everything should be defined and called in the following way:
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;


// // my recursive solution
// // this is an EXPONENTIAL time solution: O(2^n)
// function fib(n) {
//   if (n === 0) {
//     return 0;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   return fib(n - 1) + fib(n - 2);
// }


// // my iterative solution
// // runtime complexity = O(n)
// function fib(n) {
//   let result = [];

//   for (let i = 0; i <= n; i++) {
//     if (i === 0) {
//       result.push(0);
//     } else if (i === 1) {
//       result.push(1);
//     } else (
//       result.push(result[i-1] + result[i-2])
//     )
//   }

//   return result[n];
// }


// // stephen's first solution
// function fib(n) {
//   let result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }


// // stephen's recursive solution
// // this is an EXPONENTIAL time solution: O(2^n)
// function fib(n) {
//   // if (n < 2) {
//   //   return n;
//   // }

//   // return fib(n - 1) + fib(n - 2);
//   return n < 2 ? n : fib(n - 1) + fib(n - 2);
// }


