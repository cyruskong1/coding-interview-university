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


var numUniqueEmails = function(emails) {
  var uniqueEmails = 0;
  var storage = {};
   for(var i = 0; i < emails.length; i++) {
       let formattedEmail = formatEmail(emails[i]);
       formattedEmail = formattedEmail.slice(0,formattedEmail.indexOf("+")) + formattedEmail.slice(formattedEmail.indexOf("@"))
       if(!storage.hasOwnProperty(formattedEmail)) {
          storage[formattedEmail] = formattedEmail;
           uniqueEmails++; 
       }
   } 
    return uniqueEmails;
};

var formatEmail = function(email) {
	let newEmail = email;
	for(var i = 0; i < newEmail.length; i++) {
		if(newEmail[i] === ".") {
			newEmail = newEmail.substring(0, i) + newEmail.substring(i+1)
 		}
 		if(newEmail[i] === "@") {
			
 			return newEmail;
 		}
	}
}

//console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))

/* 
In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?
*/


const maxIncreaseKeepingSkyline = (grid) => {
	let largestSum = 0;
	let northSouthView = [];
	let eastWestView = [];

	// create eastWestView
		// find largestnum in each array
	for(var i = 0; i < grid.length; i++) {
		eastWestView.push(Math.max.apply(null, grid[i]))
	}

	//createNorthSouthView
		//find largestNum in each array's index 
}












