class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    let new_node = new Node(value);
    if (!this.head) {
      this.head = new_node;
      return this;
    }
    new_node.next = this.head;
    this.head = new_node;
    return this;
  }

  classremoveFront() {
    if (!this.head) {
      return null;
    }
    let newHead = this.head.next;
    this.head = newHead;
    return this.head;
  }

  front() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }
}
