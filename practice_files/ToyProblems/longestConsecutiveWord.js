function longestConsecutiveSubstring(s1, s2) {
	var currentLongestWord = "";
	var finalLongestWord = "";
	var currentLongestLength = 0;
	var s1Index = 0; 
	var s2Index = 0;


	/* 
	implementation notes 
	if the letter in string 1 is the same as the letter in string 2
		add that letter to the currentLongestWord
		increment string1 index by 1
	if string2 index is less than string 2 length
		increment string2 index by 1 to move on to the next letter
		if string2 index is the same as string 2 length we have reached the end of the  2nd word
			increment index of str1 by 1s
			check if the current longest word is longer than currentLongestLength
				if it is, set the currentLongestLength to currentLongestWord.length
				set finalLongestWord to currentLongestWord
				set currentLongest word to an empty string

	
	*/

	while(s1Index < s1.length) {
		if(s1[s1Index] === s2[s2Index]) {
			console.log('s1 index', s1Index, 's1 letter', s1[s1Index], 's2 index', s2Index, 's2 letter', s2[s2Index])
			currentLongestWord += s1[s1Index];
			s1Index++;
		}
		if(s2Index < s2.length) {
			s2Index++;
			console.log('moving to next letter in 2nd word')
		} else {
			s1Index++;
			s2Index = 0;
			console.log('moving to next letter in 1st word', s1[s1Index])
			if(currentLongestWord.length > currentLongestLength) {
				console.log('currentlongest word', currentLongestWord)
				currentLongestLength = currentLongestWord.length;
				finalLongestWord = currentLongestWord;
				currentLongestWord = "";
				console.log('final word', finalLongestWord)
			}
		}
	}
	return finalLongestWord;
}

console.log(longestConsecutiveSubstring("animal", "fdnewgidsfmsdfaeoolgdf"));