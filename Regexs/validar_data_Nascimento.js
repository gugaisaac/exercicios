const validar = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validar.test("02/05/1999"));
console.log(validar.test("99/99/9999"));
console.log(validar.test("2/5/1999"));
console.log(validar.test("2-5-1999"));
console.log(validar.test("2/5/99"));