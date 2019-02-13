/*

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/


var containsDuplicate = function(nums) {
   var hash = {};
   for(var i = 0; i < nums.length; i++) {
    if(hash[nums[i]]) {
        return true;
    } else {
        hash[nums[i]] = 1;
    }
   }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))