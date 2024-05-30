const contarPalabras=(cadena)=>{
    let contador=0;
    let dentroDePalabra=false;

    for (let caracter of cadena) {
       
        if (caracter !== ' ' && !dentroDePalabra) {
            contador++;
            dentroDePalabra=true; 
        } 
        else if (caracter === ' ' && dentroDePalabra) {
            dentroDePalabra=false;
        }
    }
    return contador;
};
let texto = "Soy Hackerman";
let C_palabras=contarPalabras(texto);
console.log(C_palabras); 

