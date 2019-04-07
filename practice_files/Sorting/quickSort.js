// designate a pivot point - last item
// create a lower and a higher array
// loop through array and compare each item to the value at pivot point
// if less, push to lower array, if greater push to higher array
// return concated lower mid and higher array

const quickSort = array => {

	if(array.length <= 1) {
		return array;
	}

	const pivot = array[array.length - 1];
	const lower = [];
	const higher = [];

	for(let i = 0; i < array.length - 1; i++) {
		if(array[i] < pivot) {
			lower.push(array[i]);
		} else {
			higher.push(array[i]);
		}
	}
	return [...quickSort(lower), pivot, ...quickSort(higher)];
}

console.log(quickSort([9, 1, 4, 2]));