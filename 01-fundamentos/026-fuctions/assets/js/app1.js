//Funciones tradicionales 
//Funcion que no retorna valores y no recibe argumentos 

function saludar() {
    console.log('Hola');
    
};
//Llamar o invocar a la funcion 
separador('saludar');

// Funciones anonimas 
// NO llevan nombre de funcion en su declaracion
// Se almacenan en una variable/constante
// La funcion se identifica con el nombre de la variable/contstante que la almacena

const saludar2=function() {
    console.log('Hola desde funcion anonima');
    
};
separador('saludar2');
saludar2();
console.log(saludar2);

// Funcion vacia
const vacia=function () {
    
};
// Argumentos en las funciones
function saludar3(personaASaludar) {
    console.log('Hola '+ personaASaludar);
    
};

let nombrePersona = 'Olga';

// Argumetnos enlas funciones 
// En este caso la variable y el argumento poseen el mismo nombre
//NOTA:
//Tomando en cuenta que una funcion debe 
//Retornar un valor (en este caso por no usar return)
// esta funcion podria 'con ojos de cariño' verse como una FUNCION LIMPIA

function saludar4(nombrePersona) {
    console.log('Hola' + nombrePersona);
    
};  

nombrePersona= 'olga';

saludar4(nombrePersona);

nombrePersona = 'Tita';
saludar4(nombrePersona);

console.log('Final ' + nombrePersona);


function saludar5(nombrePersona) {
    nombrePersona = 'PETRONILA'
    console.log('Hola' + nombrePersona);
    
};

nombrePersona = 'Olga'
saludar5(nombrePersona);

console.log(nombrePersona);

function saludar6(nombrePersonaXYZ) {
    nombrePersona = 'GUMERSINDA';
    nombrePersonaXYZ = 'PETRONILA';
    console.log('Hola' + nombrePersona);
    console.log('Hola' + nombrePersonaXYZ);

};

nombrePersona = 'Olga';
saludar6(nombrePersona);

nombrePersonaXYZ = 'JERONIMA';
console.log(nombrePersonaXYZ);
saludar6(nombrePersonaXYZ);

// NOTA: 
// arguments es aplicable a funciones declaradas tradicionalmente con
// function y nombre de la funcion

function saludarPersona(nombrePersonaXYZ) {
    console.log(arguments);
    console.log('Hola '+ nombrePersonaXYZ);
};

nombrePersona='Carmen';
saludarPersona(nombrePersona,28,true, {profesion: 'Biologa'}, ['a', 'b', 'c']);