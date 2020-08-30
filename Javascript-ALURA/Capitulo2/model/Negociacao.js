class Negociacao {

  /*Definindo valores padrão para minha classe
      constructor(){
            this.data = new Date();
            this.quantidade = 1;
            this.valor = 0.0;
      }
*/
 //Valores inseridos dinamicamente
      constructor(data, quantidade, valor){
            this._data = new Date(data.getTime());//O UNDERLINE SIGNIFICA QUE O ATRIBUTO É PRIVADO
            this._quantidade = quantidade;
            this._valor = valor;
            Object.freeze(this);//depois de inicializado não deixa ser alterado
          //Object.isFrozen(nome-objeto) -verifica se o objeto é congelado ou não
      }

      obtemVolume() {
          return this.quantidade * this.valor;
      }

      //METDOS DE ACESSOS AOS ATRIBUTOS PRIVADOS
      get data(){
        return new Date(this._data.getTime());
      }

      get quantidade(){
          return this._quantidade;
      }

      get valor(){
        return this._valor;
      }
}
