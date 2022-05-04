// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// mine
function matrix(n) {
  let results = [];
  
  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // loop from startCol to endCol
    for (let c = startCol; c <= endCol; c++) {
      results[startRow][c] = counter;
      counter++
    }
    startRow++

    // loop from startRow to endRow
    for (let r = startRow; r <= endRow; r++) {
      results[r][endCol] = counter;
      counter++
    }
    endCol--

    // loop from endCol to startCol
    for (let c2 = endCol; c2 >= startCol; c2--) {
      results[endRow][c2] = counter;
      counter++
    }
    endRow--

    // loop from endRow to startRow
    for (let r2 = endRow; r2 >= startRow; r2--) {
      results[r2][startCol] = counter;
      counter++
    }
    startCol++
  }

  return results;
}

module.exports = matrix;
