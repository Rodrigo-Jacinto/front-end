@deco
class Pessoa {
  constructor(public nome: string, public idade: number) {}
}

function deco(target: any) {
  Object.defineProperties(target.prototype, {
    curso: {
      value: 'python',
    },
  });
}

const p = new Pessoa('Rodrigo', 27);
