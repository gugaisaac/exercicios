
// para selecionar um elemento por id utilizasse a #
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(){
        console.log("Clicou em mim");
}
btn1.addEventListener("click", msg)

btn2.addEventListener("click", function() {
    btn1.removeEventListener("click",msg);
    console.log("Evento foi removido")

})
//sempre que utlizar um remove event, tem que ter uma função externa ao evento

// para remover um evento a ordem é
// - Elemento que vai alterar
// - O removeEventListener
// - o tipo de evento do elemento
// - o nome da função que será removida
