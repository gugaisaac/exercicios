const validar = /[www.]?\w+\.com|.com.br/;

console.log(validar.test("www.google.com"));
console.log(validar.test("www.youtube.com.br"));
console.log(validar.test("www.youtube"));
console.log(validar.test("youtube.com"));