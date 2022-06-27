let usuario = prompt('Introduzca su usuario ')

let inicio = (usuario)=> {

    if (usuario === 'Administrador') {
         let contraseña = prompt('Introduzca la contraseña')
        console.log(contraseña)

        if (contraseña === 'ElMejor') {
            console.log('Bienvenido!');

        }else if (contraseña===null || contraseña === '') {
            console.log('Cancelado');
        } else {
            console.log('Contraseña incorrecta');
        }
    } else if(usuario===null|| usuario === '') {
        console.log('Cancelado');
    }else {
        console.log('No te conozco');
    }
};

inicio(usuario);