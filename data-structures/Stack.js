/**
 Implementation of Stack
*/

const AbstractLinkedList = require('./AbstractLinkedList')

class Stack extends AbstractLinkedList {

    constructor() {
        super();
    }

    push(value) {
        super.addLast(value)
    }

    pop() {
        super.removeFrom(this.size - 1)
    }

    top() {
        return this.tail.value
    }

}

module.exports = Stack
