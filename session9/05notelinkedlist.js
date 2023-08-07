class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(element) {
      const node = new Node(element);
  
      if (this.head == null) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
  
      this.size += 1;
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.element);
        current = current.next;
      }
    }
  
    insertAt(element, index) {
      if (index > this.size) {
        console.log("invalid index");
        return;
      }
  
      const node = new Node(element);
      let curr = this.head;
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let prev;
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }
  
        prev.next = node;
        node.next = curr;
      }
      this.size += 1;
    }
  
    removeAt(index) {
      if (index < 0 || index > this.size) {
        console.log("invalid index");
        return;
      }
  
      if (index == 0) {
        this.head = this.head.next;
      } else {
        let curr = this.head;
        let prev;
  
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }
  
        prev.next = curr.next;
      }
  
      this.size -= 1;
    }
  }
  
  const imageViewer = new LinkedList();
  imageViewer.add("1.jpeg");
  console.log(imageViewer.head);
  imageViewer.add("2.jpeg");
  imageViewer.add("3.jpeg");
  imageViewer.add("4.jpeg");
  imageViewer.add("5.jpeg");
  imageViewer.add("6.jpeg");
  imageViewer.insertAt("new.jpeg", 4);
  imageViewer.removeAt(1);
  imageViewer.printList();
  
  const listImages = ["image1", "image2", "image3", "image4", "image5", "image6"];
  let currentIndex = 0;
  listImages[currentIndex];