var Carro = /** @class */ (function () {
    //inicializa as propriedades da classe carro automaticamente
    function Carro(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
    ;
    Carro.prototype.toString = function () {
        console.log(this.marca, this.ano);
    };
    return Carro;
}());
var ca = new Carro('fiat', 2012);
ca.toString();
var Pessoa = /** @class */ (function () {
    function Pessoa(_cpf) {
        this._cpf = _cpf;
        Pessoa.lista.push(this._cpf);
    }
    ;
    Pessoa.prototype.getCpf = function () {
        return this._cpf;
    };
    Pessoa.prototype.setCPF = function (valor) {
        this._cpf = valor;
    };
    Pessoa.lista = [];
    return Pessoa;
}());
var p1 = new Pessoa('101.845.994-40');
var p2 = new Pessoa('111.111.111-11');
p1.setCPF('123.123.123-12');
console.log(p1.getCpf());
console.log(Pessoa.lista);
var Jogador = /** @class */ (function () {
    function Jogador(nome, chute) {
        this.nome = nome;
        this.chute = chute;
    }
    ;
    Jogador.prototype.qualidade = function () {
        return 100;
    };
    return Jogador;
}());
var j1 = new Jogador('neymar', 'forcom com a esquerda');
console.log(j1.qualidade());
