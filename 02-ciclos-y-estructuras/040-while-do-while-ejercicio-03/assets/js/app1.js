let valor1,
    valor2;

while (isNaN(valor1) || isNaN(valor2)) {
    valor1=+prompt("Introduzca el primer valor");
    valor2=+prompt("Introduzca el segundo valor");
}

let i=valor1;
while (i<=valor2) {
    console.log(i);
    i++;
}