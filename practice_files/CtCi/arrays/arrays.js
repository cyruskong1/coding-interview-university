const Assert = (actual, expected, testName) => {
	if(actual === expected) {
		return `${testName} passed`;
	} else {
		return `${testName} failed, expected ${expected}, but got ${actual} instead`
	}
}

// 1.1 Is Unqiue: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

/* 
concepts to know:
- is this an ASCII string or a Unicode string?
- if we cannot use a data structure then we have to use a nested loop


*/
const isUnique = (string) => {
	let hash = {};
	for(let i = 0; i < string.length; i++) {
		if(!hash.hasOwnProperty(string[i])){
			hash[string[i]] = 1;
		} else {
			return false;
		}
	}
	return true
}


console.log(Assert(isUnique("qwerty"), true, "isUnique"));
console.log(Assert(isUnique("qwertyq"), false, "isUnique"));
console.log(Assert(isUnique("101"), false, "isUnique"));
console.log(Assert(isUnique("q"), true, "isUnique"));



// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other
// method 1 - sort strings then compare them
const checkPerm = (str1, str2) => {
	if(str1.length !== str2.length) {
		return false;
	} else {
		return str1.split("").sort().join("") === str2.split("").sort().join("");
	}
}

console.log(Assert(checkPerm("abc", "bac"),true, "checkPerm method 1"));
console.log(Assert(checkPerm("abc", "cab"),true, "checkPerm method 1"));
console.log(Assert(checkPerm("abcdefg", "bfcgab"),false, "checkPerm method 1"));
console.log(Assert(checkPerm("racecar", "carrace"),true, "checkPerm method 1"))

//method2 count characters in each string and compare them
 const checkPerm2 = (str1, str2) => {
 	if(str1.length !== str2.length) {
 		return false;
 	} else {
 		// create hash for both strings
 		// iterate through str1
 			// add each element to the hash

 		// check each character count
 		// loop through string 1 hash obj
 		// if string2 has that property
 			// compare if count is the same
 				// return false if it doesnt
 		// return false if str2 doesnt have prop
 		// return true 

 		let str1Hash = {};
 		let str2Hash = {};

 		for(let i = 0; i < str1.length; i++) {
 			if(!str1Hash.hasOwnProperty(str1[i])) {
 				str1Hash[str1[i]] = 1;
 			} else {
 				str1Hash[str1[i]]++;
 			}
 			if(!str2Hash.hasOwnProperty(str2[i])) {
 				str2Hash[str2[i]] = 1;
 			} else {
 				str2Hash[str2[i]]++;
 			}
 		}

 		for(let key in str2Hash) {
 			if(!str1Hash.hasOwnProperty(key)) {
 				return false;
 			} else {
 				if(str1Hash[key] !== str2Hash[key]) {
 					return false;
 				}
 			}
 		}

 		for(let key in str1Hash) {
 			if(!str2Hash.hasOwnProperty(key)) {
 				return false;
 			} else {
 				if(str1Hash[key] !== str2Hash[key]) {
 					return false;
 				} 
 			}
 		}
 	}
 	return true;
 }

console.log(Assert(checkPerm("abc", "bac"),true, "checkPerm method 2"));
console.log(Assert(checkPerm("abc", "cab"),true, "checkPerm method 2"));
console.log(Assert(checkPerm("abcdefg", "bfcgab"),false, "checkPerm method 2"));
console.log(Assert(checkPerm("racecar", "carrace"),true, "checkPerm method 2"))

// 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and thast you are given the "true" length of the string. 

// const URLify = string => {
// 	return string.replace(/ /g, "%20");
// }

const URLify = string => {
	for(var i = 0; i < string.length; i++) {
		if(string[i] === ' ') {
			string = string.slice(0, i) + "%20" + string.slice(i + 1);
		}
	}
	return string;
}

console.log(Assert(URLify("a b c"),"a%20b%20c", "URLify"));
console.log(Assert(URLify("ab     c"),"ab%20%20%20%20%20c", "URLify"));
console.log(Assert(URLify(" ab c"),"%20ab%20c", "URLify"));

// 1.4 isPermutationOfPalindrome : Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. Ignore caseing and non-letter characters.

// Method 1
// put characters of the string in a hash and count the characters 
// iterate through the hash table and make sure no more than one character has an odd count
// to check if something is a palindrome, just check if there is more than one letter that occurs at an odd number of times

const isPermutationOfPalindrome = string => {
	let hash = {};

	for(var i = 0; i < string.length; i++) {
		if(!hash.hasOwnProperty(string[i])) {
			hash[string[i]] = 1;
		} else {
			hash[string[i]]++;
		}
	}
	let oddCountKeys = 0;
	for(var key in hash) {
		if(hash[key] % 2 !== 0) {
			oddCountKeys++;
		}
	}

	if(oddCountKeys > 1) return false;
	return true;
}

