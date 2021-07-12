export default class Conta{
    constructor(agencia, numero){
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = 0;
        this.total = 0;
        this.total++;
    }

    deposita(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return true;
        }else{
            return false;
        }
    }

    saca(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }else{
            return false;
        }
    }

    transfere(valor, contaDestino){
        if(this.saca(valor)){
            contaDestino.deposita(valor);
            return true;
        }else{
            return false;
        }
    }

    getSaldo(){
        return this.saldo;
    }

    getNumero(){
        return this.numero;
    }

    setNumero(numero){
        if (numero <= 0) {
            console.log("Não pode valor menor igual a 0");
            return;
        }
        this.numero = numero;
    }

    getAgencia(){
        return this.agencia;
    }

    setAgencia(agencia){
        if(agencia <= 0){
            console.log("Não pode valor menor igual a 0");
            return;
        }
        this.agencia = agencia;
    }

    setTitular(titular){
        this.titular = titular;
    }

    getTitular(){
        return this.titular;
    }

    getTotal(){
        return this.total;
    }
}