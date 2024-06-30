// esse codigo verifica se os numeros digitadso estao entre 0 e 20

function verifica(numero1, numero2, numero3, numero4, numero5) {
    if (numero1 <= 20 && numero1 >= 0) {
        console.log(numero1)

    }
    if (numero2 <= 20 && numero2 >= 0) {
        console.log(numero2)

    }
    if (numero3 <= 20 && numero3 >= 0) {
        console.log(numero3)
    
    }
    if (numero4 <= 20 && numero4 >= 0) {
        console.log(numero4)
    
    }
    if (numero5 <= 20 && numero5 >= 0) {
        console.log(numero5)
    
    } else{
        console.log("Os números apresentados estão acima do intervalo de 0 à 20")
    }
}

//verifica(20,10,60,8,300)
//verifica(100,200,356,147,9)
verifica(30,46,21,98,69)