console.log(Assert(isPermutationOfPalindrome("dad"),true, "isPermutationOfPalindrome"));
console.log(Assert(isPermutationOfPalindrome("race carr"),false, "isPermutationOfPalindrome"));
console.log(Assert(isPermutationOfPalindrome("racecar"),true, "isPermutationOfPalindrome"));
console.log(Assert(isPermutationOfPalindrome("fist"),false, "isPermutationOfPalindrome"));

// 1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// Helper functions to check if strings are one edit away from matching

// insert: iterate through both strings; if characters at both strings match, keep going; if there is a difference, check if the indexes are not the same; if they are not the same, return false. If both indexes are the same, just increment the longerString index by one and continue comparing. If there no more differences, the string is one edit away. If there is another difference, the indexes will not match and we will return false.

const oneEditInsert = (shorterString, longerString) => {
	let shorterStringIndex = 0;
	let longerStringIndex = 0;
	while(shorterStringIndex < shorterString.length && longerStringIndex < longerString.length) {
		if(shorterString[shorterStringIndex] !== longerString[longerStringIndex]) {
			if(shorterStringIndex !== longerStringIndex) {
				return false;
			}
			longerStringIndex++;
		} else {
			shorterStringIndex++;
			longerStringIndex++;
		}
	}
	return true;
};

// replace: create boolean value initialized to false, that we will update. Loop through string1 - since they are the same length we can check both strings at the same time. If there is a difference, check if bool is true - if it is that means there was a change detected so we can immediately return false. If there is a difference but the bool is still false, set it to true. and keep checking. If there is a another difference we will return false because set the bool to true. 
const oneEditReplace = (string1, string2) => {
	let editNeeded = false;
	for(let i = 0; i < string1.length; i++) {
		if(string1[i] !== string2[i]) {
			if(editNeeded) {
				return false;
			}
			editNeeded = true;
		}
	}
	return true;
};

// all we need to know are the lengths of the strings. If they are the same length we an check for the steps of a replacement function. If the lengths are one more or less than we can check for the steps of an insert function - because insert and delete can be thought of as the same thing -either insert character into the shorter string or remove character from the longer string.

const oneAway = (str1, str2) => {
	if(str1.length === str2.length) {
		return oneEditReplace(str1, str2);
	} else if(str1.length + 1 === str2.length) {
		return oneEditInsert(str1, str2);
	} else if(str1.length - 1 === str2.length) {
		return oneEditInsert(str2, str1);
	}
	else {
		return false;
	}
};

console.log(Assert(oneAway("pale", "ple"), true, "oneAway"));
console.log(Assert(oneAway("pales", "pale"), true, "oneAway"));
console.log(Assert(oneAway("pale", "bale"), true, "oneAway"));
console.log(Assert(oneAway("pale", "bake"), false, "oneAway"));


// 1.6 String Compression: Implement a method to perform basic tring compression using the counts of repeated characters. For example, the string aabbccccaaa would become a2b1c5a3. If the compressed string would not become smaller than the original string, your method should return the original string. You can assume that string has only uppercase and lowercase letters (a-z).

// create a hash obj
// loop through string
// create variable to hold current value or first and start looping at second char
// create variable to hold the count of the character
// if the value at the index does not equal the current value variable, 
	//create a key value pair to add to hash obj
	// set the current value variable to the value at the index
	// set the count equal to 0
// if the value at the index does equal the current value variable, increment the count by one

// loop through hash object
// stringify the key and value and concat the rest of the key value pairs together

const stringCompression = string => {
	let hashArr = [];
	let hashArrCounter = 0;
	let currentValue = string[0];
	let currentValueCount = 1;
	let newString = "";

	for(var i = 1; i < string.length; i++) {
		var valueAtIndex = string[i];
		if(valueAtIndex !== currentValue) {
			let key = currentValue;
			let count = currentValueCount;
			hashArr[hashArrCounter] = [key, count];
			hashArrCounter++;
			currentValue = valueAtIndex;
			currentValueCount = 1;
		} else {
			currentValueCount++;
		}
	}

	for(var i = 0; i < hashArr.length; i++) {
		if(hashArr[i]) {
			newString+= hashArr[i][0] + hashArr[i][1];
		}
	}

	if(newString.length > string.length) {
		return string;
	} else {
		return newString;
	}
}

console.log(Assert(stringCompression("aabbcccccaaa"), "a2b2c5a3", "stringCompression"));