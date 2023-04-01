var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.head = 0;
  queue.tail = 0;

  return queue;
};

var queueMethods = {};
// NOTE: Here cannot use arrow function, otherwise keyword "this" cannot refer to queue
queueMethods.enqueue = function (value) {
  if (!('head' in this)) {
    this.head = 0;
    this.tail = 0;
  }
  this[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function () {
  if (this.head === this.tail) {
    return;
  }
  var res = this[this.head];
  delete this[this.head];
  this.head++;

  return res;
};

queueMethods.size = function () {
  return this.tail - this.head;
};
