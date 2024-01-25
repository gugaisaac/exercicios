let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(){
    console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", function(){
    console.log("Soltou o botão");
});


btn2.addEventListener("dblclick", function(){
    console.log("Deu double click");
});

btn2.addEventListener("contextmenu", function(e){
    e.preventDefault();
    console.log("botão direito")

})

// mouse down é apertar o botao
// mouse up é soltar o botao
// dblclick é double click o botao
// contextmenu é menu que abre com o botao direito