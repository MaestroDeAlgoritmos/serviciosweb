
let not1 = parseFloat(prompt("Ingrese la nota del primer trimestre: "));
let not2 = parseFloat(prompt("Ingrese la nota del segundo trimestre: "));
let not3 = parseFloat(prompt("Ingrese la nota del tercer trimestre: "));


let promedio=(not1+not2+not3)/3;


let calificacion;

if (promedio < 5) {
    calificacion = "Suspendido";
} else if (promedio>=5&&promedio<7) {
    calificacion = "Aprobado";
} else {
    calificacion = "Notable.";
}

console.log("EL PROMEDIO ES: "+promedio);
console.log("CALIFICACION "+calificacion);
