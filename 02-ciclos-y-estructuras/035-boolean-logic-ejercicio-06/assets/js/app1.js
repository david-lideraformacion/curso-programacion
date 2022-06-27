let escogerPizza=(tipoPizza)=>{
    // Escojo pizza vegetariana
    let ingrediente;
    let pizza;
    if (tipoPizza===1){
        pizza="Vegetariana";
        let tipoIngrediente=parseInt(prompt("Introduzca el ingrediente deseado (1 - Pimiento, 2 - Tofu)"));
        if (tipoIngrediente===1){
            ingrediente="Pimiento";
        }
        else if (tipoIngrediente===2){
            ingrediente="Tofu";
        }
        else{
            return "Ingrediente no válido";   
        }
    }
    else if (tipoPizza===2){
        pizza="No vegetariana";
        let tipoIngrediente=parseInt(prompt("Introduzca el ingrediente deseado (1 - Pepperoni, 2 - Jamon, 3 - Salmon)"));
        if (tipoIngrediente===1){
            ingrediente="Pepperoni";
        }
        else if (tipoIngrediente===2){
            ingrediente="Jamon";
        }
        else if (tipoIngrediente===3){
            ingrediente="Salmon";
        }
        else{
            return "Ingrediente no válido";   
        }
    }
    else{
        return "Pizza no valida";
    }

    return `Pizza: ${pizza}, Ingredientes: Tomate, Mozzarella, ${ingrediente}`;
}

let eleccionPizza=parseInt(prompt("Introduzca la pizza deseada (1 - Vegetariana, 2 - No Vegetariana"));

console.log(escogerPizza(eleccionPizza));