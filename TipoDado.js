function TipoDeDado(tipo){

    if(typeof tipo==='boolean'){
        console.log("Este tipo é boolean");
    }
    else if(typeof tipo==='number'){
        console.log("Este tipo é number");
    }
    else if(typeof tipo==='string'){
        console.log("Este tipo é string");
    }
    else{
        console.log("Este tipo não é nem string, nem number, nem boolean");
    }
}
TipoDeDado("Alooooo");

TipoDeDado(15);
TipoDeDado(15 ? 15 : "esta igual"  );
TipoDeDado(true);