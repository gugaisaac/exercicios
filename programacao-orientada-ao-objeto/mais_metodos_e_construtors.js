//Site Can I Use, para verificar se algum recurso roda num navegador especifico

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log("Au Au");
    }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro("Labrador","Amarelo" );

console.log(labrador.patas);
labrador.latir();