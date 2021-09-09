class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }

    getNext() {
        return this.next
    }

    getPrev() {
        return this.prev
    }

}

module.exports = Node