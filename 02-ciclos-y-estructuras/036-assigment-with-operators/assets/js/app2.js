
let varTrue = true;
let varFalse = false;
let varNull = null;
let varNaN = NaN;
let varUndefined = undefined;

let evalVar;

evalVar=varTrue && varTrue;
console.log(evalVar);

evalVar=varTrue && varFalse && varTrue;
console.log(evalVar);

evalVar=varTrue || varFalse || varTrue;
console.log(evalVar);

evalVar=varTrue || (varFalse || varTrue);
console.log(evalVar);

evalVar=varFalse || (varFalse || varTrue);
console.log(evalVar);

evalVar=varTrue && (varFalse || varTrue);
console.log(evalVar);

evalVar=varFalse && (varFalse || varTrue);
console.log(evalVar);

evalVar=varFalse ||  (varFalse && (varFalse || varTrue));
console.log(evalVar);