function fatorial(numero){
    if(numero<=1){
        return 1
    } else{
        let  fator = 1;
        while (numero>1){
         
       
        fator = fator * numero;
        numero --;
        
        }
        console.log (fator);
    }
       
}

fatorial(3);
