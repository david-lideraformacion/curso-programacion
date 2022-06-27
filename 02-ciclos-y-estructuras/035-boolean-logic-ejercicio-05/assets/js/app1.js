let puntuacion = parseFloat(prompt('Introduzca la puntuacion'));


empresaPuntuacion = (puntuacion) =>{
if(puntuacion<0.0){
    return 'Negativo'
    //let salario = 2400*00 
    //console.error('Negativo');
    //console.log(salario);
}
else if(puntuacion<0.4){

    return 'Rendimiento: Insuficiente'
    //console.log('Insuficiente');


} else if (puntuacion<0.6) {

    return 'Rendimiento: Aceptable'
    //console.log('Aceptable');


} else {

    return 'Rendimiento: Meritorio'}};
   // console.log('Meritorio')}};

 console.log(empresaPuntuacion(puntuacion));

 let sueldo = (puntuacion,sueldo) => {
    return puntuacion * sueldo 
 }

let sueldoEmpleado = 2400

console.log(`Su puntuación nominal es ${calcularPuntuacionNominal(puntuacionEmpleado)}`);
console.log(`Su sueldo es ${calcularSueldo(puntuacionEmpleado,sueldoEmpleado)}`);

  