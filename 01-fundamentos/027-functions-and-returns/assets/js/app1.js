separador('Retorno de saludarPersona');

function saludarPersona(nombrePersonaXYZ) {
    console.log(arguments);
    console.log('Hola ' + nombrePersonaXYZ);
    
    //return1;
    //return 'PEPA'
    //return {proferion: profesor}
    //return[1, 2, 3]

    //NUNCA SE EJECUTARA, ya que esta sentencia esta despues del return 
    // return devolvera lo especificado en el y devolvera el flujo 
    // del programa al lugar desde el cual la funcion fue invocada
    console.log('Mensaje posterior al return');
};

nombrePersona = 'Carmen';

let retornoDeSaludarPersona;
retornoDeSaludarPersona = saludarPersona(nombrePersona);

console.log({
    retornoDeSaludarPersona
});

function sumar(a, b) {
    return a + b;
    
};

let sumar2 = (a, b) => {
    return a + b 
};

console.log('sumar', sumar(1, 2));
console.log('sumar2', sumar(3, 4));

//Notacion para funciones de flecha de SOLO ejecutan un return

let sumar3 = (a, b) => a + b

// Declaracion TRADICIONAL  de una funcion 
function programar(lenguaje) {
    console.log('Programa en ' + lenguaje);
    return  'Eres un programador de ' + lenguaje  
};

let retorno = programar('JS');
console.log({retorno});

//Transformacion de una funcion tradicional a una 
// funcion de flecha con notacion especial para
//funciones que poseen una sola linea que consiste 
// en un return separador ('Notacion especial funciones flecha)

let getAleatorio = ()=>{
    return Math.random();
}

console.log('getAleatorio: ', getAleatorio);
console.log('getAleatorio: ', getAleatorio());

let getAleatorio2=()=> Math.random();
console.log('getAleatorio: ', getAleatorio2());

