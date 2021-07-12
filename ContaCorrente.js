import Conta from "./Conta.js"

export default class ContaCorrente extends Conta{
    constructor(agencia, numero) {
        super(agencia, numero);
    }

    saca(valor){
        let valorSacar = valor + 0.2;
        return super.saca(valorSacar);
    }

    deposita(valor){
        this.saldo += valor;
    }

    getValorImposto(){
        return this.saldo * 0.01;
    }

}