let calcularCodigosEtiquetas = (diametro) => {
    if (diametro >= 17) {
        return 1;
    } else if (diametro >= 14) {
        return 2;
    } else if (diametro >= 10) {
        return 3;
    } else if (diametro >= 7) {
        return 4;
    } else {
        return 5;
    }
}

let calcularEtiqueta = (codigoEtiqueta) => {
    switch (codigoEtiqueta) {
        case 1:
            return "Etiqueta A";
        case 2:
            return "Etiqueta B";
        case 3:
            return "Etiqueta C";
        case 4:
            return "Etiqueta D";
        case 5:
            return "Etiqueta E";
        default:
            return "Etiqueta no valida";
    }
}

let diametro = +prompt("Introduzca el diametro de la manzana");
if (isNaN(diametro) || diametro <= 0) {
    console.log("Datos no validos");
} else {
    let codigoEtiqueta = calcularCodigosEtiquetas(diametro);
    let etiqueta = calcularEtiqueta(codigoEtiqueta);
    console.log(etiqueta);
}  document.getElementById('jsDiv').innerHTML=`Manzana ${diametroManzana}: ${calcularEtiqueta(diametroManzana)}`;