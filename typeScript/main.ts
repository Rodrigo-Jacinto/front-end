//força que as variáveis sejam de um tipo especifico, e o retorno da func tbm
function helloW(name: string):string {
     return "Hello" + name;
}

interface Icar {
    nome:string;
    ano:number;
}

class Car {
    nome:string;
    ano:number;

    constructor(name:string, ano:number) {
        this.nome = name;
        this.ano = ano;
    }
}

var getCar = function(car:Icar):void {
    console.log(car.nome, car.ano);
}

var carro = new Car('fiat', 2018);
getCar(carro);


