let transporte=prompt("¿Cómo vas a viajar? (carro,bicicleta,tren o autobús)");

switch (transporte.toLowerCase()) {
    case "tren":
    case "autobús":
        console.log("LLEVE DINERO PARA EL TIKET (BILLETE).");
        break;
    case "bicicleta":
        console.log("VAMOS NAIRO");
        break;
    case "carro":
        console.log("QUE TENGA FELIZ VIAJE.");
        break;
    default:
        console.log("EL MEDIO DE TRANSPORTE INGRESADO NO VALIDO");
        break;
}
