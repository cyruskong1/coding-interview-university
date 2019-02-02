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
       formattedEmail = formattedEmail.slice(0,formattedEmail.indexOf("+"))
       console.log('formattedEmail', formattedEmail)
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
			console.log('newEmail', newEmail)
 		}
 		else if(newEmail[i] === "@") {
 			return newEmail;
 		}
	}
 return newEmail;
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))