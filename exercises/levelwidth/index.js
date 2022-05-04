// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
// my solution based on Stephen's hints
  
  const counters = [0];

  const arr = [root, 's'];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      arr.push('s');
      counters.push(0);
    } else {
      counters[counters.length - 1]++;
      arr.push(...node.children);
    }
  }

  return counters;












// my first solution
    // let level = root.children;
    // const result = [1];

    // while (level.length) {
    //   const nextLevel = []
    //   let counter = 0;

    //   for (node of level) {
    //     counter++;
    //     if (node.children) {
    //       nextLevel.push(...node.children)
    //     }
    //   }

    //   level = nextLevel;
    //   result.push(counter);
    // }

    // return result;
}

module.exports = levelWidth;
