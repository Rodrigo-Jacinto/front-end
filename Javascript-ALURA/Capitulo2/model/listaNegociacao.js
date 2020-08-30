class listaNegociacao {

      constructor(){

          this._listaNegociacao = [];
      }

    adicionaNegociacao(negociacao){
      
          this._listaNegociacao.push(negociacao);
    }

    get negociacoes(){

      return [].concat(this._listaNegociacao);
    }
}
