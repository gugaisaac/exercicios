function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log("Por favor, passe só numeros para o programa");
    } else{
        console.log(number);
        return number;
    }
}

checarNumero(5);
// checarNumero("hjkasdskaj");