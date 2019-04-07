/*
n x n matrix  x, y
target / prize x,y
API guesses coords 
based on coords, 
we should get a response if it’s correct
if its not correct guess closer or further than previous guess
implement the guess algo not API
*/


/*

[
	[ , , , X,],
	[ , , , ,],
	[ , ,O, ,],
	[ , , , ,],
	[ , , ,O ,]
]

*/
function mockAPI(x, y) {
	var randomNum = Math.floor(Math.random() * 100)
	return  randomNum > 50 ? "warmer" : randomNum < 50 ? "colder" : "hit";
}

// [
// 	[0,0,0,0,0],
// 	[0,0,0,0,0],
// 	[0,0,0,0,0],
// 	[0,0,0,0,0],
// 	[0,0,0,0,0]
// ]



function sliceMatrix(matrix, x, y) {
		if(y > 0) matrix.slice(0, y + 1);
		if(y === 0) matrix.slice(0,1);
	for(var i = 0; i < matrix.length; i++) {
		if(x > 0) {	
			matrix[i].slice(x);
		} else {
			matrix[i].slice()
		}
	}
	return matrix;
}

function hitPrize(matrix, x, y) {
	// use API to shoot
	// if hit
	var shot = mockAPI(x, y);
	if(shot === "hit") return "Prize"; 

	if(shot === "colder") {
		console.log(shot)
		return hitPrize(matrix,x,y)
	}

	if(shot === "warmer") {
		console.log(shot)
		var newMatrix = sliceMatrix(matrix,x,y);
		console.log('newMatrix', newMatrix)
		var newX = Math.floor(Math.random() * newMatrix.length);
		var newY = Math.floor(Math.random() * newMatrix.length);
		return hitPrize(hitPrize(newMatrix, newX, newY))
	}
}

var matrix = [
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0]
]

//console.log(hitPrize(matrix, 1, 3))

console.log(14%20)
