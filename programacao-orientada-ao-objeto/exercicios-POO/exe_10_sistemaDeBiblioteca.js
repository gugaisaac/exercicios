// Crie uma classe chamada "Livro" que representa um livro em um sistema de biblioteca.

// A classe deve ter os seguintes atributos:

// titulo: representando o título do livro (string).

// autor: representando o autor do livro (string).

// disponivel: representando a disponibilidade do livro (boolean).

// A classe deve ter os seguintes métodos:

// emprestar(): verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.

// devolver(): verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.

// consultarDisponibilidade(): retorna a disponibilidade atual do livro.

class Livro{
    constructor(titulo,autor, disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
    emprestar(){
        if(this.disponivel){
            this.disponivel = false;
            console.log("Livro Emprestado com sucesso")
        }else{
            console.log("O livro não está disponível para empréstimo.")
        }
    }
    devolver(){
        if(!this.disponivel){
            this.disponivel = true;
            console.log("O livro já está disponível.");
        }
    }
    consultarDisponibilidade(){
        if(this.disponivel){
            return "Disponível";
        }else{
            return "Indisponível";
        }
        
    }
}