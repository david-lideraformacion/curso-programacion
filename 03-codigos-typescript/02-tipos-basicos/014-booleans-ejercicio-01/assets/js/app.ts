let esSuperman:boolean=true;

console.log("esSuperman: ",esSuperman);

const transformarHeroeAPersona=(param:boolean) =>{
    param=false;
    return param;
}

esSuperman=transformarHeroeAPersona(esSuperman);

if (esSuperman){
    console.log("Estamos salvados!!!");
}
else{
    console.log("Opps!! ohh!");
}

const transformarPersonaAHeroe=(param:boolean) =>{
    param=true;
    return param;
}

esSuperman=transformarPersonaAHeroe(esSuperman);

if (esSuperman){
    console.log("Estamos salvados!!!");
}
else{
    console.log("Opps!! ohh!");
}