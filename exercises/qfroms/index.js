// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// Stephen's
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;



// // mine - i like my solution better, there's less repetition
// class Queue {
//   constructor() {
//     this.data = new Stack();

//     this.removeOrPeek = (pop = false) => {
//       let temp = new Stack();

//       while (this.data.peek()) {
//         temp.push(this.data.pop());
//       }

//       const result = pop ? temp.pop() : temp.peek();

//       while (temp.peek()) {
//         this.data.push(temp.pop())
//       }

//       return result;
//     }
//   }

//   add(record) {
//     this.data.push(record);
//   }

//   remove() {
//     return this.removeOrPeek(true);
//   }

//   peek() {
//     return this.removeOrPeek();
//   }
// }
