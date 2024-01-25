window.addEventListener("keydown", function(e) {
    if(e.key == 'q') {
        console.log("Apertou a letra q");
    }
    if(e.key == 'Enter'){
        console.log("Apertou Enter")
    }

})

window.addEventListener("keyup", function(e){
    if(e.key == 'Enter'){
        console.log("Soltou o Enter")
    }
    if(e.key == 'q'){
        console.log("Soltou o q")
    }

})

// keyup é quando a tecla é apertada
// key down é quando a tecla é solta