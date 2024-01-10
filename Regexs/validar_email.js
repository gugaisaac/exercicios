const validar = /\w+@\w+\.\w+/;

console.log(validar.test("guga@gmail.com"));
console.log(validar.test("gmail.com"));
console.log(validar.test("guga@"));