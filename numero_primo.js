
 function numeroPrimo(numero) {
    if (numero <= 1) {            //MENOR OU IGUAL À 1
        console.log(`O número ${numero} não é primo nem composto`);
        return;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {  //SÓ SE O NUMERO FOR A PARTIR DE 2 
        if (numero % i === 0) {
            console.log(`O número ${numero} é composto`);
            return;
        }
    }
    
    console.log(`O número ${numero} é primo`);
}

numeroPrimo(2);