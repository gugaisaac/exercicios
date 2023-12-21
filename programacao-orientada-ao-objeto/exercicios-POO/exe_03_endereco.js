// let endereco = {
//     rua: "estrada do Mandi",
//     bairro: "centro",
//     cidade: "itaqua",
//     estado: "SP"
// }

class Endereco{
    constructor (rua, bairro, cidade, estado){
        this.rua= rua;
        this.bairro= bairro;
        this.cidade= cidade;
        this.estado= estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }
    get getRua(){
        return this.rua;
    }
    set novaBairro(novoBairro){
        this.bairro = novoBairro;
    }
    get getBairro(){
        return this.bairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    get getCidade(){
        return this.cidade;
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
    get getEstado(){
        return this.estado;
    }
}
let endereco1 = new Endereco("estrada do Mandi","centro","itaqua","SP");
console.log(endereco1);
console.log("Rua default: " + endereco1.getRua);
console.log("Bairro default: " + endereco1.getBairro);
console.log("Cidade default: " + endereco1.getCidade);
console.log("Estado default: " + endereco1.getEstado);

endereco1.novaRua = "Estrada dos indios";
endereco1.novoBairro = "Jardim Odete";
endereco1.novaCidade = "Suzano";
endereco1.novoEstado = "Minas Gerais";

console.log(endereco1);

console.log("Nova Rua: " + endereco1.getRua);
console.log("Novo Bairro: " + endereco1.getBairro);
console.log("Nova Cidade: " + endereco1.getCidade);
console.log("Novo Estado: " + endereco1.getEstado);