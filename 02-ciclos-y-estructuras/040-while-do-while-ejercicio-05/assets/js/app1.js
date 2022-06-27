const sumarArr=(numeros)=>{
    let i=0,
        suma=0;
    while (i<numeros.length) {
        suma=suma+numeros[i];
        i++;
    }

    return suma;
}

let numeros=[1,3,4];

console.log(sumarArr(numeros));