let tramo_km = parseFloat(prompt("LONGITUD DE TRAMO: "));
let tiempo_horas = parseFloat(prompt("HORAS : "));

let velocidad=tramo_km/tiempo_horas;

if (velocidad>=40&&velocidad<=60) {
    console.log("El conductor pasa la prueba.");
} else {
    console.log("El conductor está descalificado..");
}
