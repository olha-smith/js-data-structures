const Queue = require('./Queue.js')

test('test enqueue - with empty queue', () => {
    const queue = new Queue()
    const expectedValue = "value0"

    expect(queue.size).toBe(0)
    queue.enqueue(expectedValue)
    expect(queue.head).not.toBe(null)
    expect(queue.tail).not.toBe(null)
    expect(queue.size).toBe(1)
    expect(queue.tail.value).toBe(expectedValue)
})

test('test enqueue - happy path', () => {
    const queue = new Queue()
    const expectedValue = "value5"

    expect(queue.size).toBe(0)

    for (let i = 0; i < 5; i++) {
        queue.enqueue(`value${i}`)
    }

    queue.enqueue(expectedValue)
    expect(queue.head).not.toBe(null)
    expect(queue.tail).not.toBe(null)
    expect(queue.size).toBe(6)
    expect(queue.tail.value).toBe(expectedValue)
})

test(`test dequeue - happy path`,() => {
    const queue = new Queue()
    const secondValue = "value1"

    expect(queue.size).toBe(0)

    for (let i = 0; i < 5; i++) {
        queue.enqueue(`value${i}`)
    }

    queue.dequeue()
    expect(queue.size).toBe(4)
    expect(queue.head.value).toBe(secondValue)
})

test(`test dequeue - error - with empty list`,() => {
    const queue = new Queue()
    expect(queue.size).toBe(0)

    expect(() => { queue.dequeue() }).toThrow("Queue is empty!")
})