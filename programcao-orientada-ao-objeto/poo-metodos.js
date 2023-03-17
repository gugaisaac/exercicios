const cachorro = {
    raca: 'SRD',
    latir: function() {
        console.log("Au Au");
    },
    rosnar: function(){
        console.log("Grrrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function(){
        return this.raca
    }
}
cachorro.latir();
cachorro.rosnar();
cachorro.setRaca("pastor alemão");
console.log(cachorro.getRaca());
