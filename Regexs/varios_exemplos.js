const pontoRegex = /./;
// . é um coringa é utilizado para aceitar qualquer caracter


console.log("\n Teste REGEX . \n");
console.log(pontoRegex.test("asd"));//true
console.log(pontoRegex.test(" "));//true
console.log(pontoRegex.test("123"));//true
console.log(pontoRegex.test("123asd"));//true


const dRegex = /\d/;
// \d aceita qualquer texto que tenha numero é a mesma coisa de [0-9]
console.log("\n Teste REGEX \\d \n");
console.log(dRegex.test("asd"));//false
console.log(dRegex.test(" "));//false
console.log(dRegex.test("123"));//true
console.log(dRegex.test("123asd"));//true

const dRegex2 = /\D/;
// \D recusa qualquer texto que tenha somente numero é a mesma coisa de [^0-9], sendo ^ negação em expressão regular
console.log("\n Teste REGEX \\D \n");
console.log(dRegex2.test("asd"));//true
console.log(dRegex2.test(" "));//true
console.log(dRegex2.test("123"));//false
console.log(dRegex2.test("123asd"));//true

const sRegex = /\s/;
// \D aceita qualquer texto que tenha espaço
console.log("\n Teste REGEX \\s \n");
console.log(sRegex.test("asd"));//false
console.log(sRegex.test(" "));//true 
console.log(sRegex.test("123"));//false
console.log(sRegex.test("123asd"));//false

const wRegex = /\w/;
// \D aceita qualquer texto alfanumerico
console.log("\n Teste REGEX \\w \n");
console.log(wRegex.test("asd"));//true
console.log(wRegex.test(" "));//false - espaço não é alfanumerico
console.log(wRegex.test("123"));//true
console.log(wRegex.test("123asd"));//true