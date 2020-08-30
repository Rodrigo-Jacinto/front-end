class Carro {

    //inicializa as propriedades da classe carro automaticamente
    constructor(public marca: string, public ano: number) { };

    toString() {
        console.log(this.marca, this.ano);
    }

}

var ca = new Carro('fiat', 2012);
ca.toString();

class Pessoa {

    static lista: Array<string> = [];

    constructor(private _cpf: string) {
        Pessoa.lista.push(this._cpf);
    };

    public getCpf() {
        return this._cpf;
    }

    public setCPF(valor: string) {
        this._cpf = valor;
    }
}

var p1 = new Pessoa('101.845.994-40');
var p2 = new Pessoa('111.111.111-11');

p1.setCPF('123.123.123-12');
console.log(p1.getCpf());
console.log(Pessoa.lista);


//implementando interfaces
interface skills {
    chute:string;
    qualidade():number;
}

//classe jogador é obrigada a implementar propriedade e metodo com o mesmo nome que foi escrita na interface
class Jogador implements skills {

    constructor(public nome:string, public chute:string){};

    public qualidade():number {
        return 100;
    }
}

var j1 = new Jogador('neymar', 'forcom com a esquerda');

console.log(j1.qualidade());