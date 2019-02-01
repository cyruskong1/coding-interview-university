	// check if array has length less than 2
		// if true return it

	// create mid point
	// create low array
	// create a high array

	// return merge operation of low and high
const mergeSort = array => {

	if(array.length < 2) return array;

	const midPoint = Math.floor(array.length / 2);
	const lowArr = array.slice(0, midPoint);
	const highArr = array.slice(midPoint);

	return merge(mergeSort(lowArr), mergeSort(highArr)); 
}

	// create an empty array
	// if low and high has a length more than 0
	// 	compare two values
	// 	push into new array lesser value
	// return results array concatenated with any left over arrays
const merge = (low, high) => {
	const sortedArray = [];
	while(low.length && high.length) {
		if(low[0] < high[0]) {
			sortedArray.push(low.shift());
		} else {
			sortedArray.push(high.shift());
		}
	}
	return sortedArray.concat(low, high);
}


console.log(mergeSort([9,1,4,2]))