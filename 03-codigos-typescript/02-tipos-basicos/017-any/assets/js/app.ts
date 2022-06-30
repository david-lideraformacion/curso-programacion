let miNombre:any;
let miApellido:string="Rudolf Budiño";
let miEdad:number=44;

function tratamientoDatos(nombre:any,apellidos:any,edad:any) {
    console.log(typeof nombre);

    if (typeof nombre==="string"){
        console.log(`Mi nombre completo es ${nombre} ${apellidos}, y tengo ${edad} años`);
    }
    else if (typeof nombre==="number"){
        console.log(`Parámetro ${miNombre} con tipo incorrecto`,"apellidos: ",apellidos,"edad: ",edad);
    }
    else if (typeof nombre==="boolean"){
        console.log(`Aunque el hecho de poseer un nombre convierte el valor de verdad de esta propiedad a "true", yo no me llamo true`, "apellidos: ", apellidos,"edad: ", edad);
    }
}

console.log("***************");
miNombre="Natalia";
console.log(miNombre);
tratamientoDatos(miNombre,miApellido,miEdad);

console.log("***************");
miNombre=123;
console.log(miNombre);
tratamientoDatos(miNombre,miApellido,miEdad);

console.log("***************");
miNombre=true;
console.log(miNombre);
tratamientoDatos(miNombre,miApellido,miEdad);
