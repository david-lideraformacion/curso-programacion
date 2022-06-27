

    let nombre1 = prompt('Introduzca su nombre');
    let apellidos1 = prompt('Introduzca sus apellidos');

function nombre(nombre1,apellidos1) {
    console.log(nombre1 + ' ' + apellidos1);
    
};
nombre(nombre1,apellidos1)

const nombre2=function (nombre1,apellidos1) {
    console.log(nombre1 + ' ' + apellidos1);
    
};
nombre(nombre1,apellidos1)

const nombre3=(nombre1,apellidos1)=> {
    console.log(nombre1 + ' ' + apellidos1);
};

nombre(nombre1,apellidos1);

document.getElementById('jsDiv').innerHTML = nombre1 + ' ' + apellidos1