const padrao = /Abacax?i/;

//faz com que o caracter ou expressão(\d,\s etc) seja opcional

console.log(padrao.test("Abacaxi")); 
console.log(padrao.test("Abacai")); 

const padrao2 = /\d\d+\w?/;
// infinitos numeros e pode conter alfanumericos

console.log(padrao2.test("123")); 
console.log(padrao2.test("123asd")); 
console.log(padrao2.test("123 ")); 
console.log(padrao2.test(" ")); 
console.log(padrao2.test("1 ")); 

