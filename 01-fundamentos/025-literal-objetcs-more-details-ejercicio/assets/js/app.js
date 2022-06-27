let mueble = {

};

let nameProperty = prompt ( 'Deme el nombre de la propiedad');

let valueProperty = prompt('Deme un valor');

mueble[nameProperty] = valueProperty

console.log(mueble);

nameProperty = prompt('Deme el nombre da eliminar');

delete mueble[nameProperty];

console.log(mueble);
