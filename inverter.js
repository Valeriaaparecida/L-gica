

function inverterPalavra(palavra) {
    let palavraInvertida = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}

// Exemplo de uso da função
let palavraOriginal = "javascript";
let palavraInvertida = inverterPalavra(palavraOriginal);
console.log("Palavra original:", palavraOriginal);
console.log("Palavra invertida:", palavraInvertida);
