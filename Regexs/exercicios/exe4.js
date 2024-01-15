const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;


console.log(validarIP.test("127.1.1.1"));
console.log(validarIP.test("127.1.1.123"));
console.log(validarIP.test("127.1.123.1"));
console.log(validarIP.test("127.123.1.1"));
console.log(validarIP.test("1.123.1.1"));
console.log(validarIP.test("1.1.1.1"));
console.log(validarIP.test("1.1.1.1.1"));
console.log(validarIP.test("1.1.1"));
console.log(validarIP.test("1"));
console.log(validarIP.test("dajkljdsal"));
console.log(validarIP.test("54545"));