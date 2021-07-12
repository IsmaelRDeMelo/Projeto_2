import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";


let contaCorrente = new ContaCorrente(111, 111);
contaCorrente.deposita(100);

let contaPoupanca = new ContaPoupanca(222, 222);
contaPoupanca.deposita(200);

contaCorrente.transfere(10, contaPoupanca);

console.log("Conta Corrente: " + contaCorrente.getSaldo());
console.log("Conta Poupanca: " + contaPoupanca.getSaldo());