/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val);
    if(val === undefined){
      throw new Error("Value to be added to queue can not be empty");
    }
    if(!this.first){
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.first) throw new Error ("Queue is currently empty. Can't dequeue");

    let temp = this.first;
    if(this.first == this.last){
      this.last = null;
    }
    this.first = this.first.next;

    this.size -= 1;
    return temp.val;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(!this.first){
      return true;
    }else return false;

  }
}

let n = new Queue;
//Establish Queue is created
console.log("-----------------------------")
console.log("newQueue", n)
//Add values to queue 
console.log(n.enqueue("Josh"))
console.log(n.enqueue("Alberto"))
console.log(n.enqueue("Amanda"))
console.log(n.enqueue("Mekha"))
console.log(n.enqueue("Mike"))

console.log("-----------------------------")
//Check updated queue
console.log("Updated Queue:", n)

console.log("-----------------------------")
//Check that dequeue removes first in queue and shows next up
console.log("Dequeued Value:", n.dequeue())
console.log("Next up:", n.first)
console.log("Updated Queue:", n)

console.log("-----------------------------")
//See what is next in queue
console.log("PEEK", n.peek())

console.log("-----------------------------")
//Check if queue is empty, dequeue until empty and check again
console.log("Is Empty?", n.isEmpty())
console.log("Dequeued Value:", n.dequeue())
console.log("Dequeued Value:", n.dequeue())
console.log("Dequeued Value:", n.dequeue())
console.log("Dequeued Value:", n.dequeue())
console.log("Is Empty?", n.isEmpty())



module.exports = Queue;
