/*
Description

You are given a positive integer number. This represents the sales made that day in your
department store. The payables department however, needs this printed out in English. NOTE:
The correct spelling of 40 is Forty. (NOT Fourty)
Input
Your program should read lines of text from standard input. Each line contains a positive integer.
Output
For each set of input print a single line to standard output which is the english textual
representation of that integer. The output should be unspaced and in CamelCased. Always
assume plural quantities. You can also assume that the numbers are &lt; 1000000000 (1 billion). In
case of ambiguities eg. 2200 could be TwoThousandTwoHundredDollars or
TwentyTwoHundredDollars, always choose the representation with the larger base i.e.
TwoThousandTwoHundredDollars.
Test 1
Input
3
Expected Output
ThreeDollars
Test 2
Input
466
Expected Output
FourHundredSixtySixDollars
Test 3
Input
1234
Expected Output
OneThousandTwoHundredThirtyFourDollars
Test 4
Input
10
Expected Output
TenDollars
Test 5
Input

21
Expected Output
TwentyOneDollars
*/

const ones = {0:"",1: "One", 2:"Two", 3:"Three", 4:"Four", 5:"Five", 6:"Six", 7:"Seven", 8:"Eight", 9:"Nine", 10:"Ten", 11:"Eleven", 12:"Twelve", 13:"Thirteen", 14:"Fourteen", 15:"Fifteen", 16:"Sixteen", 17:"Seventeen", 18:"Eighteen", 19:"Nineteen" };
const tens = {0:"", 1: "", 2:"Twenty", 3:"Thirty", 4:"Forty", 5:"Fifty", 6:"Sixty", 7:"Seventy", 8:"Eighty", 9:"Ninety"}
const bases = { 3:"Hundred", 4:"Thousand",5:"Thousand",6:"Thousand",7:"Million", 8:"Million", 9:"Million",10:"Billion"}

const calculateLessThan100 = num => {
	// console.log('less than num', num)
	if(num == 0) {
		return "";
	}
	if(num.toString()[0] === "0") {
		num = parseInt(num.toString()[1]);
		return calculateLessThan100(num);
	}
	if(num < 20) {
		return ones[num];
	}
	return `${tens[num.toString()[0]]}${ones[num.toString()[1]]}`;
}

const calculateGreaterThan100 = num => {
	// console.log('greater than num', num)
	if(num < 100) return "";
	if(num.toString()[0] === "0") {
		return "";
	} 
	return `${ones[num.toString()[0]]}${bases[num.toString().length]}`;
}

const TextDollar = num => {

	if(num === 0) return 0;

	
	
	const numString = num.toString();
	const base = numString.length;

	const numArray = numString.split("");
	let chunks = [];
	let miniChunk = [];
	for(var i = numArray.length - 1; i >= 0; --i) {
		miniChunk.unshift(numArray[i]);
		
		if(miniChunk.length === 3) {
		
			chunks.unshift(miniChunk);
			miniChunk = [];
		}
		if(i === 0 && miniChunk.length > 0) {
			chunks.unshift(miniChunk);
		}
	}
	// console.log(chunks)
	
	if(num < 100) return calculateLessThan100(num);
	if(num < 1000) return `${calculateGreaterThan100(num)}${calculateLessThan100(numString.slice(numString.length - 2))}`;
	if(num < 10000) return `${ones[chunks[0][0]]}${bases[base]}${calculateGreaterThan100(parseInt(chunks[1].join("")))}${calculateLessThan100(chunks[1].join('').slice(1))}`;
	
	if(num < 100000) return `${calculateLessThan100(parseInt(chunks[0].join("")))}${bases[base]}${calculateGreaterThan100(parseInt(chunks[1].join("")))}${calculateLessThan100(chunks[1].join('').slice(1))}`;
	if(num < 1000000) return `${calculateGreaterThan100(parseInt(chunks[0].join("")))}${calculateLessThan100(chunks[0].join("").slice(1))}${bases[base]}${calculateGreaterThan100(chunks[1].join(""))}${calculateLessThan100(chunks[1].join("").slice(1))}`
	if(num < 100000000) return `${calculateLessThan100(chunks[0].join("").slice(0))}${bases[base]}${calculateGreaterThan100(chunks[1].join(""))}${calculateLessThan100(chunks[1].join("").slice(1))}${bases[base - 3]}${calculateGreaterThan100(chunks[2].join(""))}${calculateLessThan100(chunks[2].join("").slice(1))}`;
	if(num < 1000000000) return `${calculateGreaterThan100(chunks[0].join("").slice(0))}${calculateLessThan100(chunks[0].join("").slice(1))}${bases[base]}${calculateGreaterThan100(chunks[1].join(""))}${calculateLessThan100(chunks[1].join("").slice(1))}${bases[base - 3]}${calculateGreaterThan100(chunks[2].join(""))}${calculateLessThan100(chunks[2].join("").slice(1))}`;
}

// for testing
const AssertEqual = (expected, actual) => {
	if(expected === actual) {
		return "function passed"
	} else {
		return "expected " + expected + " but received " + actual + " instead"
	}
}

console.log(AssertEqual("One",TextDollar(00000000001)))
console.log(AssertEqual("Ten",TextDollar(10)))
console.log(AssertEqual("FortyFive",TextDollar(45)))
console.log(AssertEqual("OneHundredTwentyThree",TextDollar(123)))
console.log(AssertEqual("NineHundredNinetyNine",TextDollar(999)))
console.log(AssertEqual("OneThousand",TextDollar(1000)))
console.log(AssertEqual("OneThousandNinetyNine",TextDollar(1099)))
console.log(AssertEqual("NineteenThousandOneHundredThirty",TextDollar(19130)))
console.log(AssertEqual("NinetyThousand",TextDollar(90000)))
console.log(AssertEqual("NineHundredThousandOneHundredOne",TextDollar(900101)))
console.log(AssertEqual("OneHundredTwentyThousandNine",TextDollar(120009)))
console.log(AssertEqual("NineHundredNinetyNineThousandNineHundredNinetyNine",TextDollar(999999)))
console.log(AssertEqual("OneMillionSixHundredNinetyNineThousandNineHundredSeventyTwo",TextDollar(1699972)))
console.log(AssertEqual("OneHundredTwentyThreeMillionFourHundredFiftySixThousandSevenHundredEightyNine",TextDollar(123456789)))