const { error } = require('console');
// readFile sendo um metodo que será chamado
let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf-8", (error, text) => {
    if(error){
        throw error;
    }
    else{
        console.log(text);
    }
});

writeFile("arquivo.txt", "texto por Write File", (error) => {
    if(error){
        throw error;
    }
    else{
        console.log("escreveu por sucesso");
    }
});