separador("FOR");

let letras=["a","b","c","d","e"];
for (let index = 0; index < letras.length; index++) {
    console.log(letras[index]);
}

// Es equivalente
// let index=0;
// while (index<letras.length) {
//     console.log(letras[index]);
//     index++;
// }

// Imprimo los números del 0 al 9
for (let i=0;i<10;i++){
    console.log("i:",i);
}

// Imprimo los números del -1 al 9
for (let j=-1;j<10;j++){
    console.log("j:",j);
}

for (let k=0;k<=20;k+=3){
    console.log("k:",k);
}

