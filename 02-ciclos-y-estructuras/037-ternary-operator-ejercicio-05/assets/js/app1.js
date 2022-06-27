const password = "pepito";
let comprobarContraseña = (pass, passwdCorrecta) => {
    return (pass.toLowerCase() === passwdCorrecta.toLowerCase()) ? "Contraseña correcta" : "Contraseña incorrecta";
}

let comprobarContraseñaArr = (user, passwdCorrecta) => {
    return (user[0].toLowerCase() === passwdCorrecta.toLowerCase()) ? "Contraseña correcta" : "Contraseña incorrecta";
}

let comprobarContraseñaObj = (user, passwdCorrecta) => {
    return (user.passwd.toLowerCase() === passwdCorrecta.toLowerCase()) ? "Contraseña correcta" : "Contraseña incorrecta";
}

let passwordUsuario = prompt("Deme su contraseña");
console.log(comprobarContraseña(passwordUsuario, password));
console.log(comprobarContraseñaArr([passwordUsuario], password));
console.log(comprobarContraseñaObj({ passwd: passwordUsuario}, password));