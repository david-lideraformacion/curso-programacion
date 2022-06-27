// FUNCIONES TRADICIONALES
// función que crea y retorna 
// un objeto
function crearPersona(nombre,apellidos) {
    return{
        nombre:nombre,
        apellidos:apellidos
    }
}

let persona=crearPersona("Daniel","Meijomil");

console.log("crearPersona:",persona);

function crearPersona2(nombre,apellidos) {
    return{
        nombre,
        apellidos
    }
}

persona=crearPersona3("Daniel","Meijomil");

console.log("crearPersona3:",persona);

function crearPersona3(nombre,apellidos) {
    return{nombre,apellidos}
}

persona=crearPersona3("Daniel","Meijomil");

console.log("crearPersona3:",persona);

// FUNCIONES DE FLECHA
let crearPersona4=(nombre,apellidos) =>{
    return {nombre,apellidos};
}

persona=crearPersona4("Daniel","Meijomil");

console.log("crearPersona4:",persona);


// Notación especial para funciones de flecha
// que poseen una soola línea y que esta contiene 
// return
//
// Permite:
// Omitir las llaves {} de inicio y final
// de función
// Omitir la palabra reservada return
// Al retornar un objeto debe ir entre
// parentesis ya () que las llaves {} que 
// lo delimitan interpretan como
// inicio y fin de función
let crearPersona5=(nombre,apellidos) => ({nombre,apellidos})

persona=crearPersona5("Daniel","Meijomil");

console.log("crearPersona5:",persona);

// ARGUMENTOS
function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(25,true,["x","y","z"]);

let imprimeArgumentos2 = (...arguments) =>{
    console.log("arguments2",arguments);
    console.log("arguments[0]:",arguments[0]);
}

imprimeArgumentos2(25,true,["x","y","z"]);

// NOTA IMPORTANTE
// los argumentos enumerados y separados por coma
// previo a ...arg se extraeran del arreglo de
// argumentos
let imprimeArgumentos3=(edad,dni,...arg) =>{
    console.log("argumentos3",
    "edad",edad,
    "dni",dni,
    "arg",arg);
}

imprimeArgumentos3(25,true,["x","y","z"]);


// CONSIDERACIÓN
// Los datos que se reciben de fuentes externas
// son susceptibles a cambios en su estructura
imprimeArgumentos3(2020,25,true,["x","y","z"]);

// Desestructuracion de arreglos 
let numeros = [4,15,78];

let [numero1,numero2,numero3] = numeros;
console.log(numero1,numero2,numero3);

let personas = [
    {nombre: 'Daniel', edad: 23},
    {nombre: 'Carlos', edad: 50}
];

let [personas1] = personas;
console.log(personas1.edad);


// Desestrucuracion de objetos 
let = coche = {
        marca: 'Ford',
        modelo: 'Focus',
        matricula: '15549M'
};

let {modelo,marca,matricula} = coche

// En el objeto da igual el orden siempre coje el orden correcto 
// Ejemplo arriba con modelo y marca
// En el objeto tienes que poner su nombre sino dara undefined



// Desestructuracion de argumentos 
const crearCoche =( marca,modelo) =>{
    return{
        marca,
        modelo
    }
};

coche = crearCoche('Citroen', 'DS3')
console.log(coche);


coche = crearCoche({modelo:'Clio', marca:'Renault'});
console.log(coche);