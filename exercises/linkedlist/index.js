// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  // intentionally set default val of 'next' to null rather than undefined; engineer's way of making it clear that a value is set on purpose here
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// refactored, after looking at Stephen's
class LinkedList {
  constructor() {
    this.head = null;
  }

  // if asked in an interview, check with interviwer if they're going to ask you to create insertAt as well - insertAt(data, 0) will have the same functionality as insertFirst. This kind of forward-looking thinking would be impressive in an interview.
  insertFirst(data) {
    // this.head = new Node(data, this.head)
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next
    }

    return counter;
  }

  // getAt(0)
  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  // getAt(this.size() - 1)
  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node.next) {
    //   node = node.next;
    // }
    // return node;
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null;
  }

  // removeAt(0)
  removeFirst() {
    // if (!this.head) {
    //   return;
    // }
    // this.head = this.head.next;
    this.removeAt(0);
  }

  // removeAt(this.size() - 1)
  removeLast() {
    // if (!this.head) {
    //   return
    // }

    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let previous = this.head;
    // let node = this.head;

    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // previous.next = null;
    this.removeAt(this.size() - 1)
  }

  // insertAt(data, this.size())
  insertLast(data) {
    // const last = this.getLast();

    // if (last) {
    //   last.next = new Node(data);
    // } else {
    //   this.head = new Node(data);
    // }
    this.insertAt(data, this.size())
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next
      return;
    }

    const previous = this.getAt(index - 1);
    if (previous && previous.next) {
      previous.next = previous.next.next;
    }
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next)
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }

    // // stephen's (above) is the correct solution because you should be passing the index into the forEach function
    // let node = this.head;
    // while (node) {
    //   fn(node);
    //   node = node.next;
    // }
  }

  *[Symbol.iterator]() { 
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };


// // initial code
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   *[Symbol.iterator]() { 
//     let currentNode = this.head;

//     while (currentNode) {
//       yield currentNode;
//       currentNode = currentNode.next;
//     }
//   }

//   insertFirst(data) {
//     this.head = this.head ? new Node(data, this.head) : new Node(data)
//   }

//   size() {
//     let counter = 0;
//     let currentNode = this.head;

//     while (currentNode) {
//       counter += 1;
//       currentNode = currentNode.next
//     }

//     return counter;
//   }

//   getFirst() {
//     return this.head;
//   }

//   getLast() {
//     if (!this.head) {
//       return null;
//     }

//     let currentNode = this.head;
//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }
//     return currentNode;
//   }

//   clear() {
//     this.head = null;
//   }

//   removeFirst() {
//     if (!this.head) {
//       return;
//     }
//     this.head = this.head.next;
//   }

//   removeLast() {
//     if (this.head && !this.head.next) {
//       this.head = null;
//       return;
//     }

//     let prevNode = this.head;
//     let currentNode = this.head;

//     while (currentNode) {
//       if (currentNode.next) {
//         prevNode = currentNode;
//       } else {
//         prevNode.next = null;
//       }
//       currentNode = currentNode.next;
//     }
//   }

//   insertLast(data) {
//     const last = this.getLast();

//     if (last) {
//       // There are some existing nodes in our chain
//       last.next = new Node(data);
//     } else {
//       // The chain is empty!
//       this.head = new Node(data);
//     }

//     // // this is mine, but Stephen's (above) is way better
//     // let currentNode = this.head;
//     // let newNode = new Node(data);

//     // if (!currentNode) {
//     //   this.head = newNode;
//     //   return;
//     // }
    
//     // while (currentNode) {
//     //   if (!currentNode.next) {
//     //     currentNode.next = newNode;
//     //     return;
//     //   }
//     //   currentNode = currentNode.next;
//     // }
//   }

//   getAt(index) {
//     let counter = 0;
//     let currentNode = this.head;

//     while (currentNode) {
//       if (counter === index) {
//         return currentNode;
//       }
//       counter++;
//       currentNode = currentNode.next;
//     }

//     return null;
//   }

//   removeAt(index) {
//     if (!this.head) {
//       return;
//     }

//     let counter = 0;
//     let currentNode = this.head;
//     let prevNode = this.head;

//     while (currentNode) {
//       if (counter === index) {
//         if (counter === 0) {
//           this.head = this.head.next;
//         } else {
//           prevNode.next = currentNode.next;
//         }
//         return;
//       } else {
//         prevNode = currentNode;
//         counter ++;
//       }
//       currentNode = currentNode.next;
//     }
//   }

//   insertAt(data, index) {
//     if (!this.head && index === 0) {
//       this.insertFirst(data);
//       return;
//     }

//     let counter = 0;
//     let currentNode = this.head;
//     let prevNode = this.head;

//     while (currentNode) {
//       if (counter === index) {
//         if (index === 0) {
//           this.head = new Node(data, currentNode);
//         } else {
//           prevNode.next = new Node(data, currentNode);
//         }
//         return;
//       }
//       prevNode = currentNode;
//       currentNode = currentNode.next;
//       counter++;
//     }

//     if (index >= counter) {
//       this.insertLast(data);
//     }
//   }

//   forEach(fn) {
//     let node = this.head;
//     let counter = 0;
//     while (node) {
//       fn(node, counter);
//       node = node.next;
//       counter++;
//     }

//     // // stephen's (above) is the correct solution because you should be passing the index into the forEach function
//     // let currentNode = this.head;
//     // while (currentNode) {
//     //   fn(currentNode);
//     //   currentNode = currentNode.next;
//     // }
//   }
// }

