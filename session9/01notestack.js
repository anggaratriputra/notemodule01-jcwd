class Stack {
    #maxSize
    #container

    constructor(maxSize = 10) {
        this.#maxSize = maxSize
        this.#container = []
    }

    #isFull() {
        return this.#container.length >= this.#maxSize
    }

    #isEmpty() {
        return this.#container.length === 0
    }
    push(element) {
        if (this.#isFull()) {
            console.log("stack overflow")
            return
        }
        this.#container.push(element)
    }

    pop() {
        if (this.#isFull()) {
            console.log("stack is empty")
            return
        }
        this.#container.pop()
    }

    getElements() {
        return this.#container
    }

    getCurrent(){
        if (this.#isEmpty()){
            return undefined;
        }
        return this.#container[this.#container.length - 1]
    }
}

const newStack = new Stack()
newStack.push("data 1")
newStack.push("data 2")
newStack.push("data 3")
newStack.pop()

console.log(newStack.getElements())