let p = Promise.resolve(5);

console.log("Outross codigos");

console.log(p);

p.then((value) => {return value +5})
 .then((value) =>{console.log(`O valor é ${value}`)})

// quando p foi resolvida chamou no then e utilizamos o value numa arrowfunction