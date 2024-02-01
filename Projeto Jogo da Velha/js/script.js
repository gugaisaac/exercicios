let bloco1 = document.querySelector("#bloco1");
let bloco2 = document.querySelector("#bloco2");
let bloco3 = document.querySelector("#bloco3");
let bloco4 = document.querySelector("#bloco4");
let bloco5 = document.querySelector("#bloco5");
let bloco6 = document.querySelector("#bloco6");
let bloco7 = document.querySelector("#bloco7");
let bloco8 = document.querySelector("#bloco8");
let bloco9 = document.querySelector("#bloco9");

let botaoResetar = document.querySelector("#btn_resetar");
let botaoJogoIA = document.querySelector("#btn_jogarIA");

let elementBloco1 = document.getElementById("bloco1");
let elementBloco2 = document.getElementById("bloco2");
let elementBloco3 = document.getElementById("bloco3");
let elementBloco4 = document.getElementById("bloco4");
let elementBloco5 = document.getElementById("bloco5");
let elementBloco6 = document.getElementById("bloco6");
let elementBloco7 = document.getElementById("bloco7");
let elementBloco8 = document.getElementById("bloco8");
let elementBloco9 = document.getElementById("bloco9");

let player = 2;
let trava1 = true;
let trava2 = true;
let trava3 = true;
let trava4 = true;
let trava5 = true;
let trava6 = true;
let trava7 = true;
let trava8 = true;
let trava9 = true;

botaoResetar.addEventListener("click", function(){
    atualizarPagina();
})
// botaoJogoIA.addEventListener("click", function(){
    
// })


let jogo = [0,1,2,3,4,5,6,7,8];
let ganhou = false;
function verificarJogo(){
    if(jogo[0] == jogo[1] && jogo[1]== jogo[2] ){
        alert(`PARABENS JOGADOR ${jogo[0]} você ganhou o jogo da velha`)
        ganhou = true;
        atualizarPagina();
    } else if (jogo[3] == jogo[4] && jogo[4]== jogo[5]){
        alert(`PARABENS JOGADOR ${jogo[3]} você ganhou o jogo da velha`);
        ganhou = true;
        atualizarPagina();
    } else if (jogo[6] == jogo[7] && jogo[7]== jogo[8]){
        alert(`PARABENS JOGADOR ${jogo[6]} você ganhou o jogo da velha`);
        ganhou = true;
        atualizarPagina();
    } else if (jogo[0] == jogo[3] && jogo[3]== jogo[6]){
        alert(`PARABENS JOGADOR ${jogo[0]} você ganhou o jogo da velha`);
        ganhou = true;
        atualizarPagina();
    } else if (jogo[1] == jogo[4] && jogo[4]== jogo[7]){
        alert(`PARABENS JOGADOR ${jogo[1]} você ganhou o jogo da velha`);
        ganhou = true;
        atualizarPagina();
    } else if (jogo[2] == jogo[5] && jogo[5]== jogo[8]){
        alert(`PARABENS JOGADOR ${jogo[2]} você ganhou o jogo da velha`);
        ganhou = true;
        atualizarPagina();
    } else if (jogo[0] == jogo[4] && jogo[4]== jogo[8]){
        alert(`PARABENS JOGADOR ${jogo[0]} você ganhou o jogo da velha`);
        ganhou = true;
        atualizarPagina();
    } else if (jogo[2] == jogo[4] && jogo[4]== jogo[6]){
        alert(`PARABENS JOGADOR ${jogo[2]} você ganhou o jogo da velha`);
        ganhou = true;
        atualizarPagina();
    }
    verificarCompleto();
}

function verificarCompleto(){
    let cont=0;
    if(!ganhou){
        for(let i=0;i<jogo.length;i++){
            if(jogo[i] == "X" || jogo[i] == "O"){
                cont++;
            }
        }
        if(cont==9){
            alert("Vishh, vocês são muito bons, deu velha :/")
            atualizarPagina();
        }
    }
}
function atualizarPagina(){
    window.location.reload(true);
}
bloco1.addEventListener("click", function(){
    if(trava1){
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco1.style.color = '#00ff0d';
            elementBloco1.appendChild(texto);
            player = 2;
            jogo[0] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco1.style.color = '#ff0000';
            elementBloco1.appendChild(texto);
            player = 1;
            jogo[0] = "O";
        }
        trava1=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});
bloco2.addEventListener("click", function(){
    
    if(trava2){//variavel para n adicionar mais de um texto aq
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco2.style.color = '#00ff0d';
            elementBloco2.appendChild(texto);
            player = 2;
            jogo[1] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco2.style.color = '#ff0000';
            elementBloco2.appendChild(texto);
            player = 1;
            jogo[1] = "O";
        }
        trava2=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});
bloco3.addEventListener("click", function(){
    if(trava3){//variavel para n adicionar mais de um texto aq
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco3.style.color = '#00ff0d';
            elementBloco3.appendChild(texto);
            player = 2;
            jogo[2] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco3.style.color = '#ff0000';
            elementBloco3.appendChild(texto);
            player = 1;
            jogo[2] = "O";
        }
        trava3=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});
bloco4.addEventListener("click", function(){
    
    if(trava4){//variavel para n adicionar mais de um texto aq
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco4.style.color = '#00ff0d';
            elementBloco4.appendChild(texto);
            player = 2;
            jogo[3] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco4.style.color = '#ff0000';
            elementBloco4.appendChild(texto);
            player = 1;
            jogo[3] = "O";
        }
        trava4=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});
bloco5.addEventListener("click", function(){
    if(trava5){//variavel para n adicionar mais de um texto aq
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco5.style.color = '#00ff0d';
            elementBloco5.appendChild(texto);
            player = 2;
            jogo[4] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco5.style.color = '#ff0000';
            elementBloco5.appendChild(texto);
            player = 1;
            jogo[4] = "O";
        }
        trava5=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});
bloco6.addEventListener("click", function(){  
    if(trava6){//variavel para n adicionar mais de um texto aq
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco6.style.color = '#00ff0d';
            elementBloco6.appendChild(texto);
            player = 2;
            jogo[5] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco6.style.color = '#ff0000';
            elementBloco6.appendChild(texto);
            player = 1;
            jogo[5] = "O";
        }
        trava6=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});
bloco7.addEventListener("click", function(){
    if(trava7){//variavel para n adicionar mais de um texto aq
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco7.style.color = '#00ff0d';
            elementBloco7.appendChild(texto);
            player = 2;
            jogo[6] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco7.style.color = '#ff0000';
            elementBloco7.appendChild(texto);
            player = 1;
            jogo[6] = "O";
        }
        trava7=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});
bloco8.addEventListener("click", function(){
    if(trava8){//variavel para n adicionar mais de um texto aq
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco8.style.color = '#00ff0d';
            elementBloco8.appendChild(texto);
            player = 2;
            jogo[7] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco8.style.color = '#ff0000';
            elementBloco8.appendChild(texto);
            player = 1;
            jogo[7] = "O";
        }
        trava8=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});
bloco9.addEventListener("click", function(){
    if(trava9){
        if(player==1){
            let texto = document.createTextNode("X");
            elementBloco9.style.color = '#00ff0d';
            elementBloco9.appendChild(texto);
            player = 2;
            jogo[8] = "X";
        }else{
            let texto = document.createTextNode("O");
            elementBloco9.style.color = '#ff0000';
            elementBloco9.appendChild(texto);
            player = 1;
            jogo[8] = "O";
        }
        trava9=false;
    }
    else{
        alert("Já escolheram essa posição, escolha outra")
    }
    console.log("JOGO: "+ jogo);
    verificarJogo();
});