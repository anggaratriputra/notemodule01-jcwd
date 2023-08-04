class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element) {
        const node = new Node(element);

        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size += 1;
    }

    printList(){
        let current = this.head;
        while(current){
            console.log(current.element);
            current = current.next;
        }
    }
}

const imageViewer = new LinkedList();
imageViewer.add("1.jpeg")
console.log(imageViewer.head);
imageViewer.add("2.jpeg")
console.log(imageViewer.head);