//clase Node, sirve para crear nuevos nodos.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;

        this.length = 1;
    }
}