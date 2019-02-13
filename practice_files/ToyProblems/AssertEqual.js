const AssertEqual = (expected, actual) => {
	if(expected === actual) {
		return "function passed"
	} else {
		return "expected " + expected + " but received " + actual + " instead"
	}
}

module.exports ={AssertEqual};