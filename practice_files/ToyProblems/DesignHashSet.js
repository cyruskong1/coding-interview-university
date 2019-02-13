// Design Hashset

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.size = 0;
    this.hash = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.hash[this.size] = key;
    this.size++;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    for(var size in this.hash) {
        if(this.hash[size] === key) {
            delete this.hash[size];
            this.size--;
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    for(var size in this.hash) {
        if(this.hash[size] === key) {
            return true
        }
    }
    return false;
};

var hashSet = new MyHashSet();
console.log(hashSet.add(1));
console.log(hashSet);
console.log(hashSet.add(2));
console.log(hashSet.remove(1));
console.log(hashSet);
console.log(hashSet.contains(1));