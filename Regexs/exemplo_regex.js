const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("não tem"));

const reg2 = /bola/;

const text = "Tem bola na cesta?"; 

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("não tem"));
console.log(reg2.test(text));


console.log(/quadrado/.test("Será que tem um quadrado?"));


