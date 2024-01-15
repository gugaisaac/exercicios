const validarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarUsuario.test("NomeDeUsuario"));
console.log(validarUsuario.test("No"));
console.log(validarUsuario.test("Nomedousuariotaltaltal"));
console.log(validarUsuario.test("Nomedousuario32"));
console.log(validarUsuario.test("32Nome"));