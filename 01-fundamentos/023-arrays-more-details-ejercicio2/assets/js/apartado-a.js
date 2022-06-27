
let myArray = ["Cero",'Uno','Dos','Tres','Cuatro','Cinco'];
console.log({myArray});

let position = parseInt(prompt('Introduce la posicion'));

let elements = parseInt(prompt('Introduce la cantidad de numeros que deseas borrar'));

let newArray = myArray.splice(position,elements);

console.log(myArray);
console.log(newArray);












