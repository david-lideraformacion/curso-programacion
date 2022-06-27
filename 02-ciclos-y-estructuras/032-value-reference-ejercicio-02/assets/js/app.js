let objeto1 = {};
let objeto2 =  objeto1
console.log(objeto1);
console.log(objeto2);

objeto1.nombre = 'David'
console.log(objeto1);
console.log(objeto2);

objeto2.apellidos = 'Garcia'
console.log(objeto1);
console.log(objeto2);

let objeto3 = objeto1
objeto3.edad = 24
console.log(objeto1);
console.log(objeto2);
console.log(objeto3);

let objeto4 = {...objeto1};

objeto4.nombre = 'Oscar';
objeto4.apellidos = 'Perez';
console.log(objeto1);
console.log(objeto2);
console.log(objeto3);
console.log(objeto4);



