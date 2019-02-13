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
  for(var i = 0; i < nFloors; i++) {
  	var floor = "*".repeat(i + 1);
  	tower.push(floor);
  }
  return tower
}

console.log(towerBuilder(4))