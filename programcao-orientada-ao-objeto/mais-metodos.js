const pessoa = {
    nome: "",
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }
}
pessoa.setNome("Gustavo");
console.log(pessoa.getNome());