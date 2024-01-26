// window.addEventListener("load", function(){
//     alert("Assine os nossos termos de uso");
// });

window.addEventListener("beforeunload", function(e){
    e.preventDefault();
})
// com o prevent default tu para a opção padrão da ação, sendo assim inves de você fechar a pagina tu para essa ação com um aviso

//load=assim que a tela for carregada terá esse evento acontecendo
//beforeunload quando for fechar a pagina ou atualiza-la manda um alert perguntando se é isso mesm