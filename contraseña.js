function validarContrasena(contrasena) {
   
    const longitudMinima=8;
    const caracteresEspeciales=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (contrasena.length < longitudMinima) {
        return false;
    }
    if (!caracteresEspeciales.test(contrasena)) {
        return false;
    }
    return true;
}
let contrasena = "MiContrasena@123";
if (validarContrasena(contrasena)) {
    console.log("contraseña correxta");
} else {
    console.log("contraseña no  cumple los requisitos");
}
