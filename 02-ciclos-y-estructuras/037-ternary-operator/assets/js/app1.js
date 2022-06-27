// Apertura tienda
// 11:00 entre semana
// 9:00 fin de semana

let dia=6; // 0: Domingo, 1: Lunes ... 6: Sabado
let horaActual=9;

let horaApertura;
let horaCierre=20;

if (dia>=1 && dia <=5){
    horaApertura=11;
}
else{
    horaApertura=9;
};

if (dia>6 || dia<0) {
  return 'El dia no es valido'
} else {
  return 'El dia es valido'
};

if (condition) {
  
}