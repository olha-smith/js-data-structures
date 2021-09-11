/**
 Implementation of Queue
*/

const AbstractLinkedList = require('./AbstractLinkedList')

class Queue extends AbstractLinkedList {

    constructor() {
        super();
    }

     enqueue(value) {
        super.addLast(value)
    }

    dequeue() {
        super.removeFrom(0)
    }

}

module.exports = Queue
