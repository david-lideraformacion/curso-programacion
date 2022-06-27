let frase = prompt('Introduzca una frase');
let letra = prompt('Introduzca una letra de la frase');


funcionForIn=(frase,letra)=> {

    let numLetras = 0
    
    for ( let  i  in frase) {
        if (letra===frase[i]){
           
            numLetras++;
        
        
    }
    
} 
return numLetras

}

console.log(funcionForIn (frase,letra));


funcionForOf= (frase,letra) => {

    let numLetras = 0

    for (let caracter of frase ) {


        if(letra===caracter){

            numLetras++
        }
        
    }
};
