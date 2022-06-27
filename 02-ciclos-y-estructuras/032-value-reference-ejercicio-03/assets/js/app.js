let myArray1 = ['David', 'Oscar', 'Jesus', 'Ana'];
let myArray2 = myArray1
console.log(myArray1);
console.log(myArray2);

myArray1.push('Sara');
console.log(myArray1);
console.log(myArray2);

myArray2[2] = 'olivia';
console.log(myArray1);
console.log(myArray2);

let myArray3 = [...myArray1];

myArray3[3] = 'Lucia';
myArray3.shift()
console.log(myArray1);
console.log(myArray2);
console.log(myArray3);