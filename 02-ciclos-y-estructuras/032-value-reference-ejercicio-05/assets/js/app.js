
// Refactorización de app4.js
// con funciones

// NOTA:
// Ya que el ejerciio tiene FINES PEDAGOGICOS 
// COMO:

// 1) Reforzar el uso del if
//
// 2) Evaluar TODOS los datos posibles como 
// (primitivos, arrays y ojetos)
//
// 3) Refactorización con funciones
//
// SE UTILIZARÁ la variable varZ HACIENDO CASO 
// OMISO DEL PRINCIPIO DE INMUTABILIDAD DE LOS
// DATOS

//===============================
// Declaración de Variable(s)

let varZ;

// Funciones para la evaluación de datos
// PRIMITIVOS

// UNDEFINED
//    UNDEFINED - SIN INICIALIZACIÓN DE VARIABLE
let evalUndefine = (param) => {
  console.log("typeof varZ- UNDEFINED:", typeof param);

  if (param) {
    console.log("IF => varZ");
  }
};

//    UNDEFINED - CON ASIGNACION DE VALOR
let evalUndefineWithValue = (param) => {
  console.log("typeof varZ- UNDEFINED:", typeof param);

  if (param) {
    console.log("IF => varZ");
  }
};

// SYMBOL
//    SYMBOL
let evalSymbol = (param) => {
  console.log("typeof varZ: - SYMBOL WITHOUT DESCRIPTION", typeof varZ);
  
  if (varZ) {
    console.log("IF => varZ");
  }
};

//    SYMBOL - SIN DESCRIPCION
let evalSymbolWithoutDescrip = (param) => {
  console.log("typeof varZ: - SYMBOL WITH EMPTY DESCRIPTION", typeof param);
  
  if (varZ) {
    console.log("IF => varZ");
  }
};

//    SYMBOL - CON DESCRIPCION
let evalSymbolWithDescrip = (param) => {
  console.log("typeof varZ: - SYMBOL WITH DESCRIPTION", typeof param);
  
  if (varZ) {
    console.log("IF => varZ");
  }
};

// NULL
let evalNull = (param) => {
  console.log("typeof varZ: - NULL", typeof param);
  
  if (param) {
    console.log("IF => varY");
  }
};

// NUMBERS
let evalNumber = (param) => {
  console.log("typeof varZ - NUMBER:", typeof param);
  
  if (param) {
    console.log("IF => varY");
  }
};

// NaN
let evalNaN = (param) => {
  console.log("typeof varZ: - NaN", typeof param);
  
  if (param) {
    console.log("IF => varY");
  }  

};

// BOOLEANS
let evalBool = (param) => {
  if (param) {
    console.log("typeof varZ: - BOOLEAN TRUE", typeof param);
  } else {
    console.log("typeof varZ: - BOOLEAN FALSE", typeof param);    
  }
  
  if (param) {
    console.log("IF => varY");
  }
};

// STRINGS
//    EMPTY STRING
let evalEmptyStr = (param) => {
  console.log("typeof varZ: - EMPTY STRING", typeof param);
  
  if (param) {ºº
    console.log("IF => varY");
  }
};

//    STRING
let evalStr = (param) => {
  console.log("typeof varY: - STRING", typeof param);

  if (param) {
    console.log("IF => varY");
  }
};

// OBJETOS
//    EMPTY OBJECT
let evalEmptyObj = (param) => {
  console.log("typeof varZ: - EMPTY OBJECT", typeof param);

  if (param) {
    console.log("IF => varY");
  }
};

//    OBJECT
let evalObj = (param) => {
  console.log("typeof varY: - OBJECT", typeof param);

  if (param) {
    console.log("IF => varY");
  }
};

// ARRAYS
//    EMPTY ARRAY
let evalEmptyArr = (param) => {
  console.log("typeof varY: - EMPTY ARRAY", typeof param);

  if (param) {
    console.log("IF => varY");
  }
};

//    ARRAY
let evalArr = (param) => {
  console.log("typeof varY: - ARRAY", typeof param);

  if (param) {
    console.log("IF => varY");
  }
};

// LLAMADO / INVOCACIÓN DE FUNCIONES
separador('IF CON EVALUACIONES DE VARIABLES UNDEFINED');
evalUndefine(varZ); // undefined

varZ = undefined; // undefined
evalUndefineWithValue(varZ)

separador('IF CON EVALUACIONES DE VARIABLES SYMBOLS');
varZ = Symbol; // Symbol
evalSymbol(varZ);

varZ = Symbol("Esta es una descripción opcional"); // Symbol
evalSymbolWithDescrip(varZ);

varZ = Symbol(); // Symbol
evalSymbolWithoutDescrip(varZ);

separador('IF CON EVALUACIONES DE VARIABLES NULL');
varZ = null; //null
evalNull(varZ);

separador('IF CON EVALUACIONES DE VARIABLES NUMÉRICAS');
varZ = 5; // Number
evalNumber(varZ);

separador('IF CON EVALUACIONES DE VARIABLES NaN');
varZ = NaN; // NaN
evalNaN(varZ);

separador('IF CON EVALUACIONES DE VARIABLES BOOLEAN');
varZ = true; // boolean
evalBool(varZ);

varZ = false; // boolean
evalBool(varZ);

separador('IF CON EVALUACIONES DE VARIABLES STRING');
varZ = ""; // empty string
evalEmptyStr(varZ);

varZ = "cadena de caracteres"; // string
evalStr(varZ);

separador('IF CON EVALUACIONES DE VARIABLES OBJETO');
varZ = {} ; // empty object
evalEmptyObj(varZ)


varZ = {propiedad: "Valor"}; // object
evalObj(varZ)


separador('IF CON EVALUACIONES DE VARIABLES ARRAY');
varZ = []; // empty array
evalEmptyArr(varZ)

varZ = [1]; // array
evalArr(varZ);


