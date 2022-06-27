const imprimirReves = (palabra) => {
    let i = palabra.length - 1,
        palabraReves = "";
    while (i >= 0) {
        console.log(palabra[i]);
        // palabraReves=palabraReves+" "+palabra[i];
        palabraReves = `${palabraReves} ${palabra[i]}`;
        // i=i-1;
        i--;
    }
    console.log(palabraReves);
}

const imprimirRevesDoWhile = (palabra) => {
    let i = palabra.length - 1,
        palabraReves = "";
    do {
        console.log(palabra[i]);
        // palabraReves=palabraReves+" "+palabra[i];
        palabraReves = `${palabraReves} ${palabra[i]}`;
        // i=i-1;
        i--;
    } while (i >= 0);
    console.log(palabraReves);

}

let palabra = prompt("Introduzca una palabra");
imprimirRevesDoWhile(palabra);
