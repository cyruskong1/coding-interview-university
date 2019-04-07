// 	// check if array has length less than 2
// 		// if true return it

// 	// create mid point
// 	// create low array
// 	// create a high array

// 	// return merge operation of low and high

// 	// create an empty array
// 	// if low and high has a length more than 0
// 	// 	compare two values
// 	// 	push into new array lesser value
// 	// return results array concatenated with any left over arrays

const mergeSort = array => {
  if (array.length < 2) return array;

  const middle = Math.floor(array.length / 2);
  const lower = array.slice(0, middle);
  const higher = array.slice(middle);

  return merge(mergeSort(lower), mergeSort(higher));
};

const merge = (lower, upper) => {
  let newArray = [];
  while (lower.length && upper.length) {
    if (lower[0] < upper[0]) {
      newArray.push(lower.shift());
    } else {
      newArray.push(upper.shift());
    }
  }
  return newArray.concat(lower, upper);
};

console.log(mergeSort([9, 1, 4, 2]));
