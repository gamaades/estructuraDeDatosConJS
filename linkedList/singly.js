// Lista de nodos
// 1 --> 2 --> 3 --> 4 --> 5 --> null
//Estructura de datos Singly List ( es como se veria en simples palabras)
/* let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
} */

//clase Node, sirve para crear nuevos nodos.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// creando la clase singlyList
class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;

        this.lenght = 1;
    }

    append(value) {
        const newNode = new Node(value);

        // esta linea agrea un nuevo nodo, lo unico que falta es sacar el null
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght++;

        return this;
    }

    //agrega un nuevo nodos en la cabeza
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.lenght++;

        return this;
    }

    insert(index, value) {
        if (index >= this.lenght) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.lenght++;

        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index, value){ //Rehubica un nodo al final del link
        const firstPointer = this.getTheIndex(index - 1);
        const secondPointer = this.getTheIndex(index + 1);
        firstPointer.next = secondPointer;
        this.append(value);
        this.lenght--;
        return this;
}
}

let myLinkedList = new MySinglyLinkedList(1);