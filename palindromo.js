function palindromo(palavra){
    
    let palavraInvertida = '';
  for(i = palavra.length-1; i >= 0; i--){
   palavraInvertida = palavraInvertida + palavra[i];
    
  }
  console.log(palavraInvertida);
if (palavra === palavraInvertida){
    console.log(`A palavra ${palavra} é um palindromo`);
}else{
    console.log(`A palavra ${palavra} não é um palindromo`);
}
}

palindromo("arara")