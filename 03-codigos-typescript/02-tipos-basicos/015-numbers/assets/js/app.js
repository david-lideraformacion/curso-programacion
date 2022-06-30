"use strict";
let manzanas = 5;
let peras;
let castañas = 3;
if (manzanas > peras) {
    console.log("if: ", `Tengo más manzanas ${manzanas} que ${peras}`);
}
else if (peras > manzanas) {
    console.log("else if: ", `Tengo más peras ${peras} que manzanas ${manzanas}`);
}
else {
    console.log("else: ", `Tengo las mismas peras ${peras} que ${manzanas}`);
}