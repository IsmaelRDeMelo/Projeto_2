import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import SeguroDeVida from "./SeguroDeVida.js";
import CalculadorDeImposto from "./CalculadorDeImpost.js"

let contaCorrente = new ContaCorrente(222, 333);
contaCorrente.deposita(100);

let seguroVida = new SeguroDeVida();

let calculaImposto = new CalculadorDeImposto();
calculaImposto.registra(contaCorrente);
calculaImposto.registra(seguroVida);

console.log(calculaImposto.getTotalImposto());