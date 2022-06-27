
// Función tradicional
function generarNombre(nombre,apellidos) {
    return "Hola "+nombre+", "+apellidos;
}

// Función de flecha
const generarNombre1=(nombre,apellidos) => {
    return "Hola "+nombre+", "+apellidos;
}

// Función de flecha acortada
const generarNombre2=(nombre,apellidos) => "Hola "+nombre+", "+apellidos;

// Función de flecha con interpolación de strings
const generarNombre3=(nombre,apellidos) => {
    return `Hola ${nombre}, ${apellidos}`;
}

let nombre      = prompt("Deme su nombre");
let apellidos   = prompt("Deme sus apellidos");

let nombreCompleto=generarNombre(nombre,apellidos);

console.log(nombreCompleto);

console.log(generarNombre(nombre,apellidos));



