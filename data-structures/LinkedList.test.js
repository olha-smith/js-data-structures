const LinkedList = require('./LinkedList.js')

test('test list constructor', () => {
    const list = new LinkedList()
    expect(list.size).toBe(0)
    expect(list.tail).toBe(null)
    expect(list.head).toBe(null)
})