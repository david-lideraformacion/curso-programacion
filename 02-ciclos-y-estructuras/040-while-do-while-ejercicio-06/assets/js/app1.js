const comprobarContrasenha=() =>{
    let contraseñaUsuario="",
        contraseñaReal="daniel";

    while (contraseñaUsuario!==contraseñaReal) {
        contraseñaUsuario=prompt("Introduzca su contraseña");
    }

    console.log("Contraseña correcta");
}

const comprobarContrasenhaDoWhile=()=>{
    let contraseñaUsuario="",
        contraseñaReal="daniel";
    do{
        contraseñaUsuario=prompt("Introduzca su contraseña");
    }while(contraseñaUsuario!==contraseñaReal);
}

const comprobarContrasenha1=() =>{
    let contrasenhaUsuario="",
        contrasenhaReal="daniel";

    while (true) {
        contrasenhaUsuario=prompt("Introduzca su contraseña");
        if (contrasenhaUsuario===contrasenhaReal){
            break;
        }
    }

    console.log("Contraseña correcta");
}

const comprobarContrasenha1DoWhile=() =>{
    let contrasenhaUsuario="",
        contrasenhaReal="daniel";

    do{
        contrasenhaUsuario=prompt("Introduzca su contraseña");
        if (contrasenhaUsuario===contrasenhaReal){
            break;
        }
    }while (true);
        
    console.log("Contraseña correcta");
}

comprobarContrasenha1();

/* 
const comprobarContrasenha=() =>{
    let contraseñaUsuario="",
        contraseñaReal="daniel";
        i=0

    while (contraseñaUsuario!==contraseñaReal && i<=5) {
        contraseñaUsuario=prompt("Introduzca su contraseña");
        i++
    }

    console.log("Contraseña correcta");
}

*/
