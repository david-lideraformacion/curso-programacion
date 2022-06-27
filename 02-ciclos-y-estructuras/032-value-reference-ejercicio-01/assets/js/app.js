let objeto1 = {};
let objeto2 = objeto1

console.log(objeto1);
console.log(objeto2);

objeto1.mueble = 'mesa'

console.log(objeto1);
console.log(objeto2);

objeto2.color = 'marron'

console.log(objeto1);
console.log(objeto2);

let objeto3 = {};
objeto3 = objeto1

objeto3.densidad = 'mucha'
console.log(objeto1);
console.log(objeto2);
console.log(objeto3);