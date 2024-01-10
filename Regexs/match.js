// funciona da mesma maneira que o exec, retornando um objeto, porem é necessario colocar o REGEX na função de uma frase

const frase = "Aqui tem 100 look at me".match(/\d+/);
const frase2 = "Aqui tem look at me".match(/\d+/);

console.log(frase);
console.log(frase2);