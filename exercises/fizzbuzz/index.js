// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// mine before hints
// no hints needed, Stephen said this is a good way to do it and not to do anything fancy because it's too easy of a problem and interviewers might not like something too fancy here, they just want to see something simple and readable
function fizzBuzz(n) {
  let i = 1;

  while (i <= n) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
    i++
  }
}



module.exports = fizzBuzz;
