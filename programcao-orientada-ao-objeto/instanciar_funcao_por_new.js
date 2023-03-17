function Cachorro(raca, patas, cor){
    
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuuuuuuu");
    }
}

let doberman =  new Cachorro("doberman", 4,"Marrom");

doberman.uivar();