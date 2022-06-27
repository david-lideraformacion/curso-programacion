// Apertura tienda
// 11:00 entre semana
// 9:00 fin de semana

let dia=14; // 0: Domingo, 1: Lunes ... 6: Sabado
let horaActual=28;

let horaApertura;
let horaCierre=20;


if (dia>=1 && dia <=5){
    horaApertura=11;
}
else{
    horaApertura=9;
}

console.log({dia});
console.log({horaApertura});
console.log({horaActual});

// Evaluación FULL
// Intervalos de hora
// Optimización de if's
if ((dia>=1 && dia<=5) && horaActual>=horaApertura && horaActual<horaCierre){
    console.log("Es un dia de semana y estamos abiertos");
}
// si llega antes de la horaApertura entonces, también llegara antes de la hora cierre
else if ((dia>=1 && dia<=5) && horaActual<horaApertura){
    console.log("Es un dia de semana y abrimos a las 11");
}
// si llega despues de la hora de cierre entonces, también llegara despues de la hora de Apertura
else if ((dia>=1 && dia<=5) && horaActual>horaCierre){
    console.log("Es un dia de semana y ya estamos cerrado");
}
// ----
else if ((dia === 6 || dia===0) && horaActual>=horaApertura && horaActual<horaCierre){
    console.log("Es un dia de fin de semana y estamos abiertos");
}
else if ((dia === 6 || dia===0) && horaActual<horaApertura){
    console.log("Es un dia de fin de semana y abrimos a las 9");
}
// si llega despues de la hora de cierre entonces, también llegara despues de la hora de Apertura
else if ((dia === 6 || dia===0) && horaActual>horaCierre){
    console.log("Es un dia de fin de semana y ya estamos cerrado");
}
else{
    console.log("Los datos no son correctos");
}
    