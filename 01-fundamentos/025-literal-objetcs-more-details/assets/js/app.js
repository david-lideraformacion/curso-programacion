// Los objetos literales tambien conocidos como : 
// Objetos JavaScript

let myObject = {};

myObject = {
    name : 'David',
    familyName : 'Garcia Parente',
    age : 22,
    canThink : true,
    bDate: {
        day: 04,
        month: 10,
        year: 1971
    }
}

// puedo declarar e inicializar una variable con el mismo nombre que la propiedad del objeto 
// y utiizarla para cualquier fin 
let familyName
     familyName = myObject.familyName;

// Es posible usar la variavle que contiene el valor de la propiedad de un console.log
console.log('Family Name from variable:', myObject.familyName);

// Es posible imprimir la propiedad meidante la notacion de punto 

console.log('Family Name from variable:', familyName);

console.log('**************');
console.log(myObject);

// Tambien es posible acceder a una propiedad de un objeto utilizando la notacion de corchete 
console.log('Family Name from object:', myObject['familyName']);

console.log('Family Name from object:', myObject['familyName'][0]);

// Solo funciona con streams y obtiene un subcadena dentro de una cadena 
// (1,2)-> de Daniel obtiene (an)

console.log('Family Name from object;', myObject['familyName'].slice(0,3));

let bDate ;
    bDate = myObject.bDate;
    console.log(bDate);
    console.log('Day:', bDate.day);

// Un numero NO ES un array 
console.log('Day:',bDate.day[0]);

const x = 'canThink';
console.log(myObject[x]);


