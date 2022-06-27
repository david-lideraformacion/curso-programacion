const trianguloFor=(altura)=>{
    let linea="";
    let trianguloCompleto=""
    for(let i=1;i<=altura;i++){
        //linea=linea+"*"
        linea+="*";

        //trianguloCompleto=trianguloCompleto+linea
        // trianguloCompleto+=linea;
        trianguloCompleto=trianguloCompleto+"\n"+linea
        
        // console.log(linea);
    }
    console.log(trianguloCompleto);
}

const trianguloWhile=(altura)=>{
    let linea="";
    let trianguloCompleto="";
    let i=1;
    while(i<=altura){
        //linea=linea+"*"
        linea+="*";

        //trianguloCompleto=trianguloCompleto+linea
        // trianguloCompleto+=linea;
        trianguloCompleto=trianguloCompleto+"\n"+linea
        
        // console.log(linea);
        i++;
    }
    console.log(trianguloCompleto);
}

const trianguloDoWhile=(altura)=>{
    let linea="";
    let trianguloCompleto="";
    let i=1;
    do{
        //linea=linea+"*"
        linea+="*";

        //trianguloCompleto=trianguloCompleto+linea
        // trianguloCompleto+=linea;
        trianguloCompleto=trianguloCompleto+"\n"+linea
        
        // console.log(linea);
        i++;
    }while(i<=altura);
    console.log(trianguloCompleto);
}

let altura=+prompt("Deme la altura deseada del triangulo");

separador("Bucle For");
trianguloFor(altura);

separador("Bucle while");
trianguloWhile(altura);

separador("Bucle do while");
trianguloDoWhile(altura);
