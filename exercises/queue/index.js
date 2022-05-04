// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor () {
    this.data = [];
  }

  add (record) {
    this.data.unshift(record);
  }

  remove (record) {
    return this.data.pop();
  }
}

module.exports = Queue;


// my original, mistaken one, cuz i don't remember constructors:

// class Queue {

//     const queued = [];
    
//     function add(record) {
//         queued.unshift(record);
//     }
    
//     function remove() {
//         return queued.pop();
//     }
    
// }

