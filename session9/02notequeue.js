class Queue {
    #container = [];

    enqueue(element) {
        this.#container.push(element);
    }

    dequeue() {
        this.#container.shift();
    }

    getElements(){
        return this.#container;
    }

    getCurrent(){
        return this.#container[0];
    }
}

const todoList = new Queue();
todoList.enqueue("masak");
todoList.enqueue("menyapu");
todoList.enqueue("menyetrika");

console.log(todoList.getElements());

console.log(`Mulai melakukan : ${todoList.getCurrent()}`);
todoList.dequeue();
console.log(`Mulai melakukan : ${todoList.getCurrent()}`);
todoList.dequeue();
console.log(`Mulai melakukan : ${todoList.getCurrent()}`);
todoList.dequeue();




