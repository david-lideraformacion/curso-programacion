const regresaTrue=()=>{
  console.log("Regresa TRUE");
  return true;
}

const regresaFalse=()=>{
  console.log("Regresa FALSE");
  return false;
}

console.warn("Not Negación");
console.log("true:",true); // true
console.log("!true:",!true); // false
console.log("!!true:",!!true); // true

separador('------------');
console.log("regresaFalse()",regresaFalse());
separador('------------');
console.log("regresaTrue()",regresaTrue());
separador('------------');
console.log("!regresaTrue()",!regresaTrue());

console.warn("AND o Y (conjunción copulativa)");
console.log("true && true:",true && true);
console.log("true && false:",true && false);
console.log("false && true:",false && true);
console.log("false && false:",false && false);

console.warn("OR o O (disyunción)");
console.log("true || true:",true || true);
console.log("true || false:",true || false);
console.log("false || true:",false || true);
console.log("false || false:",false || false);

separador(" - EVALUANDO regresaTrue() con el operador lógico && -");
console.log("regresaTrue() && regresaTrue():",regresaTrue() && regresaTrue());
console.log("regresaTrue() && regresaTrue() && regresaTrue():",regresaTrue() && regresaTrue() && regresaTrue());

separador(" - EVALUANDO regresaTrue(), regresaFalse() con el operador lógico && -");
console.log("regresaFalse() && regresaTrue() && regresaTrue():",regresaFalse() && regresaTrue() && regresaTrue());
console.log("regresaTrue() && regresaFalse() && regresaTrue():",regresaTrue() && regresaFalse() && regresaTrue());
console.log("regresaTrue() && regresaTrue() && regresaFalse():",regresaTrue() && regresaTrue() && regresaFalse());

console.log("regresaTrue() && regresaTrue() && !regresaFalse():",regresaTrue() && regresaTrue() && !regresaFalse());
console.log("regresaTrue() && !regresaTrue() && regresaTrue():",regresaTrue() && !regresaTrue() && regresaTrue());

console.log("!(true && true)",!(true && true));
console.log("!(true && true)",!true && true);
console.log("!(true && false)",!(true && false));


let numero=4;
if (numero<5 && numero>3){
  console.log("Correcto");
}
else{
  console.log("No es correcto");
}


let numero1=7;
if (numero1<5 || numero1>3){
  console.log("Correcto");
}
else{
  console.log("No es correcto");
};