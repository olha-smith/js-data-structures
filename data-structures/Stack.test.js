const Stack = require('./Stack.js')

test('push - success', () => {
    const stack = new Stack()
    const value = "👌"

    expect(stack.size).toBe(0)

    stack.push(value)

    expect(stack.size).toBe(1)
    expect(stack.head.value).toBe(value)
    expect(stack.head).toBe(stack.tail)
})

test('pop - success', () => {
    const stack = new Stack()
    const value = "👌"

    expect(stack.size).toBe(0)

    stack.push(value)

    stack.push("Top")
    stack.pop()

    expect(stack.size).toBe(1)
    expect(stack.head.value).toBe(value)
})

test('top - success', () => {
    const stack = new Stack()
    const value = "👌"

    expect(stack.size).toBe(0)

    stack.push(value)
    stack.top()

    expect(stack.size).toBe(1)
    expect(stack.top()).toBe(value)
})
