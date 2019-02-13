const { AssertEqual } = require("./AssertEqual");


/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
*/

function scramble(str1, str2) {
 //code me
 var result ={};
 var str2Occurrences = {}
 
 for(var i = 0; i < str2.length; i++) {
  if(!str2Occurrences.hasOwnProperty(str2[i])) {
    str2Occurrences[str2[i]] = 1;
  }
  else {
    str2Occurrences[str2[i]]++;
  }
  
  if(str1.includes(str2[i])) {
    if(!result.hasOwnProperty(str2[i])) {
      result[str2[i]] = 1;
    } else {
      result[str2[i]]++;
    }
  }
 }
  for(var key in str2Occurrences) {
    if(result[key] < str2Occurrences[key]) {
      return false;
    }
    if(!result[key]) {
      return false;
    }
  }
  return true
}
console.log(AssertEqual(scramble('jscripts','javascript'), false))

console.log(AssertEqual(scramble('katas','steak'), false))