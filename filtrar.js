const filtrarnps=function(array) {
    return array.filter(numero => numero%2===0);
};
let n=[1,2,3,4,5,6,7,8,9,10];
let nps=filtrarnps(n);
console.log(nps); 
