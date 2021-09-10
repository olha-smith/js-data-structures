const LinkedList = require('./LinkedList.js');

test('empty list - size is 0', () => {
    const list = new LinkedList()
    expect(list.size).toBe(0);
});