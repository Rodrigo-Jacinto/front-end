interface pessoa {
    nome: string;
    idade: number;
}

interface carro {
    marca: string;
    //a prorpiedade ano vira opcional
    ano?: number;
}

//Obriga que nome da propriedade e seu tipo sejam iguais da interface
function listaP(p: pessoa) {

    return p;
}

//Obriga que o retorno possua o tipo da interface
function retornaP(nome: string, idade: number): pessoa {

    return { nome, idade };
}

console.log(listaP({ nome: 'rodrigo', idade: 22 }));
console.log(retornaP('Neymar', 26));

//interface de função
interface hello {
    (saudacao:string):string;
}
var msg:hello; 

msg = function(valor:string):string {
    return valor
}