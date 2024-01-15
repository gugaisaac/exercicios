const validarMaiuscula = /[A-Z]/;

console.log(validarMaiuscula.test("ola tudo bem"));
console.log(validarMaiuscula.test("OLA TUDO BEM?"));
console.log(validarMaiuscula.test("123456"));