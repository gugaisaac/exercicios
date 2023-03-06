let nomes = ["rapha","dan","guga","samu","miguel"]

nomes.forEach(nomes => 
    {
        if(nomes == "gustavo"){
            console.log("Meu nome consta na lista meu nome é ", nomes);
        }
        else{
            console.log("Meu nome não consta na lista meu nome é ",nomes)
        }   
    })
if(nomes.includes("guga")){
    console.log("Meu nome consta na lista meu nome é ", nomes);    
}
