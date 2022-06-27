// Primitivos
// no es un objeto y son inmutables
// 1) Boolean = true / false 
// 2) null= null(sin valor)
// 3) undefined = variable declarada a la cual no se le ha asignado un valor 
// 4) number = enteros, de punto flotante(decimales),etc
// 5) string = cadena de caracteres 
// 6) symbol = valor unico e inmutable que no es igual a otro valor 
//    symbol(cadena de caracteres)==> 

let myBoolean = true;
let myNull = null;
let myUndefined = '';
let myNumber = 100
let myString = 'dos palabras';
let mySymbol = Symbol('simbolox');
let myObjectSymbol = Object(mySymbol);

document.getElementById('jsDiv').innerHTML += '<br>' + 'myboolean = ' + typeof (myBoolean) + ' == > ' + myBoolean;
document.getElementById('jsDiv').innerHTML += '<br>' + 'myNull = ' + typeof (myNull) + ' == > ' + myNull;
document.getElementById('jsDiv').innerHTML += '<br>' + 'myundefined = ' + typeof (myUndefined) + ' == > ' + myUndefined;
document.getElementById('jsDiv').innerHTML += '<br>' + 'myNumber = ' + typeof (myNumber) + ' == > ' + myNumber;
document.getElementById('jsDiv').innerHTML += '<br>' + 'myString = ' + typeof (myString) + ' == > ' + myString;
document.getElementById('jsDiv').innerHTML += '<br>' + 'mySymbol = ' + typeof (mySymbol);
document.getElementById('jsDiv').innerHTML += '<br>' + 'myObjectSymbol = ' + typeof (myObjectSymbol);