var Queue = function () {
	this.storage = {};
	this.head = 0;
	this.tail = 0;
}

Queue.prototype.enqueue = function(value) {
	this.storage[this.tail] = value;
	this.tail++;
}  

Queue.prototype.dequeue = function() {
	var elementToDelete = this.storage[this.head];
	delete this.storage[this.head];
	if(this.head < this.tail) {
		this.head++;
	}
	return elementToDelete;
}

Queue.prototype.peek = function () {
	return this.storage[this.head];
}

Queue.prototype.getSize = function() {
	return this.tail - this.head;
}

var queue = new Queue();

console.log("queue", queue);
queue.enqueue("Cy");
queue.enqueue("Joie");
queue.enqueue("Chance");
console.log("queue", queue);
queue.enqueue("Cloud");
queue.dequeue();
queue.getSize();
console.log(queue.getSize(), queue)
queue.dequeue();
console.log(queue.getSize())


