let datos = {
    nombre:'', 
    apellidos: '',
    direccion:'', 
    altura: 0,
};

datos.nombre = prompt('Introduzca su nombre');
datos.apellidos = prompt('Introduzca sus apellidos');
datos.direccion = prompt('Introduzca su direccion');
datos.altura = parseFloat(prompt('Introduzca su altura'));

let propiedades = Object.entries(datos);

console.log(propiedades.length);