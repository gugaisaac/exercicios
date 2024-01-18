async function somar(a,b){
    return a + b;
}

console.log(somar(2,4));

somar(5,3).then(value => console.log(value));

//funções assincronas nada mais são que promessas