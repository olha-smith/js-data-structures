const Node = require('./Node.js')

class AbstractLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.head == null
    }

    print() {
        let c = 0
        let currentNode = this.head

        while (c < this.size) {
            console.log(currentNode.value)
            currentNode = currentNode.next
            c++
        }
    }

    addLast(value) {
        let newNode = new Node(value)
        let currentNode = this.tail

        if (currentNode != null) {
            currentNode.next = newNode
        }

        if (this.head == null) {
            this.head = newNode
        }
        this.tail = newNode
        this.size++
    }

    indexOf(index) {
        if (index >= this.size || index < 0) {
            throw "Index out of bound"
        }

        let currentNode = this.head

        for (let i = 0; i < index ; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    removeFrom(index) {
        let prevNode = this.indexOf(index - 1)
        let currentNode = prevNode.next
        let nextNode = currentNode.getNext()

        if (currentNode === this.head) {
            this.head = nextNode
            currentNode.next = null
        } else if (currentNode === this.tail) {
            prevNode.next = null
            this.tail = prevNode
        } else {
            prevNode.next = nextNode
            currentNode.next = null
        }

        this.size--
        return currentNode
    }

}

module.exports = AbstractLinkedList
