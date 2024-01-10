//instrução de OU em um regex, utilizado para limitar as opções

const reg = /\w+: (Matheus|João|Maria)/;//Nome: sdagjhbhjsa; esse regex é pra escolha de nome(n precisa exatamente estar escrito nome e sim qualquer coisa)

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: Jose"));
console.log(reg.test("Neri: Maria"));

const reg2 = /Nome: (Matheus|João|Maria)/;//Nome: sdagjhbhjsa; esse regex é pra escolha de nome(precisa estar escrito nome se não da false)

console.log("teste regex com regex escrito Nome:");
console.log(reg2.test("Nome: Matheus"));
console.log(reg2.test("Neri: Matheus"));