let pessoa = {
    "nome":"Gustavo",
    "idade": "28", 
    "profissao": "TI",
    "hobbies":["ler","jogar","ouvir musica"]
}


let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);

