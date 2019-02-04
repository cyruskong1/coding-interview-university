// var numUniqueEmails = function(emails) {
//   var uniqueEmails = 0;
//   var storage = {};
//    for(var i = 0; i < emails.length; i++) {
//        let formattedEmail = formatEmail(emails[i]);
//        formattedEmail = formattedEmail.slice(0,formattedEmail.indexOf("+")) + formattedEmail.slice(formattedEmail.indexOf("@"))
//        if(!storage.hasOwnProperty(formattedEmail)) {
//           storage[formattedEmail] = formattedEmail;
//            uniqueEmails++; 
//        }
//    } 
//     return uniqueEmails;
// };

// var formatEmail = function(email) {
// 	let newEmail = email;
// 	for(var i = 0; i < newEmail.length; i++) {
// 		if(newEmail[i] === ".") {
// 			newEmail = newEmail.substring(0, i) + newEmail.substring(i+1)
//  		}
//  		if(newEmail[i] === "@") {
			
//  			return newEmail;
//  		}
// 	}
// }

//console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))


// Optimal solution

const numUniqueEmails = (array) => {
  var uniqueEmails = [];

  for(var i = 0; i < array.length; i++) {
    var domain = array[i].slice(array[i].indexOf("@"));

    var removePlus = array[i].slice(0, "+");

    var removePeriod = removePlus.replace(/\./g, "");

    var final = removePeriod + domain;

    if(!uniqueEmails.includes(final)) {
      uniqueEmails.push(final);
    }
  }
  return uniqueEmails.length;
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))
