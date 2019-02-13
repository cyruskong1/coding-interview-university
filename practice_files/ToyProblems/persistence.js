/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/


function persistence(num, steps) {
   // take number - turn it into a string
   if(!steps) steps = 1;
   num = num.toString();
   // loop
   if(num.length === 1) return 0;
   var currentTotal = 1;
   for(var i = 0; i < num.length; i++) {
   // create variable to hold current num
   // multiply each num 
     currentTotal *= parseInt(num[i]);
     // turn it back into a string
     currentTotal = currentTotal.toString();
     // check if string.length > 1
   }
    if(currentTotal.length === 1) { 
      return steps;
    }
       // if it is run function recursively
       var newNum = parseInt(currentTotal);
       steps++;
       return persistence(newNum, steps);
     
}

console.log("steps: ", persistence(999))