
let renta = parseFloat(prompt("Ingrese su renta anual en euros  : "));
let impositivo;

if (renta < 10000) {
    impositivo = "5%";
} else if (renta >= 10000 && renta < 20000) {
    impositivo = "15%";
} else if (renta >= 20000 && renta < 35000) {
    impositivo = "20%";
} else if (renta >= 35000 && renta < 60000) {
    impositivo = "30%.";
} else {
    impositivo = "45%";
}


console.log("SU TIPO IMPOSITIVO ES" + impositivo + ".");