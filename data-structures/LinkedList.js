/**
    Implementation of Doubly Linked List
*/

const Node = require('./Node.js')

class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    add(value) {
        let newNode = new Node(value)
        let currentNode = this.tail

        if (currentNode != null) {
            currentNode.next = newNode
        }
        newNode.prev = currentNode

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

    insertAt(value, index) {
        if (index > this.size) {
            throw "Index out of bound"
        }

        if (index === this.size) {
            this.add(value)
            return
        }

        let newNode = new Node(value)
        let currentNode = this.indexOf(index)
        let prevNode = currentNode.getPrev()


        if (index === 0) {
            this.head = newNode
            currentNode.prev = newNode
            newNode.next = currentNode
        } else {
            currentNode.prev = newNode
            prevNode.next = newNode
            newNode.prev = prevNode
            newNode.next = currentNode
        }

        this.size++
    }

    removeFrom(index) {
        let currentNode = this.indexOf(index)
        let prevNode = currentNode.getPrev()
        let nextNode = currentNode.getNext()

        if (index === 0) {
            nextNode.prev = null
            this.head = nextNode
        } else if (index === this.size - 1) {
            prevNode.next = null
            this.tail = prevNode
        } else {
            prevNode.next = nextNode
            nextNode.prev = prevNode
        }

        this.size--
        return currentNode
    }

    removeValue(value) {
        let currentNode = this.searchNode(value)
        let prevNode = currentNode.getPrev()
        let nextNode = currentNode.getNext()

        if (currentNode === this.head) {
            nextNode.prev = null
            this.head = nextNode
        } else if (currentNode === this.tail) {
            prevNode.next = null
            this.tail = prevNode
        } else {
            prevNode.next = nextNode
            nextNode.prev = prevNode
        }

        this.size--
        return currentNode
    }

    searchNode(value){
        let currentNode = this.head

        for (let c = 0; c < this.size; c++) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        throw `Node with value "${value}" is not found`
    }

    isEmpty() {
        return this.head == null
    }

    printList() {
        let c = 0
        let currentNode = this.head

        while (c < this.size) {
            console.log(currentNode.value)
            currentNode = currentNode.next
            c++
        }

    }

}
