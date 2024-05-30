const ordenarAscendente=(array)=>{
    return array.sort((a,b) => a-b);
};
let n=[5,2,8,1,9];
let nOrdenados=ordenarAscendente(n);
console.log(nOrdenados); 
