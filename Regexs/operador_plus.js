const umOuMaisNumeros = /\d+/;
//aceita 1 ou mais numeros, caso seja espaço ou letras não aceita
console.log(umOuMaisNumeros.test("1518")); 
console.log(umOuMaisNumeros.test("")); 
console.log(umOuMaisNumeros.test("dsada")); 


