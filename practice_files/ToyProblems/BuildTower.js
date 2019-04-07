/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
ex. 
towerBuilder(3) : 
[
  '  *  ', 
  ' *** ', 
  '*****'
]

towerBuilder(6):
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

*/

function towerBuilder(nFloors) {
  // build here
  var tower = [];
  var numSpaces = 0;
  for(var i = nFloors; i > 0; --i) {
  	var floor = " ".repeat(numSpaces) + "*".repeat(i) + " ".repeat(numSpaces);
  	tower.push(floor);
    numSpaces++;
  }
  return tower.reverse();
}

console.log(towerBuilder(3))