
let cantidad = parseInt(prompt("Ingrese la cantidad de artículos: "));
let precio = parseFloat(prompt("Ingrese el precio de cada artículo: "));


let Sin_Descuento=cantidad*precio;


if (cantidad>10 && precio>40) {
  
    let descuento = Sin_Descuento*(15/100);
 
    let totalConDescuento = Sin_Descuento - descuento;
    console.log("Se aplica un descuento del 15%:");
    console.log("- Monto del descuento: " + descuento + " euros");
    console.log("- Total a pagar: " + totalConDescuento + " euros");
} else {
    console.log("El total a pagar es: " + Sin_Descuento + " euros.");
}
