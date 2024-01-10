const cep = /\d{5}-\d{3}/;

console.log("teste regex cep");
console.log(cep.test("88175-445")); 
console.log(cep.test("8817-44")); // so tem 4 digitos em um lado e 2 no outro
console.log(cep.test("88175-44")); // so tem 5 digitos em um lado e 2 no outro
console.log(cep.test("8817-443")); // so tem 4 digitos em um lado e 2 no outro
console.log(cep.test("asd")); 


const telefone = /\(\d{2}\)\d{4,5}-\d{4}/

console.log("teste regex telefone");
console.log(telefone.test("(11)88175-4454")); 
console.log(telefone.test("(13)8175-4454")); 
console.log(telefone.test("88175-445")); 
console.log(telefone.test("8817-4444")); // so tem 4 digitos em um lado e 2 no outro
console.log(telefone.test("asd")); 