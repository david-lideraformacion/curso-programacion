// Meses
// 0: Enero
// 1: Febrero
// 2: Marzo
// ...
let monthYear=[
    "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiempre","Octubre","Noviembre"
];

console.log({monthYear});

let monthYearObject={
    0:"Enero",
    1:"Febrero",
    2:"Marzo",
    3:"Abril",
    4:"Mayo",
    5:"Junio",
    6:"Julio",
    7:"Agosto",
    8:"Septiembre",
    9:"Octubre",
    10:"Noviembre",
    11:"Diciembre"
}

console.log({monthYearObject});

let monthYearObjectMethods={
    0:() => "Dia - Enero",
    1:() => "Dia - Febrero",
    2:() => "Dia - Marzo",
    3:() => "Dia - Abril",
    4:() => "Dia - Mayo",
    5:() => "Dia - Junio",
    6:() => "Dia - Julio",
    7:() => "Dia - Agosto",
    8:() => "Dia - Septiembre",
    9:() => "Dia - Octubre",
    10:() => "Dia - Noviembre",
    11:() => "Dia - Diciembre"
}


console.log({monthYearObjectMethods});


let hoy=new Date();
console.log({hoy});

let mes=hoy.getMonth();
console.log({mes});


console.log("Dia:",monthYear[mes]);

mes=6;
console.log("Dia monthYearObject[dia]:",monthYearObject[mes] || "Esto no es un mes de la semana");


// Muestra la función / métodos ya que no se invoca la misma memesnte el uso de ()
console.log("mes monthYearObjectMethods[mes]:",monthYearObjectMethods[mes] || "Esto no es un mes de la semana");

// Ejecuta la función, después de evaluar que los valores de la variable día son válidos
if (mes>=0 && mes<=11){
    console.log("mes monthYearObjectMethods[mes]:",monthYearObjectMethods[mes]());
}
else{
    console.log("Dia: monthYearObjectMethods[dia]() El valor de día no es valido")};