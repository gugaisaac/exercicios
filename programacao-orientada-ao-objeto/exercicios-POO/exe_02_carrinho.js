class Carrinho{
    constructor(itens, qtd, valorTotal){
        this.itens = itens
        this.qtd = qtd;
        this.valorTotal =valorTotal;
    }
    adicionar(item){

        let contador =0;
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id ==item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador =1;
            }
        }
        if(contador ==0){
            this.itens.push(item);
        }
        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    remover(item){
        
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id ==item.id){
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function (obj) { return obj.id == item.id});
                this.qtd -= this.itens[itemCarrinho].qtd;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
                this.itens.splice(index,1);

            
            }
        }

    }
}

let carrinho1 = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20 
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 4,
        preco: 100 
    }
],5,120);

// console.log(carrinho1.itens[0]);

carrinho1.adicionar({id:1, nome:"Camisa", qtd:2, preco:20});

// console.log(carrinho1.itens[0]);

carrinho1.adicionar({id:3, nome:"Bone", qtd:1, preco:15});

console.log(carrinho1.itens[0]);
console.log(carrinho1.itens[1]);
console.log(carrinho1.itens[2]);
console.log(carrinho1);

carrinho1.remover({id:1, nome:"Camisa", qtd:1, preco:20});
console.log(carrinho1.itens[0]);
