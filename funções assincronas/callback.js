console.log("1");

setTimeout(function(){
    console.log("5")
},2000);
//o codigo assincrono é uma função que nao será executada de forma comum no codigo, de forma estruturada, e sim dps de x tempo q passar por aquela função
// função setTimeout é uma função de 2 parametros aonde a primeira recebera uma função e o segundo parametro sera o tempo que ela será executada, medindo esse tempo em ms

console.log("2");
console.log("3");
console.log("4");
