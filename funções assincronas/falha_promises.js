let p = Promise.resolve(new Error("Não deu certo nn"));

console.log("asjdhjkdsa");

p.then((value) => console.log(value))
 .catch(reason => console.log("Falhou : "+reason))