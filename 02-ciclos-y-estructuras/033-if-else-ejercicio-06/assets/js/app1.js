let persona1 = {
    nombre: "Andrea",
    edad: 28
}

let persona2 = persona1;

console.log("persona1:", persona1);
console.log("persona2:", persona2);

persona2.nombre = "Ya no se llama Andrea";

console.log("persona1:", persona1);
console.log("persona2:", persona2);

let arreglo1 = ["Andrea", 28];
let arreglo2 = arreglo1;

console.log("arreglo1:", arreglo1);
console.log("arreglo2:", arreglo2);

arreglo1[0] = "Ya no se llama Andrea";

console.log("arreglo1:", arreglo1);
console.log("arreglo2:", arreglo2);


let nombre1 = arreglo1[0];
let nombre2 = nombre1;

console.log("nombre1:", nombre1);
console.log("nombre2:", nombre2);

nombre2 = "Andrea";

console.log("nombre1:", nombre1);
console.log("nombre2:", nombre2);