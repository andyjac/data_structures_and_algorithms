var LList = (function() {

  function LList() {
    this.head = new Node('head');
    this.currNode = this.head;
  }

  LList.prototype.insert = function(newElement, item) {
    var newNode = new Node(newElement);
    var current = find.call(this, item);
    newNode.next = current.next;
    current.next = newNode;
  };

  LList.prototype.display = function() {
    var currNode = this.head;

    while (!(currNode.next === null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  };

  LList.prototype.remove = function(item) {
    var prevNode = findPrevious.call(this, item);

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  };

  LList.prototype.advance = function(n) {
    var count = n, currNode;

    if (n === 0) throw new Error("Cannot advance 0 times");

    this.currNode.next === null ?
      currNode = this.head :
      currNode = this.currNode;

    while ((count > 0) &&
           (currNode.next !== null)) {
      currNode = currNode.next;
      count--;
    }
    this.currNode = currNode;
  };

  LList.prototype.show = function() {
    return this.currNode.element;
  };

  function find(item) {
    var currNode = this.head;

    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  function findPrevious(item) {
    var currNode = this.head;

    while ((currNode.next !== null) &&
           (currNode.next.element !== item)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  return LList;
})();

var Node = (function() {

  function Node(element) {
    this.element = element;
    this.next = null;
  }

  return Node;
})();
