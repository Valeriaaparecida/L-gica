function consumo (distanciaTotalPercorrida,totalCombustivelGasto) {

let consumoMedio = distanciaTotalPercorrida / totalCombustivelGasto

console.log(`${consumoMedio.toFixed(3)} km/l`);
}


consumo(2254, 124.4);
consumo(4554, 464.6);
consumo(500,35.0);