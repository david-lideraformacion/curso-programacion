let nombre:string="Natalia";
let apellidos:string='Rudolf Budiño';
let fechaNacimiento:string='26/03/1976';
let edad:number=44;
let nombreCompleto:string;
nombreCompleto=nombre+" "+apellidos;

console.log("*********************");
let concat1:string=`Yo soy ${nombre} ${apellidos}`;
console.log("concat1: ",concat1);
console.log("typeof concat1:",typeof(concat1));

console.log("*********************");
let concat2:string=`Yo soy ${nombre} ${apellidos} y naci el dia ${fechaNacimiento} a las 21:00 horas. En este momento tengo ${edad}`;
console.log("concat2: ",concat2);
console.log("typeof concat2:",typeof(concat2));


console.log("*********************");
console.log("nombreCompleto: ",nombreCompleto);
console.log("typeof nombreCompleto:",typeof(nombreCompleto));

console.log("*********************");
let concat3:string = "Yo soy"+ " " + nombre + " " + apellidos + " y nací el día " +  fechaNacimiento + " " + "a las 21:00 horas. En este momento tengo" + " " + edad;
console.log("concat3: ",concat3);
console.log("typeof concat3:",typeof(concat3));
console.log("concat3[20] + concat3[22]",concat3[20] + concat3[22]);
console.log("concat3[20] + concat3[29]",concat3[20] + concat3[29]);
console.log("concat3.length",concat3.length);

