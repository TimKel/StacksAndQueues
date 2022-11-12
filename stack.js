/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node = new Node(val);

    if(!this.first){
      this.first = node;
      this.last = node;
    }else{
      let tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }
        
    this.size++

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    if(!this.first){
      throw new Error("Stack is empty. Nothing to remove.");
    }

    let poppedItem = this.first;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.size--;

    return poppedItem.val;

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.first === null && this.last === null){
      return true;
    }else return false;

  }
}
//Create new stack and view empty contents
let n = new Stack;
console.log("New Stack:", n)

console.log("----------------------------")
//push multiple items to stack. Newest item at front/top of stack
console.log("Add to Stack:", n.push("Dough"))
console.log("Add to Stack:", n.push("Sauce"))
console.log("Add to Stack:", n.push("Cheese"))
console.log("Add to Stack:", n.push("Pepperoni"))
console.log(n)
console.log("-----------------------------")
//Pop item and check updated stack
console.log("Pop:", n.pop())
console.log("Updated:", n)

console.log("-----------------------------")
//Peek at next item in stack
console.log("PEEK", n.peek())

console.log("-----------------------------")
//Check if stack is empty, pop until true
console.log("Stack is Empty?", n.isEmpty())
console.log(n.pop())
console.log(n.pop())
console.log(n.pop())
console.log("Stack is Empty?", n.isEmpty())
console.log(n)

module.exports = Stack;
