//quando n é definido o evento de forma correta temos uma propagação do evento, passando do elemento pai para o filho, 
// devemos limitar aonde o evento ocorre, para parar essa propagação utilizamos o stopPropagation

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e){
    console.log("Clicou no button");
    e.stopPropagation();
}
btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log(event);
});

p.addEventListener("click", function(){
    console.log("clicou no paragrafo")

})
