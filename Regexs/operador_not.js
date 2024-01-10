const notab = /[^ab]/
// vai negar sempre que estiver solo a ou b
console.log("Teste [^ab]"); 
console.log(notab.test("a"));//false 
console.log(notab.test("b"));//false 
console.log(notab.test("Aqui tem a"));//true 

const notatoz = /[^a-z]/
// vai negar qualquer texto deque seja somente de a a z, espaços e numeros validam
console.log("Teste [^a - z]"); 
console.log(notatoz.test("a"));//false 
console.log(notatoz.test("b"));//false 
console.log(notatoz.test("aqui tem a"));//true pois tem espaço
console.log(notatoz.test("aquitema"));//false pois não tem espaço
console.log(notatoz.test("aquitema213"));//true pois tem numero
