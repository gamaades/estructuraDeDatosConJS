class NodeQueue {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor () {
        // Elemento Superior
        this.first = null;
        // Elemento Inferior
        this.last = null;
        this.length = 0;
    }

    // Seleccionar el primer ingresado
    peek () {
        return this.first;
    }

    // Agregar al final de la cola
    enqueues (value) {
        const newNode = new NodeQueue(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;

        return this;
    }

    dequeues () {
        // Validar si hay elementos para borrar
        if (this.length === 0) {
            return "No hay datos para borrar";
        }
    
        // Validar si al borrar la Pila quedará vacia
        if (this.length === 1) {
            this.first = null;
            this.last = null;
            this.length--;
            return this;
        }
            
        // Borrar
        this.first = this.first.next;
        this.length--;
        return this;
    }

}

const myQueue = new Queue();
// Newcola.enQueues(1)
// Newcola.enQueues(2)
// Newcola.enQueues(3)