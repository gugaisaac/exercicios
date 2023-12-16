let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Auau");
    }
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemao" 
pastorAlemao.latir;
console.log(pastorAlemao.raca);
console.log(cachorro.raca);
