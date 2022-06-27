// Definimos la función que no devuelva si tiene que tributar o no
let tributar=(edad,ingresos)=>{
    if (edad>16 && ingresos>=1000){
        // return "Tiene que tributar";
        return true;
    }
    else{
        // return "No tiene que tributar";
        return false;
    }
}

let tributarTexto=(edad,ingresos)=>{
    if (edad>16 && ingresos>=1000){
        return "Tiene que tributar";
    }
    else{
        return "No tiene que tributar";
    }
}

let imprimirHTML=(jsDiv,mensaje) => {
    document.getElementById(jsDiv).innerHTML=mensaje;
}

// Pedimos la edad y los ingresos del usuario
let edad=parseFloat(prompt("Introduzca su edad"));
let ingresos=parseFloat(prompt("Introduzca sus ingresos"));

let mensaje;

// Primera forma
if (tributar(edad,ingresos)){
    mensaje="Tiene que tributar";
}
else{
    mensaje="No tiene que tributar";
}

console.log(mensaje);

imprimirHTML('jsDiv',mensaje);


// Segunda forma
mensaje=tributarTexto(edad,ingresos);

console.log(mensaje);

imprimirHTML('jsDiv',mensaje);