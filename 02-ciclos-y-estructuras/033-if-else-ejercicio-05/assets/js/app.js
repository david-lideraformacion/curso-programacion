//IMPORTANTE
//Primitivos => VALOR
//Objetos y Arreglos => REFERENCIA
separador("POR VALOR");
separador("PRIMITIVOS - Number");
let myNum1 = 3;
let myNum2 = myNum1;

console.log("myNum1:", myNum1);
console.log("myNum2:", myNum2);

myNum1 = 7;

console.log("myNum1:", myNum1);
console.log("myNum2:", myNum2);


separador("PRIMITIVOS - String");
let myStr1 = "Primer String";
let myStr2 = myStr1;

console.log("myStr1:", myStr1);
console.log("myStr2:", myStr2);

myStr1 = "String modificado";

console.log("myStr1:", myStr1);
console.log("myStr2:", myStr2);

//----------
separador("POR REFERENCIA");
separador("Objetos");
let myObj1 = {};
let myObj2 = myObj1;

console.log("myObj1:", myObj1);
console.log("myObj2:", myObj2);

// Al añadir una propiedad a uno de los objetos
// sera pasada por referencia a TODOS los
// objetos involucrados

// Añadir nombre a myObj1
myObj1.nombre = "Daniel";

console.log("myObj1:", myObj1);
console.log("myObj2:", myObj2);

// Añadir apellidos a myObj2
myObj2.apellidos = "Meijomil Gutierrez";

console.log("myObj1:", myObj1);
console.log("myObj2:", myObj2);

//--------

let myArray1 = [0, 1, 2];
let myArray2 = myArray1

// Modificar un valor en el arreglo 1 
myArray1[1] = 11;
console.log("myArray1", myArray1);
console.log("myArray2", myArray2);

// Añadir un elemento al arreglo
myArray1.push(22);
console.log("myArray1", myArray1);
console.log("myArray2", myArray2);