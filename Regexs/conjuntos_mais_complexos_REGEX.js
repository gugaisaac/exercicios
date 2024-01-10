const dia = /\d\d/;

console.log(dia.test("2019") && "2019".length == 2);// vai dar true pq tem dois numeros não somente dois digitos
console.log(dia.test("asd"));
console.log(dia.test("12") && "12".length == 2);
console.log(dia.test("ad1"));

const palavrasTresLetras = /\w\w\w/;

console.log(palavrasTresLetras.test("asd"));//true 
console.log(palavrasTresLetras.test("asdd"));// essa vai passar por ter 3 letras, não somente 3
console.log(palavrasTresLetras.test("as"));
