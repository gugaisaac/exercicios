class Carro{
    constructor(marca, cor, gasolina){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
    }
    set novaMarca(novaMarca){
        this.marca = novaMarca;
    }
    get getMarca(){
        return this.marca;
    }
    set novaCor(novaCor){
        this.cor = novaCor;
    }
    get getCor(){
        return this.cor;
    }
    set novaGasolina(novaGasolina){
        this.gasolina = novaGasolina;
    }
    get getGasolina(){
        return this.gasolina;
    }
    dirigir(km){
        this.gasolina=this.gasolina - km;
        console.log("Você rodou " + km +  " e gastou " + this.gasolina)
    }
    abastecer(km){
        this.gasolina=this.gasolina + km;
        console.log("Você colocou "+km+" ficando no total " +this.gasolina)
    }
}

let fiat = new Carro("fiat","verde",30);
fiat.dirigir(15);
fiat.abastecer(30);
