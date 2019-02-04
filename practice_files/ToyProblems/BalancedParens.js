const checkBalancedParens = string => {
	let stack = [];

	let openingSymbols = ["[","{","("];

	let closingSymbols = ["}","]",")"];
	for(var i = 0; i < string.length; i++) {
		if(openingSymbols.includes(string[i])) {
			console.log("opening: ", string[i])
			stack.push(string[i]);
			console.log("stack: ", stack)
		} else {
			if(string.length){
				if(string[i] === "]") {
					if(stack[stack.length - 1] === "[") {
						stack.pop();
				}
			}
			else if(string[i] === "}") {
				if(stack[stack.length - 1] === "{") {
					stack.pop();
				}
			}
			else if(string[i] === ")") {
				if(stack[stack.length - 1] === "(") {
					stack.pop();
				}
			}
			}
		}
	}
	console.log(stack.length)
	return stack.length === 0 ? true : false;
}

console.log(checkBalancedParens("[as[fvbb]wewe{gdgd{}}]"));
//console.log(checkBalancedParens("[{}]"));