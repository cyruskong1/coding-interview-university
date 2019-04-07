// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const AssertEqual = (expected, actual) => {
	if(expected === actual) {
		return "function passed"
	} else {
		return "expected " + expected + " but received " + actual + " instead"
	}
}

const twoNumSum = (arr, k) => {
	const sortedArr = arr.sort((a,b) => a - b);
	let begin = 0;
	let end = sortedArr.length - 1;
	while(begin < sortedArr.length && end >= 0) {
		let sum = sortedArr[begin] + sortedArr[end];
		console.log('sum', sum, 'begin',sortedArr[begin], 'end', sortedArr[end])
		if(sum < k) {
			begin++;
		} else if(sum > k) {
			end--;
		} else {
			return true
		}
	}
	return false;
}

console.log(AssertEqual(true ,twoNumSum([10,7,3,2,4,8],17)))