let timeout;

window.addEventListener("mousemove", function(e){
    this.clearTimeout(timeout);
    timeout= setTimeout(function(){
        console.log(e.x);
    },500)

})


//debounce é um suavizador de eventos para não chamar ele tantaas vezes, colocando um contador para fazer uma ação, no caso do mouse de x em x tempo