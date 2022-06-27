let numeroPar = (numero) => {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false
  }
};


let numero = parseFloat(prompt('Introduzca un numero'));

numeroMultiploDe3 = (numero) => {
  if (numero % 3 === 0) {
    return true

  } else {
    return false
  }
};

let numeroParMultiploDe3= (numero) =>{
  if (numeroPar(numero) && numeroMultiploDe3(numero)){
    return true ;
  }
  else {
    return false ;
  }
};

if (numeroParMultiploDe3(numero)) {
  console.log(`El numero ${numero} es par y multiplo de 3`);

} else {

  console.log(`El numero ${numero} no es par ni multiplo de 3`);
}