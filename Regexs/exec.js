// o metodo exec retorna um objeto com algumas informações,
// sendo possivel manipular essas informações de melhor 
//forma caso não encontre nada retornará null

const digitos = /\d/;

console.log(digitos.exec("Tem o numero 100 aqui"));
console.log(digitos.exec("Tem o numero aqui"));

console.log(digitos.exec("Tem o numero 100 aqui").index);


