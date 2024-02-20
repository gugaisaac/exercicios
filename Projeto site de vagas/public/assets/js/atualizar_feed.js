function atualizarFeed() {
    fetch("/vagas/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed-vagas");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("feed-vagas");
                feed.innerHTML = "";
                for (var i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var divPublicacao = document.createElement("div");
                    var spanID = document.createElement("span");
                    var spanTitulo = document.createElement("span");
                    var spanNome = document.createElement("span");
                    var divDescricao = document.createElement("div");
                    var divButtons = document.createElement("div");

                    spanID.innerHTML = "ID: <b>" + publicacao.idMural + "</b>";
                    spanTitulo.innerHTML = "Título: <b>"+publicacao.titulo+"</b>";
                    spanNome.innerHTML = "Autor: <b>"+publicacao.nome+"</b>";
                    divDescricao.innerHTML = "Descrição: <b>"+publicacao.descricao+"</b>";

                    divPublicacao.className = "publicacao";
                    spanTitulo.id = "inputNumero"+publicacao.idMural;
                    spanNome.className = "publicacao-nome";
                    spanTitulo.className = "publicacao-titulo";
                    divDescricao.className = "publicacao-descricao";

                    divButtons.className = "div-buttons"

                    divPublicacao.appendChild(spanID);
                    divPublicacao.appendChild(spanNome);
                    divPublicacao.appendChild(spanTitulo);
                    divPublicacao.appendChild(divDescricao);
                    divPublicacao.appendChild(divButtons);
                    feed.appendChild(divPublicacao);
                }


            });
        } else {
            throw('Houve um erro na API!');
        }
    }).catch(function(resposta) {
        console.error(resposta);

    });
}

module.exports = {
    atualizarFeed
}