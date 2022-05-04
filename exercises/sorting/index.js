// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // don't need to visit the last element of the array
    for (let j = 0; j < arr.length - i - 1; j++) {
      // // don't need to assign these if the first element isn't greater
      // let firstElement = arr[j];
      // let secondElement = arr[j + 1];
      if (arr[j] > arr[j + 1]) {
        let lesser = arr[j + 1]
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (i !== indexOfMin) {
      let greater = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = greater;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const midpoint = Math.floor(arr.length/2)

  const array1 = arr.slice(0, midpoint);
  const array2 = arr.slice(midpoint);

  return merge(mergeSort(array1), mergeSort(array2));
}

function merge(left, right) {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(left).concat(right);
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
