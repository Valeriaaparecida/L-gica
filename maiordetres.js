function maiorNumero (A,B,C){
    if(A>C && A>B){
        console.log(`${A} é o maior dos três números`)
    }else if (B>A && B>C){
        console.log(`${B} é o maior número dentre os três`)
    }else{
        console.log(`${C} é o maior número dentre os três`)
    }
}

maiorNumero(200,200,55)