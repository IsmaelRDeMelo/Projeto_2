import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta{
    constructor(agencia, numero) {
        super(agencia, numero);
    }

    deposita(valor){
        this.saldo += valor;
    }
}