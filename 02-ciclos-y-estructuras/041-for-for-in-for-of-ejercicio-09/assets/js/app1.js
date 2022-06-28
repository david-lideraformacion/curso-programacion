// Defino las frutas existentes
let frutas=[
    {nombre:"Manzana",precio:0.80},
    {nombre:"Pera",precio:0.85},
    {nombre:"Platano",precio:0.50},
    {nombre:"Mango",precio:0.45},
];


// Función que calcula el precio a partir de los kilos de una determinada fruta
let calculoPrecio=(frutas,frutaBuscar,kilos)=>{
    for (let i = 0; i < frutas.length; i++) {
        let fruta=frutas[i];
        // Si encuentro la fruta, calculo el precio
        if (fruta.nombre.toLowerCase()===frutaBuscar.toLowerCase()){
            // Calculo del precio a partir de los kilos
            let precio=fruta.precio*kilos;
            // Redondeo el precio a dos decimales
            return precio.toFixed(2);
        }
    }

    // Si no existe la fruta devuelve -1
    return -1;
}


let calculoPrecioForEach=(frutas,frutaBuscar,kilos)=>{
    // For each, ejecuta la función pasada como argumento
    // por cada de elemento del arreglo
    frutas.forEach((fruta)=>{
        // Si encuentro la fruta, calculo el precio
        if (fruta.nombre.toLowerCase()===frutaBuscar.toLowerCase()){
            // Calculo del precio a partir de los kilos
            let precio=fruta.precio*kilos;
            // Redondeo el precio a dos decimales
            return precio.toFixed(2);
        }
    });
}

let fruta=prompt("Introduzca la fruta que desea");
let kilos=+prompt("Introduzca el número de kilos que desea");

let precio=calculoPrecio(frutas,fruta,kilos);


if (precio!=-1){
    console.log(`Tenemos ${fruta} en almacen. Su pedido cuesta ${precio}`);
}
else{
    console.log(`No tenemos ${fruta} disponible`);
}