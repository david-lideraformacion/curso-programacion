const esPrimo=(numero)=>{
    let i=2,
        primo=true;

    // Caso, especial el número 1 no es primo por definición
    if (numero===1){
        primo=false;
    }
    
    while (i<numero) {
        // Si es divisible, el número ya no es primo
        if (numero%i===0){
            primo=false;
            break;
        }
        i++;
    }
    return primo;
}

const esPrimoDoWhile=(numero)=>{
    let i=2,
        primo=true;

    // Caso, especial el número 1 no es primo por definición
    if (numero===1){
        primo=false;
    }
    
    do{
        // Si es divisible, el número ya no es primo
        if (numero%i===0){
            primo=false;
            break;
        }
        i++;
    }while (i<numero);
    return primo;
}
let numero=+prompt("Introduzca un número");

console.log(esPrimo(numero));
console.log(esPrimoDoWhile(numero));