// Función que recibe la edad
const mayorEdad=(edad)=>{
    return edad>=18?'Es mayor de edad':'Es menor de edad';
}

// Función que recibe un arreglo con la edad de la persona
const mayorEdadArr=(persona)=>{
    return persona[0]>=18?'Es mayor de edad':'Es menor de edad';
}

// Función que recibe un objeto con la edad de la persona
const mayorEdadObj=(persona)=>{
    return persona.edad>=18?'Es mayor de edad':'Es menor de edad';
}


let edad=+prompt("Introduzca la edad del usuario");

console.log(mayorEdad(edad));
console.log(mayorEdad([edad]));
console.log(mayorEdad({edad}));



