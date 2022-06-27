// OPERADORES ARITMETICOS
console.warn("SUMA");
console.log("5+3", 5 + 3);
console.log("5+3+1", 5 + 3 + 1);

console.warn("RESTA");
console.log("5+3-1", 5 + 3 - 1);
console.log("5-3-1", 5 - 3 - 1);

console.warn("MULTIPLICACION");
console.log("5*3", 5 * 3);
console.log("5*3*2", 5 * 3 * 2);

console.warn("DIVISION");
console.log("10/2", 10 / 2);
console.log("10/2/5", 10 / 2 / 5);

console.warn("MÓDULO / RESTO / RESIDUO");
console.log("10%5", 10 % 5);
console.log("10%3", 10 % 3);

console.warn("EXPONENCIACION / POTENCIA");
console.log("2**2", 2 ** 2);
console.log("3**3", 3 ** 3);
console.log("2**2**3", 2 ** 2 ** 3);

console.warn("MULTIPLICACION/DIVISION CON SUMAS/RESTAS");
console.log("10*2+5", 10 * 2 + 5);
console.log("5+10+*2", 5 + 10 * 2);

console.log("10/2+5", 10 / 2 + 5);
console.log("5+10/2", 5 + 10 / 2);

console.warn("AGRUPACIONES [( expresion ] operador expresion]");
console.log("10*(2+5)", 10 * (2 + 5));
console.log("(5+10)*2", (5 + 10) * 2);

console.log("10/(2+5)", 10 / (2 + 5));
console.log("(5+10)/2", (5 + 10) / 2);

console.log("5**2/3", 5 ** 2 / 3);
console.log("5**2/3+1", 5 ** 2 / 3 + 1);
console.log("1+5**2/3", 1 + 5 ** 2 / 3);
console.log("(1+5)**2/3", (1 + 5) ** 2 / 3);

console.log("15%3*10", 15 % 3 * 10);
console.log("4**2%3*10", 4 ** 2 % 3 * 10);
console.log("4**2%3+1*10", 4 ** 2 % 3 + 1 * 10);
console.log("4**2%(3+1)*10", 4 ** 2 % (3 + 1) * 10);


let varNum1 = 1;
let varNum2 = 2;
let varNum3 = 3;
let varNum4 = 4;
let varNum5 = 5;

console.log("varNum4**varNum2%(varNum3+varNum1)*varNum5:", varNum4 ** varNum2 % (varNum3 + varNum1) * varNum5);

console.warn("Incremento (++)");
let i = 10;
console.log("i:", i);

let a;
// OPERADOR DE PRE-INCREMENTO (++i)
// ++i => i=i+1
a = ++i;
console.log("i:", i);
console.log("a:", a);

// i = i + 1
++i;
++a;
console.log("i:", i);
console.log("a:", a);

// OPERADOR DE POST-INCREMENTO (i++)
// i++ => i=i+1;
i++;
console.log("i:", i);

// Asigna a el valor de i, y despues incrementa i
a = i++;
console.log("a:", a);
console.log("i:", i);

console.log("Decremento (--)");
i = 10;
console.log("i:", i);

a = --i;
console.log("a:", a);
console.log("i:", i);

a = i--;
console.log("a:", a);
console.log("i:", i);

// a+=2 => a=a+2
a += 2;
console.log("a:", a);

// a=2
a = +2;
console.log("a:", a);

a = -2;
console.log("a:", a);

//i++ => i+=1
a = 15;
console.log("a:", a);

a += 1;
console.log("a:", a);

console.warn("Negación unaria (-)");
i = 100;
j = 200;

console.log({
    i,
    j
});

i = -i;
j = -j;
console.log({
    i,
    j
});

console.warn("Unario (+)");
let var1 = +3; // 3
let var2 = +'3'; // 3
let var3 = +true; // 1
let var4 = +false; // 0
let var5 = +null; // 0
let var6 = -null; // -0
let var7 = +NaN; // NaN
let var8 = -NaN; // NaN
let var9 = +undefined; // NaN
let var10 = -undefined; // NaN

console.log("var1 = +3",var1);
console.log("var2 = +'3'",var2);
console.log("var3 = +true",var3);
console.log("var4 = +false",var4);
console.log("var5 = +null",var5);
console.log("var6 = -null",var6);
console.log("var7 = +NaN",var7);
console.log("var8 = -NaN",var8);
console.log("var9 = +undefined",var9);
console.log("var10 = -undefined",var10);

let valor1=(val) => val;
console.log("valor1()",valor1());
console.log("valor1()",+valor1());

let valor2=function(val) {
    return val;
}
console.log("valor2()",valor2());
console.log("valor2()",+valor2());