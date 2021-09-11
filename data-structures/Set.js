const LinkedList = require('./LinkedList.js')

class Set {

    constructor() {
        this.list = new LinkedList()
    }

    add(value) {
        try {
            this.list.searchNode(value)
        } catch (error) {
            this.list.add(value)
            return
        }
        throw "Value is not unique!"
    }

    print() {
        this.list.printList()
    }

}

const set = new Set()
set.add("Piska")
set.print()
