let calcularNotaNominal=(nota)=>{
    return (nota<5)?"Insuficiente":
           (nota<6)?"Suficiente":
           (nota<7)?"Bien":
           (nota<9)?"Notable":"Sobresaliente";
}

let nota=+prompt("Introduzca la nota numérica del alumno");

if (isNaN(nota)){
    console.log("Datos incorrectos");
}
else{
    console.log(calcularNotaNominal(nota));
}