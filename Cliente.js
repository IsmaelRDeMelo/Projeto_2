export default class Cliente{
    constructor(nome, cpf, profissao) {
        this.nome = nome;
        this.cpf = cpf;
        this.profissao = profissao;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getCpf(){
        return this.cpf;
    }

    setCpf(cpf){
        this.cpf = cpf;
    }

    getProfissao(){
        return this.profissao;
    }

    setProfissao(profissao){
        this.profissao = profissao;
    }
}