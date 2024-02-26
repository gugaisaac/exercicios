var vagasModel = require("../models/vagasModel");

function listar(req, res) {
    vagasModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarImagem(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.buscarImagem(idUsuario)
    .then(
        function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log(
                "Houve um erro ao buscar as imagens: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    listar,
    buscarImagem
}