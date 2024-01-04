function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("O parametro precisa ser uma string");
    }else{
        console.log(`ola ${nome}.`);
    }
}
saudacao("Matheus");
saudacao(3);