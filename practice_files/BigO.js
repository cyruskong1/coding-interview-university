class BigO {
  constructor() {
    this.counter = 0;
  }

  calculateEfficiency() {
    
  }

  O1() {
    let emptyArr = [];
    let num = 1;
    emptyArr[emptyArr.length++] = num;
    this.counter++;
  }
  
  linearTime(num) {
    for (var i = 0; i < num; i++) {
      this.counter++;
    }
    console.log(`linearTime: ${this.counter} steps`);
    this.reset();
  }
  
  logN(arr, target) {
    var start = 0;
    var end = arr.length - 1;

    var middleIndex;

    while(start <= end) {
      if(start === end) {
        middleIndex = start;
      } else {
        middleIndex = Math.floor((end-start) / 2) + start;
      }

      if(arr[middleIndex] === target) {
        return middleIndex;
      }

      if(target < arr[middleIndex]) {
        end = middleIndex - 1;
      } else {
        start = middleIndex + 1;
      }
      this.counter++;
    }
    this.reset();
    return - 1;
  }
  NLogN() {}
  exponentialTime() {}
  reset() {
    this.counter = 0;
  }
}

var bigO = new BigO();
console.log(bigO.logN(10, 5));
