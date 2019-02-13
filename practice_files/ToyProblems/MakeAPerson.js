var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  this.name = firstAndLast.split(" ")
  
  this.setFirstName = function(name) {
    this.name[0] = name;
  }
  this.setLastName = function(name){
    this.name[1] = name
  }

  this.setFullName = function(string) {
    this.name[0] = string.split(" ")[0];
    this.name[1] = string.split(" ")[1];
  }
  
  this.getFirstName = function() {
    return this.name[0];
  }
  this.getLastName = function(string) {
    return this.name[1];
  }
  this.getFullName = function() {
    return this.name;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
