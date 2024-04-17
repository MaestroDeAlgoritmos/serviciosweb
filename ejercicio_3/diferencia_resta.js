
let nuONE = parseFloat(prompt("Ingrese el primer:"));
let nuTWO = parseFloat(prompt("Ingresa el segundo número"));

let mayor, menor;

if (nuONE>nuTWO) {
    mayor=nuONE;
    menor=nuTWO;
} else {
    mayor=nuTWO;
    menor=nuONE;
}

let resultado=mayor-menor;

console.log("El resultado es "+resultado);