function imprimirFibonacci(n) {
    let T1 = 0;
    let T2 = 1;
    
    // Imprime os primeiros dois números da sequência
    console.log(T1);
    console.log(T2);
    
    // Loop para calcular e imprimir os próximos números
    for (let i = 3; i <= n; i++) {
        let T3 = T1 + T2;
        console.log(T3);
        T1 = T2;
        T2 = T3;
    }
}

// Teste com n = 5 para imprimir os primeiros 5 números de Fibonacci
imprimirFibonacci(55);
