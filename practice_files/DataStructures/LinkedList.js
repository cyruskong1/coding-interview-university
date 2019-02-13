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

LinkedList.prototype.pushBack = function(value) {
	var current = this.head;
	var nodeToAdd = new Node(value);
	while(current.next) {
		current = current.next;
	}
	current.next = nodeToAdd;
	this.size++;
};

LinkedList.prototype.popBack = function() {

	if(!this.head) return ;

	var current = this.head;
	var prev;
	while(current.next) {
		prev = current;
		current = current.next;
	}
	prev.next = null;
	this.size--
	return current;
};

LinkedList.prototype.front = function() {
	this.head ? this.head : null;
};

LinkedList.prototype.back = function() {
	if(!this.head) return null;

	var current = this.head;
	while(current.next) {
		current = current.next;
	}
	return current;
};

LinkedList.prototype.insertAt = function(index) {};

LinkedList.prototype.removeFrom = function(index) {};

LinkedList.prototype.remove = function(value) {};

var linkedList = new LinkedList();

linkedList.pushFront(2);
linkedList.pushFront(1);
console.log(linkedList);
console.log(linkedList);
linkedList.pushBack(10);
console.log(linkedList);
linkedList.popBack();
console.log(linkedList.back());
