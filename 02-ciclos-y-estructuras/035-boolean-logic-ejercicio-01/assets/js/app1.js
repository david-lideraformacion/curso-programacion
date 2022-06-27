let numero = parsefloat(prompt('Introduzca un numero '));

if (numero%2 ===0 && numero%3===0) {
  console.log('El numero es par y multiplo de 3');
} else {
  console.log('El numero no es par ni multiplo de 3');
}