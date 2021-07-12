export default class CalculadorDeImposto{
    constructor() {
        this.totalImposto = 0;
    }
    
    registra(tributavel){
        let valor = tributavel.getValorImposto();
        this.totalImposto += valor;
    }

    getTotalImposto(){
        return this.totalImposto;
    }
}