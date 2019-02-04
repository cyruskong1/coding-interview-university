// pseudoclassical
var Stack2 = function() {
	this.store = {};
	this.size = 0; 
}

Stack2.prototype.push = function (value) {
		this.store[this.size] = value;
		this.size++;
	}

Stack2.prototype.pop = function () {
	if(this.size > 0) {
		var elementToDelete = this.store[this.size];
		this.size--;
		delete this.store[this.size];
		return elementToDelete;
		}
	}

Stack2.prototype.getSize = function () {
	return this.size;
} 

Stack.prototype.peek = function () {
	return this.store[this.size - 1];
}




// Es6 classes

class Stack {
	constructor() {
		this.store = {};
		this.size = 0;
	}

	push(value) {
		this.store[this.size] = value;
		this.size++;
	}

	pop() {
		if(this.size) {
			const elementToDelete = this.store[this.size];
			this.size--;
			delete this.store[this.size];
			return elementToDelete;
		}
	}

	getSize() {
		return this.size;
	}

	peek() {
		return this.store(this.size - 1);
	}
}

var stack = new Stack();
stack.push(4);
stack.push(8)
console.log(stack);
stack.pop();
console.log(stack)