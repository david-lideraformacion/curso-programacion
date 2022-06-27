let myArray = ["Cero",'Uno','Dos','Tres','Cuatro','Cinco'];
console.log({myArray});


let deleted = prompt('Introduce un valor');

let newDeleted = myArray.indexOf(deleted);
myArray.splice(newDeleted,1)
console.log(deleted);
console.log(newDeleted);

console.log({myArray});

