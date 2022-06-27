const contarRepeticionesLetrasFor=(frase,letra)=>{
    let numLetras=0;
    for (let i = 0; i < frase.length; i++) {
        if (letra===frase[i]){
            // numLetras=numLetras+1;
            numLetras++;
        }
    }
    return numLetras;
}

const contarRepeticionesLetrasWhile=(frase,letra)=>{
    let numLetras=0,
        i=0;
        while(i < frase.length) {
            if (letra===frase[i]){
                // numLetras=numLetras+1;
                numLetras++;
            }
            i++;
        }
    return numLetras;
}

const contarRepeticionesLetrasDoWhile=(frase,letra)=>{
    let numLetras=0,
        i=0;
        do{
            if (letra===frase[i]){
                // numLetras=numLetras+1;
                numLetras++;
            }
            i++;
        }while(i < frase.length);
    return numLetras;
}



let frase=prompt("Introduzca la frase");
let letra=prompt("Introduzca la letra a buscar");

console.log(`La letra ${letra} aparece en ${frase}, ${contarRepeticionesLetrasFor(frase,letra)} veces`);
console.log(`La letra ${letra} aparece en ${frase}, ${contarRepeticionesLetrasWhile(frase,letra)} veces`);
console.log(`La letra ${letra} aparece en ${frase}, ${contarRepeticionesLetrasDoWhile(frase,letra)} veces`);