let games = ["Zelda","Mario","Metroid","Chrono"];
console.log({games});

let gameslength = games.length;
console.log("longitud:", (gameslength));

let first = [0];
let last = [gameslength-1];

console.log({first,last});

console.log("Games first element:", games [first]);
console.log("Games last element:", games [last]);

// funcion de la flecha (=>)
console.log('****************');
games.forEach((element,i,arr) =>{ 
    console.log({element,i,arr});
});

//push añade un elemento al final del array 

games.push("F-Zero");
let newLengthGames = games.push("F-Zero")
// aqui solo se añadiria (F-Zero) a la nueva variable 


console.log(games);
console.log(newLengthGames);

//unshift añade un elemento al principio del array 

newLengthGames = games.unshift("Fire Emblem");
console.log(games);
console.log(newLengthGames);

// pop lo que haces es eliminar el ultimo valor del arreglo 
let game = games.pop();

console.log(games);
console.log(game);

// shift lo que hace eliminar el elemento del principio del arreglo 
game = games.shift();
console.log(games);
console.log(game);

// Eliminar un elemento de un arreglo que no posee elementos 

let myArray = [];
let elemento = myArray.pop();
console.log(elemento);

let newArray = ['Zelda','Mario','Metroid','Chrono'];

// Elimina 1 o varios elementos del arreglo 
//arreglo.splice();
//Devuelve un arreglo con el/los elementos eliminados 
// por ejemplo el splice [1, 3], borraria los elementos del 1 al 3 dejando los demas en el arreglo 
let position = 0;
let deleteGames = 0;

let newGamesArray  = newArray.splice(position,deleteGames);
console.log(newArray);
console.log(newGamesArray);

// El index.of es para que nos diga en que posicion esta el elemento en el arreglo 


let gamesToFind = "Mario";
gamesIndex = newArray.indexOf(gamesToFind);
console.log({gamesIndex});

let numbers = [4,5,6,9];
let numberToFind = 4;
let numberIndex = numbers.indexOf(numberToFind);
console.log({numberIndex});
