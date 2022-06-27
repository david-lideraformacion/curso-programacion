
let miObjetoPersona = {
    nombre: "David",
    apellidos: "Garcia Parente",
    estatura: "1.82",
    numerodetelefono: {
        domicilio: " 981 61 80 46",
        movil: " 679 67 59 68",
    }
};
console.log(miObjetoPersona);
// IMPORTANTE despues de cada objeto poner una coma (,)
console.log(miObjetoPersona.nombre);
// Para poner solo un objeto se pone un punto
console.log(miObjetoPersona.apellidos);
// si queremos nombrar dos objetos seria asi 
console.log(miObjetoPersona.apellidos, miObjetoPersona.nombre);
// si queremos nombrar a un objeto dentro de un objeto seria asi 
console.log(miObjetoPersona.numerodetelefono.domicilio);