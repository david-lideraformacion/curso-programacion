separador("FOR");
let heroes=["Batman","Superman","Mujer Maravilla","Aquaman"];

for (let i = 0; i < 5; i++) {
    console.log(heroes[i]);
}

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}


for (let i in heroes) {
    console.log("i:",i);
    console.log(heroes[i]);
}

for (let heroe of heroes) {
    console.log("heroe");
    console.log(heroe);
}