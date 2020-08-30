function listaP(p) {
    return p;
}
function retornaP(nome, idade) {
    return { nome: nome, idade: idade };
}
console.log(listaP({ nome: 'rodrigo', idade: 22 }));
console.log(retornaP('Neymar', 26));
