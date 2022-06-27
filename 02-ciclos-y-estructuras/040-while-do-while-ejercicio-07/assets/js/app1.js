const imprimirTriangulo=(final)=>{
    let i=final%2;
    let lineaActual="",
        trianguloHTML="",
        trianguloPlano="";
    
    while (i<=final) {
        // Se calcula la linea actual
        lineaActual=i+" "+lineaActual;
        // Vamos añadiendo líneas al triangulo
        trianguloHTML=trianguloHTML+"<br>"+lineaActual;

        trianguloPlano=trianguloPlano+"\n"+lineaActual;
        i=i+2;
    }

    document.getElementById("jsDiv").innerHTML=trianguloHTML;
    document.getElementById("jsDiv1").innerText=trianguloPlano;

}

const imprimirTriangulo1=(final)=>{
    let i=final%2;
    let lineaActual="",
        trianguloHTML="",
        trianguloPlano="";
    do{
        // Se calcula la linea actual
        lineaActual=i+" "+lineaActual;
        // Vamos añadiendo líneas al triangulo
        trianguloHTML=trianguloHTML+"<br>"+lineaActual;

        trianguloPlano=trianguloPlano+"\n"+lineaActual;
        i=i+2;
    }while (i<=final);

    document.getElementById("jsDiv").innerHTML=trianguloHTML;
    document.getElementById("jsDiv1").innerText=trianguloPlano;
}

let numero=+prompt("Introduzca un numero");


imprimirTriangulo1(numero);
imprimirTriangulo(numero);