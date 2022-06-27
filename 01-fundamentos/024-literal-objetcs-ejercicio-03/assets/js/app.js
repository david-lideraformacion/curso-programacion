

let nombre0 = prompt('Introduzca su nombre');
let apellido0  = prompt('Introduzca sus apellidos');
let edad0 = prompt('Introduzca su edad');
let direccion0 = prompt('Introduzca su direccion');
let telefonoFijo0 = prompt('Introduzca su telefono fijo');
let telefonoMovil0 = prompt('Introduzca su telefono movil')

let persona = {
    nombre: nombre0,
    apellidos:apellido0,
    edad: edad0,
    direccion: direccion0,
    telefono : {telefonoFijo: telefonoFijo0,
                telefenoMovil: telefonoMovil0,}
    };

    console.log(persona);

    let propiedad = prompt('Deme la propiedad de la cual quiere obtener el valor')


    console.log(persona[propiedad]);

