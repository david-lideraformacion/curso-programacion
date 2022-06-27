
const promedioFor=(...valores)=>{
    let suma=0;
    for (let i = 0; i < valores.length; i++) {
        // suma=suma+valores[i];
        suma+=valores[i];
    }
    return suma/valores.length;
}

const promedioWhile=(...valores)=>{
    let suma=0,
        i=0;
    while(i < valores.length) {
        // suma=suma+valores[i];
        suma+=valores[i];
        i++;
    }
    return suma/valores.length;
}

const promedioDoWhile=(...valores)=>{
    let suma=0,
        i=0;
    do{
        // suma=suma+valores[i];
        suma+=valores[i];
        i++;
    }while(i < valores.length);
    return suma/valores.length;
}

console.log(promedioFor(4,5));
console.log(promedioWhile(5,5,10));
console.log(promedioDoWhile(2,5));



