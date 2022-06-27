// Apertura tienda
// 11:00 entre semana
// 9:00 fin de semana

const aperturaDiaSemana=(dia) =>{
    if (dia>=1 && dia<=5){
        return 11;
    }
    else if (dia===6 || dia===0){
        return 9;
    }
    else{
        return false;
    }
}

const aperturaTienda=(horaActual,horaApertura,horaCierre)=>{
    // if (horaActual>=horaApertura && horaActual<=horaCierre){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    // Operador ternario condicion?valor_si_verdadero:valor_si_falso
    return (horaActual>=horaApertura && horaActual<=horaCierre)?true:false;
}

const crearMensaje=(apertura,horaApertura)=>{
    let periodoSemana;
    // if (horaApertura===11){
    //     periodoSemana="Hoy es un dia de semana";
    // }
    // else{
    //     periodoSemana="Hoy es un dia de fin de semana"
    // }
    periodoSemana=(horaApertura===11)?"Hoy es un dia se semana":"Hoy es un dia de fin de semana";

    let abiertoCerrado;
    // if (apertura){
    //     abiertoCerrado=" y estamos abiertos";
    // }
    // else{
    //     abiertoCerrado=" y estamos cerrados";
    // }
    abiertoCerrado=(apertura)?" y estamos abiertos":" y estamos cerrados";


    if (apertura && horaApertura===11){
        return periodoSemana+abiertoCerrado;
    }
    else if (!apertura && horaApertura===11){
        return periodoSemana+abiertoCerrado;
    }
    else if (apertura && horaApertura===9){
        return periodoSemana+abiertoCerrado;
    }
    else if (!apertura && horaApertura===9){
        return periodoSemana+abiertoCerrado;
    }
    else{
        return "'POR ABREVIAR LA RESPUESTA:' Datos erroneos";
    }
}

let dia=4;
let horaActual=13;
let horaCierre=20;
console.log("dia:",dia);
console.log("horaActual:",horaActual);
console.log("horaCierre:",horaCierre);

horaApertura=aperturaDiaSemana(dia);
console.log("horaApertura:",horaApertura);

apertura=aperturaTienda(horaActual,horaApertura,horaCierre);
console.log("apertura:",apertura);

mensaje=crearMensaje(apertura,horaApertura);
console.log(mensaje);


