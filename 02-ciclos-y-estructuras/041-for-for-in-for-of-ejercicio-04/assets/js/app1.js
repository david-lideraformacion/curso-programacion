let numero = 1



esPrimo=(numero) => {
     let  primo = true

    if (numero===1) {

        primo=false
        
    }

    for (i=2;i<numero;i++) {
        if (numero%i===0 ) {

            primo=false;
            break
            
        }
    } 
    return primo
    
 }

console.log(esPrimo(numero));
