let array = [{
        nombre: 'platano',
        precio: 1.35
    },
    {
        nombre: 'manzana',
        precio: 0.80
    },
    {
        nombre: 'pera',
        precio: 0.85
    },
    {
        nombre: 'naranja',
        precio: 0.70
    }
];

let fruta = prompt('Introduzca una fruta');
//let kilos = +prompt('Introduzca los kilos');

resultado = (array, fruta,) => {

    if (fruta === array[0].nombre) {
        let kilos = +prompt('Introduzca los kilos');

        console.log(kilos * array[0].precio)

    } else if (fruta === array[1].nombre) {
        let kilos = +prompt('Introduzca los kilos');

        console.log(kilos * array[1].precio) 

    } else if (fruta === array[2].nombre) {
        let kilos = +prompt('Introduzca los kilos');

        console.log(kilos * array[2].precio)

    } else if (fruta === array[3].nombre) {
        let kilos = +prompt('Introduzca los kilos');

        console.log(kilos * array[3].precio)
    } else if (!isNaN(fruta)) {
        

        alert('Has introducido un numero')
    } else {
        

        console.log('La fruta introducida no esta en el stock ');
    }

};

resultado(array, fruta,)