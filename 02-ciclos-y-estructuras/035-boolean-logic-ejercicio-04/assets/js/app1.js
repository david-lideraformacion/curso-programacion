// Función que obtiene el grupo al que pertence un alumno
let obtenerGrupo=(sexo,nombre)=>{
    if ((sexo==="Mujer" && nombre<"M") || (sexo==="Hombre" && nombre>"N")){
        return "Grupo A";
    }
    else{
        return "Grupo B";
    }
}

// Pido al usuario el nombre y sexo de alumno
let nombre=prompt("Introduzca su nombre");
let sexo=prompt("Introduzca su sexo (Hombre/Mujer)");

let grupo=obtenerGrupo(sexo,nombre);

console.log(grupo);

document.getElementById("nombre").innerHTML="Nombre: "+nombre;
document.getElementById("sexo").innerHTML="Sexo: "+sexo;
document.getElementById("grupo").innerHTML=grupo;