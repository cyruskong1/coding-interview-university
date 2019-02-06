var Node = function (value) {
	this.value = value;
	this.next = null;
}

var LinkedList = function() {
	this.size = 0;
	this.head = null;
}

// LinkedList.prototype

LinkedList.prototype.size = function() {
	return this.size;
};

LinkedList.prototype.isEmpty = function() {
	return this.size === 0 && this.head === null;
};

LinkedList.prototype.valueAt = function(index) {
	var counter = 0;
	var current = this.head;
	while(counter < index) {
		current = this.head.next;
		counter++;
	}
	return current.value;
};

LinkedList.prototype.pushFront = function(value) {
	var nodeToAdd = new Node(value);
	var current = this.head;

	this.head = nodeToAdd;
	
	if(current) {
		nodeToAdd.next = current;
		console.log(nodeToAdd)
	}
	this.size++;
};

LinkedList.prototype.popFront = function() {
	if(!this.head) return;

	var current = this.head;
	if(this.head.next) {
		this.head = this.head.next;
	}
	
	this.size--;
	return current;
};

LinkedList.prototype.pushBack = function(value) {};

LinkedList.prototype.popBack = function() {};

LinkedList.prototype.front = function() {};

LinkedList.prototype.back = function() {};

LinkedList.prototype.insertAt = function(index) {};

LinkedList.prototype.removeFrom = function(index) {};

LinkedList.prototype.remove = function(value) {};

var linkedList = new LinkedList();

linkedList.pushFront(2);
linkedList.pushFront(1);
console.log(linkedList);
linkedList.popFront();
console.log(linkedList);
