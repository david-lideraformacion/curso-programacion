// Dias
// 0: Domingo
// 1: Lunes
// 2: Martes
// ...
let daysWeek=[
  "Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"
];

console.log({daysWeek});

let daysWeekObject={
  0:"Domingo",
  1:"Lunes",
  2:"Martes",
  3:"Miercoles",
  4:"Jueves",
  5:"Viernes",
  6:"Sabado"
}

console.log({daysWeekObject});

let daysWeekObjectMethods={
  0:() => "Dia - Domingo",
  1:() => "Dia - Lunes",
  2:() => "Dia - Martes",
  3:() => "Dia - Miercoles",
  4:() => "Dia - Jueves",
  5:() => "Dia - Viernes",
  6:() => "Dia - Sabado"
}


// let daysWeekObjectMethods1={
//     0:function(){
//         return "Dia - Domingo";
//     }
// }

console.log({daysWeekObjectMethods});


let hoy=new Date();
console.log({hoy});

let dia=hoy.getDay();
console.log({dia});


console.log("Dia:",daysWeek[dia]);

dia=16;
console.log("Dia daysWeekObject[dia]:",daysWeekObject[dia] || "Esto no es un dia de la semana");


// Muestra la función / métodos ya que no se invoca la misma mediante el uso de ()
console.log("Dia daysWeekObjectMethods[dia]:",daysWeekObjectMethods[dia] || "Esto no es un dia de la semana");

// Ejecuta la función, después de evaluar que los valores de la variable día son válidos
if (dia>=0 && dia<=6){
  console.log("Dia daysWeekObjectMethods[dia]:",daysWeekObjectMethods[dia]());
}
else{
  console.log("Dia: daysWeekObjectMethods[dia]() El valor de día no es valido");
}
