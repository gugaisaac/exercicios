function multiTresNumeros(a, b, c){

    let total = a * b* c;
    console.log(total);

    // return a*b*c;
}

multiTresNumeros(2,2,2);

function podeDirigir(idade, cnh){
    if(idade>=18 && cnh == true){
        console.log("Pode dirigir");
    }
    else{
        console.log("Não pode dirigir")
    }

}

podeDirigir(19, true);
podeDirigir(17,true);
podeDirigir(19,false);