// find largest consecutive sum of x numbers
const findLargestConsecutiveSum = (array) => {
	let currentTotal = 0;
	let largestTotal = 0;

	for(let i = 0; i < array.length; i++) {
		currentTotal += array[i]
		if(largestTotal < currentTotal) {
			largestTotal = currentTotal;
		}
		else if(largestTotal > currentTotal) {
			currentTotal = 0;
		}
		else if(array[i] < 0) {
			currentTotal = 0;
		}
	}
	return largestTotal;
}

// console.log(findLargestConsecutiveSum([1,2,3,4]))
// console.log(findLargestConsecutiveSum([9,10, -1, 1,2,3])) 