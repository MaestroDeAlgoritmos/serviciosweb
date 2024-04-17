
let edad = parseInt(prompt("INGRESE SU EDAD: "));
let iingresos = parseFloat(prompt("INGRESE SUS INGRESOS MENSUALES: "));

if (edad > 16 && iingresos >= 1000) {
    console.log("DEBE DECLARAR IMPUESTOS.");
} else {
    console.log("NO DEBE DECLARAR IMPUESTOS.");
}
