const reg1 = /[12345]/;

console.log(reg1.test("temos o numero 6"));
console.log(reg1.test("temos o numero 2"));
console.log(reg1.test("temos o numero 23"));// essas expressões dão TRUE pois os numeros 1 e 5 está dentro da REGEX
console.log(reg1.test("temos o numero 15"));// essas expressões dão TRUE pois os numeros 1 e 5 está dentro da REGEX

const reg2 = /[0-9]/;
console.log(reg2.test("temos o numero 97"));// essa expressão verifica se tem numeros na frase
console.log(reg2.test("temos o numero "));

