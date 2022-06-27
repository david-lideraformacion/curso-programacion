separador("DO - WHILE")

// Ciclo infinito ya que k no varía
/*
let k = 30;

do {
  k = 30;
} while (k === 30);
*/

let estacion = "verano";

do {
  console.log("Hace muy buen tiempo, vamos a la playa!!!");
} while (estacion === "invierno");

separador("Solución Daniel")
do {
  console.log("Hace muy buen tiempo, vamos a la playa!!!");
  break;
} while (true);

separador("Solución xxxx")

estacion = "verano";
let control = 1;

do {
  switch (estacion) {
    case "otoño":
      // -----
      control = 0;
      break;
    case "invierno":
      console.log("Hace frío, no es buena idea ir a la playa!!!");
      control = 0;
      break;
    case "primavera":
      // ----
      break;
    case "verano":
      console.log("Hace muy buen tiempo, vamos a la playa!!!");
      control = 0;
      break;
    default:
      console.log("Esto no es una estación del año");
      control = 0;
      break;
  }

  if (control === 0){
    break;
  }
} while (true);
