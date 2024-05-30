function esPalindromo(p) {
    p=p.toLowerCase();

    p=p.split(' ').join('');

    return p===p.split('').reverse().join('');
}
let p1 = "hackerman";
let p2 = "hithacket";
let p3 = "ciberseguridad";

console.log(esPalindromo(p1)); 
console.log(esPalindromo(p2)); 
console.log(esPalindromo(p3)); 

