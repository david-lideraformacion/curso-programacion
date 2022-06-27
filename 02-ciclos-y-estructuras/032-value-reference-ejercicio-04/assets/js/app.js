
let centroComercial1 = {
    nombre: "Centro Comercial 'El Barato'",
    cantTiendas: 8,
    plantas: 2,
    tiposTienda: [
        "Alimentación",
        "Calzado",
        "Perfumería",
        "Ropa"
    ],
    tiendasAlimentacion: {
        GADIS: true,
        EROSKI: true,
        DIA: false
    }
};

let centroComercial2 = centroComercial1;

centroComercial1.parking = true;
console.log(centroComercial1);
console.log(centroComercial2);

//centroComercial1 = {...centroComercial2}
//centroComercial1.ascensor = false
//console.log(centroComercial1);
//console.log(centroComercial2);

centroComercial1.tiposTienda[2] = 'Zapaterias';

console.log(centroComercial1);
console.log(centroComercial2);


centroComercial2.tiendasAlimentacion.DIA = true;
console.log(centroComercial1);
console.log(centroComercial2);


centroComercial1.administradoras = 'Pepito';
centroComercial2.administradoras = 'Benito';
console.log(centroComercial1);
console.log(centroComercial2);






