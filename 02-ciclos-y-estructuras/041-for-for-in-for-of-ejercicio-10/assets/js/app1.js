// Función que calcula un precio con el IVA
let calcularIVA = (precio, IVA) => {
    // return precio*(1+IVA);
    return precio + (precio * IVA);
}

// Función que calcula un precio despues de aplicar un descuento
let calcularDescuento = (precio, descuento) => {
    return precio - (precio * descuento);
}

let pedirDatos = () => {
    let productos=[];
    while (true) {
        let nombre          = prompt("Introduzca el producto que desea");
        let precio          = +prompt("Introduzca el precio del producto");
        let descuento       = +prompt("Introduzca el descuento del producto");
        let IVA             = +prompt("Introduzca el IVA del producto");
        let unidades        = +prompt("Introduzca la unidades del producto");

        productos.push({nombre,precio,descuento,IVA,unidades});

        let masProductos=prompt("Quiere introducir más productos");

        if (masProductos==="No"){
            break;
        }
    }

    return productos;
}

let productos=pedirDatos();

console.log(productos);

resultadoFinal = (precio,iva) => {

    return precio + iva

}

resultadoFinal(calcularDescuento(productos));

console.log(productos[0].nombre);