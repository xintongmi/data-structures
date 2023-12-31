var LinkedList = function () {
  var list = {
    head: null,
    tail: null,
  };

  list.addToTail = function (value) {
    var newNode = Node(value);
    console.log(Node);
    if (!list.head) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function () {
    if (!list.head) {
      return;
    }
    var res = list.head.value;
    list.head = list.head.next;
    return res;
  };

  list.contains = function (target) {
    var pointer = list.head;
    while (pointer) {
      if (pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   .contains(target) with O(n), others with O(1)
 */
