function separador(mensaje:any) {
    console.log("****************"+mensaje+"*************");
}

separador("");
let nombres:string[]=["Natalia","Lucia","Iago"];
console.log(nombres);
nombres.push("Nombres");

separador("");
console.log("nombres[2]: ",nombres[2]);
console.log("nombres[2][1]: ",nombres[2][1]);
console.log("nombres[2].charAt(1): ",nombres[2].charAt(1));

separador("");
let numeros:number[]=[1,2,3,4];
numeros.push(5);
console.log(numeros);

separador("");
console.log("numeros.length:",numeros.length);
console.log("numeros[2]",numeros[2]);

separador("Programación funcional MAP");