let tributar=(edad,sueldo)=>{
    return (edad>16 && sueldo>1000)?"Tienes que tributar":"No tienes que tributar";
}

let tributarArr=(datosPersona)=>{
    return (datosPersona[0]>16 && datosPersona[1]>1000)?"Tienes que tributar":"No tienes que tributar";
}

let tributarObj=(datosPersona)=>{
    return (datosPersona.edad>16 && datosPersona.sueldo>1000)?"Tienes que tributar":"No tienes que tributar";
}

let edad=+prompt("Deme su edad");
let sueldo=+prompt("Deme su sueldo");


if (isNaN(edad) || isNaN(sueldo)){
    console.log("Datos no validos");
}
else{
    console.log(tributar(edad,sueldo));
    console.log(tributarArr([edad,sueldo]));
    console.log(tributarObj({edad,sueldo}));
};