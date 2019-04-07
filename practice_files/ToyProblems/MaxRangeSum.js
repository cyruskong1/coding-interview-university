const MaxRangeSum = (array) => {
	let currentTotal = array[0];
	let largestTotal = array[0];

	for(let i = 1; i < array.length; i++) {
		if(currentTotal + array[i] > array[i]) {
			currentTotal += array[i];
		} else {
			currentTotal = array[i];
		}
		
		if(largestTotal < currentTotal) {
			largestTotal = currentTotal;
		}
		
	}
	return largestTotal;
}

// for testing
const AssertEqual = (expected, actual) => {
	if(expected === actual) {
		return "function passed"
	} else {
		return "expected " + expected + " but received " + actual + " instead"
	}
}

console.log(AssertEqual(16,MaxRangeSum([7, -3, -10, 4, 2, 8, -2, 4, -5, -2])))
console.log(AssertEqual(7,MaxRangeSum([-2,-3, 4, -1,-2,1,5,-3])))