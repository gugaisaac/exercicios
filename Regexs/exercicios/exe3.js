const choiceMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(choiceMarca.test("Não é Nike"));
console.log(choiceMarca.test("Marca: Futebol"));
console.log(choiceMarca.test("Marca: Nike"));
console.log(choiceMarca.test("Marca: Adidas"));
console.log(choiceMarca.test("Marca: Puma"));
console.log(choiceMarca.test("Marca: Asics"));