function romanoParaInteiro(S) {
    // Mapeamento dos símbolos romanos para seus valores inteiros
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let i = 0;

    while (i < S.length) {
        // Valor do símbolo atual
        let valorAtual = valores[S[i]];
        // Valor do próximo símbolo (se existir)
        let valorProximo = valores[S[i + 1]];

        // Se o próximo valor for maior, subtraímos o valor atual, senão somamos
        if (valorProximo && valorAtual < valorProximo) {
            total += (valorProximo - valorAtual);
            i += 2; // Pulamos dois símbolos
        } else {
            total += valorAtual;
            i += 1; // Pulamos um símbolo
        }
    }

    return total;
}

// Testando a função com os exemplos dados
console.log(romanoParaInteiro("III"));    // Saída: 3
console.log(romanoParaInteiro("LVIII"));  // Saída: 58
console.log(romanoParaInteiro("MCMXCIV")); // Saída: 1994
