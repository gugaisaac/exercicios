var database = require("../../database/config")

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            v.id_vagas AS idVagas,
            v.titulo_vaga,
            v.descricao_vaga,
            v.empresa_vaga,
            v.salario,
            v.logo_imagem as logo
        FROM vagas v;
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}
function buscarImagem(idVagas){
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarImagem()");
    var instrucao = 
    `SELECT 
        v.id_vagas AS idVagas
        v.logo_imagem 
    FROM vagas v 
    WHERE v.id=${idVagas};`;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    buscarImagem
}