//força que as variáveis sejam de um tipo especifico, e o retorno da func tbm
function helloW(name) {
    return "Hello" + name;
}
var Car = /** @class */ (function () {
    function Car(name, ano) {
        this.nome = name;
        this.ano = ano;
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.nome, car.ano);
};
var carro = new Car('fiat', 2018);
getCar(carro);
