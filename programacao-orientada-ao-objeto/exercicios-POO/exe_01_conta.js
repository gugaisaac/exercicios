class Conta{
    constructor(nome, saldo){
        this.saldo = saldo;
        this.nome = nome;
    }
    depositar(qtdDepositada){
        let novoSaldo = this.saldo + qtdDepositada;
        this.saldo = novoSaldo;
        console.log("Saldo atual: " +this.saldo);
    }
    sacar(qtdSacada){
        let novoSaldo = this.saldo - qtdSacada;
        this.saldo = novoSaldo;
        console.log("Saldo atual: " +this.saldo);
    }
    verificarSaldo(){
        console.log("Ola "+ this.nome +"Saldo atual: " +this.saldo);
    }
}

let conta1 = new Conta("Gustavo", 1000);

conta1.verificarSaldo();
conta1.depositar(200);
conta1.sacar(500);
