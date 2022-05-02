const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

  constructor() {
    this.size = 0;
    this.root = null;
  }

  getUnderlyingList() {
    return this.root
  }

  enqueue(x) {
    if (this.size === 0) {
      this.root = new ListNode(x);
      this.size++
      return true
    }

    let curr = this.root;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = new ListNode(x);
    this.size++
  }

  dequeue() {
    const result = this.root.value;
    this.root = this.root.next;
    this.size--;
    return result
  }
}

module.exports = {
  Queue
};
