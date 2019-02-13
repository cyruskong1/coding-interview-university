function maxRot(n) {
  n = n.toString().split("");
  var counter = 0;
  var greatest = 0;
  while(counter < n.length) {
    if(counter === 0) {
    var shifted = n.shift();
    n = n.concat(shifted);
    counter++;
    } else {
      n = n.slice(0, counter).concat(n.slice(counter + 1).concat(n[counter]))
      counter++;
    }
    let currentTotal = parseInt(n.join(""));
    if(greatest < currentTotal) {
      greatest = currentTotal;
    }
  }
  return greatest;
}

console.log(maxRot(56789))