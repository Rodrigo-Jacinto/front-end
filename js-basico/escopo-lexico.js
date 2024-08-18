//em JS as funções conseguem enxergar varíaveis globais.

var profi = 'Analista Pleno';

function pai() {
  let nome = 'Rodrigo';
  function filho() {
    let idade = '28';
    console.log(
      `Meu nome é ${nome} tenho ${idade} anos, e minha profisãao é ${profi}`
    );
  }

  return filho();
}

pai();
