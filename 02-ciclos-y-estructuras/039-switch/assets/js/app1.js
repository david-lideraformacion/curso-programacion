let dia = 0;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("No es un día de la semana");
        break;
}

let numero = 4;
switch (numero) {
    case (numero < 5):
        console.log("Es menor que 5");
        break;
    case (numero === 5):
        console.log("Es igual a 5");
        break;
    case (numero > 5):
        console.log("Es mayor que 5");
        break;
    default:
        break;
}

evaluarNumero = (num, valor) => {
    if (num < valor) {
        return "num < valor";
    } else if (num === valor) {
        return "num === valor";
    } else if (num > valor) {
        return "num > valor";
    }
}

numero=25;
valor=5;

let res=evaluarNumero(numero,valor);

console.log(res);

switch (res) {
    case "num < valor":
        console.log("Es menor que 5");
        break;
    case "num === valor":
        console.log("Es igual que 5");
        break;
    case "num > valor":
        console.log("Es mayor que 5");
        break;
    default:
        break;
}