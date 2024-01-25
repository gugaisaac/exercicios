
//devemos atrelar um evento a um elemento, por exemplo um botão
// depois inserir um listener(ouvir) e o tipo de evento como argumento

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("Clicou em mim");
})
