// Protip: Operador Ternario

let sumar1 = (numA) => {
    return numA + 1;
}

let restar1 = (numA) => {
    return numA - 1;
}

let elMayor1 = (numero1, numero2) => {
    // Aunque las parametros se llamen igual que las variables
    // esto es una variable de ESTA función
    // y su alteración no altera la variable que esta fuera
    numero1=numero1*2;
    return (numero1>numero2)?numero1:numero2;
}

let elMayor2=(a,b) =>{
    // if (a>b)
    //     return sumar1(a);
    // else
    //     return restar1(b);
    return (a>b)?sumar1(a):restar1(b);
}

// Estas son variables del programa
let numero1=5;
let numero2=6;

console.log(elMayor1(numero1,numero2));
console.log(elMayor2(numero1,numero2));

console.log(numero1,numero2);


console.log("----------------------");

let tieneMembresia2=(miembro) =>{
    return (miembro[1])?"2 dolares":"10 dolares"
}

let tieneMembresia3=(miembro) =>{
    return (miembro.membresia)?"2 dolares":"10 dolares"
}

// se le pasa un arreglo como parametro
console.log(tieneMembresia2(["Carlos",false]));

// se le pasa un objeto como parametro
console.log(tieneMembresia3({nombre:"Carlos",membresia:false}));

// se le pasa solo una propiedad de un objeto como parametro
let tieneMembresia4=(miembro) =>{
    return (miembro)?"2 dolares":"10 dolares"
}

let miembro={
    nombre:"Carlos",
    membresia:true
}

console.log("Membresia4:",tieneMembresia4(miembro.membresia));
console.log("Membresia4:",tieneMembresia4(true));

