//Todo lo que implementamos desde el costructor y el metodo hashMetod
//Es una hash function que nunca tendremos que aplicarla en codigo
//Ya que podremos usarla de otras fuente y no hay necesidad de construirla
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);
        //Con esto le estamos diciendo que si ya existeuna direccion con informacion 
        //No reescribas si mas bien agrega otro array a esa posicion y ya despues poder tener acceso
        // a esa informacion
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    getKeys() {
        const keys = [];
        this.data.forEach((bucket) => {
            bucket.forEach((keyPairValues) => {
                keys.push(keyPairValues[0]);
            });
        });
        return keys;
    }

    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
              const value = currentBucket[i];
              currentBucket.splice(i, 1);
              return value;
            }
          }
        }
        return undefined;
      }
}

//Generamos la instancia de mi clase hasttable y le estoy diciendo que necesito
//50 espacios libres para la hashtable
//Para tener espacios libres y empiece a guardar informacion ahi

const myHashTable = new HashTable(50);
myHashTable.set('Diego', 1990);
myHashTable.set('Mariana', 1998);
myHashTable.set('mama', 1966);
myHashTable.set('elena', 2000);
myHashTable.get('franz');
myHashTable.keys();
myHashTable.delete('mama');
myHashTable.keys();