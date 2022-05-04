// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// stephen's second solution
function chunk(array, size) {
  let index = 0; // 2
  const chunked = []; // [[1,2],[]]

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}


// // stephen's first solution
// function chunk(array, size) {
// // create empty array to hold chunks, called "chunked"
//   const chunked = [];

// // for each element in the chunked array
//   for (let element of array) { 
// //  retrieve the last element in chunked
//     const last = chunked[chunked.length - 1];
// //  if last element does not exist or if its length equals the chunk size
//     if (!last || last.length === size) {
// //    push a new chunk into chunked with the current element
//       chunked.push([element]);
// //  else, add the current element into the chunk
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }


// // my first solution
// function chunk(array, size) {
//   let newArr = []
//   let smallArr = []

//   array.forEach((num, index) => {
//     const atFirstIndex = index === 0;
//     const atSubsetIndex = index % size === 0
//     const atFinalIndex = index === array.length - 1

//     if (!atFirstIndex && atSubsetIndex) {
//       newArr.push(smallArr);
//       smallArr = [];
//     }

//     smallArr.push(num);

//     if (atFinalIndex){
//       newArr.push(smallArr);
//     }
//   });

//   return newArr;
// }

// chunk([1, 2, 3, 4], 2)

module.exports = chunk;
