//const array = ["Gustavo", "Zacha", "Norma"];

// Creamos la clase
class MyArray {
    // Creamos el constructor
    constructor() {
        // llegaremos el conteo de cuantos elementos tenemos dentro del Array
        this.length = 0;
        // En data guardaremos todos los elementos nuevos que ire agregando
        this.data = {}
    }

    // Con get obtendremos lo que necesitamos
    get(index) {
        return this.data[index];
    }

    // push resive un parametro (item), este sera el elemento que se agregara a nuestro array
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    // pop elimina el ultimo elemnto del array
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1]
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }

    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];            
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    addFirst(item) {
        this.unshift(0);
        this.data[0] = item;
        return item;
    }
    
    shift () {
        const firstItem = this.data[0]
        delete this.data[0]
        this.length--
        shiftIndex(0)
        return firstItem
    }
    
}

const myArray = new MyArray();

// Hasta ahora he implementado los siguientes métodos: forEach, at, concat, copyWithin, filter, find, findIndex, flat, includes, every, join, toString, indexOf, keys, values, entries, get, push, pop, shift, unshift, delete, splice, reduce.
// generar un metodo para poder agregar un elemento al inicio de nuestro Array y de la misma forma de eliminar un elemento al inicio del Array 