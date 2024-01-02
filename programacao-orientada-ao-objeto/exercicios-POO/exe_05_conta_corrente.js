class Conta{
    constructor(nome, saldoCorrente, saldoPoupanca){
        this.nome = nome;
        this.saldoCorrente = saldoCorrente
        this.saldoPoupanca = saldoPoupanca;
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
    // verificarSaldo(tipoConta, valor){
    //     let tipoContaCorrigida = tipoConta.toLowerCase();
    //     if(tipoContaCorrigida == "corrente"){
    //         if(this.saldoCorrente <valor){
    //             console.log("Verifique o valor da transferencia e faça a transferencia novamente");  
    //             return;
    //         }
            
    //     }else if(tipoContaCorrigida == "poupanca" || tipoContaCorrigida == "poupança"){
    //         if(this.saldoCorrente <valor){
    //             console.log("Verifique o valor da transferencia e faça a transferencia novamente");  
    //             return; 
    //         }   
    //     }else{
    //         console.log("Escolha entre conta corrente ou conta poupança")
    //     }
    // }
    // tipoConta será a conta que enviará
    transferir(tipoConta, valor){
        let tipoContaCorrigida = tipoConta.toLowerCase();
        if(tipoContaCorrigida == "corrente"){
            if(tipoContaCorrigida == "corrente"){
                if(this.saldoCorrente <valor){
                    console.log("Verifique o valor da transferencia e faça a transferencia novamente");  
                    return;
                }
                
            }else if(tipoContaCorrigida == "poupanca" || tipoContaCorrigida == "poupança"){
                if(this.saldoCorrente <valor){
                    console.log("Verifique o valor da transferencia e faça a transferencia novamente");  
                    return; 
                }   
            }else{
                console.log("Escolha entre conta corrente ou conta poupança")
            }
            this.saldoPoupanca -= valor;
            this.saldoCorrente += valor;
            console.log("Valor de " + valor + " transferido para conta corrente");
            console.log("Saldo atual em conta corrente: R$" + this.saldoCorrente);
            console.log("Saldo atual em conta poupança: R$" + this.saldoPoupanca);
        }else if(tipoContaCorrigida == "poupanca" || tipoContaCorrigida == "poupança"){
            if(tipoContaCorrigida == "corrente"){
                if(this.saldoCorrente <valor){
                    console.log("Verifique o valor da transferencia e faça a transferencia novamente");  
                    return;
                }
                
            }else if(tipoContaCorrigida == "poupanca" || tipoContaCorrigida == "poupança"){
                if(this.saldoCorrente <valor){
                    console.log("Verifique o valor da transferencia e faça a transferencia novamente");  
                    return; 
                }   
            }else{
                console.log("Escolha entre conta corrente ou conta poupança")
            }
            this.saldoCorrente -= valor;
            this.saldoPoupanca += valor;
            console.log("Valor de " + valor + " transferido para conta poupança");
            console.log("Saldo atual em conta corrente: R$" + this.saldoCorrente);
            console.log("Saldo atual em conta poupança: R$" + this.saldoPoupanca);
            
        }else{
            console.log("Escolha entre conta corrente ou conta poupança")
        }
    }
    puxarSaldo(){
        console.log("Ola "+ this.nome +" Saldo atual: " +this.saldo);
    }
}

let conta1 = new Conta("Gustavo", 1000, 1000, 5);

conta1.transferir("CORRENTE", 1500);
conta1.transferir("poupança", 1350);
conta1.transferir("corrente", 250);
conta1.transferir("poupanca", 750);
