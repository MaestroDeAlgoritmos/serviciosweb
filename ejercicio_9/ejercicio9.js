
let nombre=prompt("NOMBRE: ");
let sexo=prompt("SEXO (F PARA FEMENINO, M PARA MASCULINO)  : ");

let primeraLetraNombre = nombre[0].toLowerCase();

let grupo;
if ((sexo==='F'&&primeraLetraNombre<'m') || (sexo==='M'&&primeraLetraNombre>'n')) {
    grupo = "Grupo A";
} else if ((sexo==='F'&&primeraLetraNombre>='m') || (sexo==='M'&&primeraLetraNombre<='n')) {
    grupo = "Grupo C";
} else {
    grupo = "Grupo B.";
}

console.log("USTED PERTENECE AL  " + grupo + ".");
