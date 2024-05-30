const calcularImpuestos = (money,porcentaje) => {
    return (money*porcentaje) / 100;
};

(()=>{
    const money = 1000; 
    const porcentajeImpuestos = 18; 

    const impuestos = calcularImpuestos(money, porcentajeImpuestos);
    console.log(`debes pagar: ${impuestos}`);
})();
