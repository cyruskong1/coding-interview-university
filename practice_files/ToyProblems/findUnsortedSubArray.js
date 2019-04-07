const quickSort = nums => {
	if(nums.length <= 1) return nums;
	const pivot = nums[nums.length - 1];
	const lower = [];
	const higher = [];

	for(var i = 0; i < nums.length - 1; i++) {
		if(nums[i] < pivot) {
			lower.push(nums[i]);
		} else {
			higher.push(nums[i]);
		}
	}
	return [...quickSort(lower), pivot, ...quickSort(higher)];
}
var findUnsortedSubarray = function(nums) {
	var newNums = [...nums];
    var sortedArray = quickSort(nums);
    console.log(newNums, sortedArray)
    var subArray = [];
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] !== sortedArray[i]) {
        	console.log(nums[i], sortedArray[i])
            subArray.push(nums[i]);
        }
    }
    // console.log(subArray);
    return subArray.length;
};

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));