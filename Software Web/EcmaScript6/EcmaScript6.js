// 8 CARACTERISTICAS DE ECMASCRIPT 6

/* Modo estricto, buenas practicas para tu codigo de javascript. 
 * Información sobre restricciones en: https://www.w3schools.com/js/js_strict.asp
 */

'use strict'

// 1) LET
// ---------------------------------------------------------------------------------


if (true) {
    var year = 2017;
    let age = 25;
}

console.log("Year " + year);
console.log("Age " + age);


// 2) CONST
// ----------------------------------------------------------------------------------


const MY_CONSTANT = 2017;


// 3) FUNCIONES
// ----------------------------------------------------------------------------------


var fOld = function (s) {
    console.log("Funcion antigua: " + s);
}

var fNew = (s) => {
    console.log("Funcion nueva: " + s);
}

fOld("Hola");
fNew("Hola");


var fNewValues = (s,... values) => {
    console.log(s + values);
}

fNewValues("Hello ",5,6,"si",8,"Bye");


// 4) POO
// ----------------------------------------------------------------------------------


class Square {
    constructor(width) {
        this.width = width;
    }

    getArea() {
        return this.width*this.width;
    }
}

var square = new Square(10);
console.log(square.getArea());


// 5) DESTRUCTURING
// ----------------------------------------------------------------------------------

var foo = ["one", "two", "three"];

// Sin destructuring
var one = foo[0];
var two = foo[1];
var three = foo[2];

// Con destructuring
var [one, two, three] = foo;


// 6) GENERADORES
// ----------------------------------------------------------------------------------


function *generator (i) {
    yield i;
    yield i + 1;
    yield i + 2;
}

var gen = generator(1);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// 7) COLECCIONES
// ----------------------------------------------------------------------------------

let map = new Map();
map.set(123, true);
map.set("Hola", "Saludos");
map.set("Adios", "Despedida");

map.forEach((v,k) => {
    console.log(k + ' : ' + v);
});

//------------------------------

let set = new Set();

set.add(123);
set.add("string");
set.add(true);
set.add("string");

for(let item of set) {
    console.log(item);
}

// 8) PROMISES
// ----------------------------------------------------------------------------------

// Ejemplo: Queremos leer un archivo de texto y despues de leerlo limpiarlo.

var fs = require('fs');

// Sin promesas

fs.readFile('texto.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString());

    fs.writeFile('texto.txt', '', (err) => {
        if(err) {
            throw err;
        }
    });
});

// Con promesas

var readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) {
                return reject('error reading file');
            }
            resolve(data);
        });
    });
};

var writeFile = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if(err) {
                return reject('error writing file');
            }
            resolve();
        });
    });
};

readFile('texto.txt')
    .then(content =>  {
        console.log(content.toString());
        writeFile('texto.txt', '');
    })
    .catch(error => console.log(error));

