class NodeStack{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.top = null;
        this.botton = null;
        this.lenght = 0;
    }

    //metodo peek, sirve para seleccionar un elemento, y este elemento siempre es el elemento que esta arriba. el ultima en entrar es el primero en salir.
    peek(){
        return this.top;
    }

    push(value){
        const newNode = new NodeStack(value);
        if (this.lenght === 0) {
            this.top = newNode;
            this.botton = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.lenght++;

        return this;
    }

    pop(value) {
        if (this.lenght === 0) {
            return console.log("La pila esta vacia");
        } else if (this.top === this.botton) {
            this.top = null;
            this.botton = null;
            this.lenght--;
            return this;
        } else {
            this.top = this.top.next;
            this.lenght--;
            return this;    
        } 
    }
}

const myStack = new Stack();