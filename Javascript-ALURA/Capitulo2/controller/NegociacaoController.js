class NegociacaoController {

        constructor(){

          let $ = document.querySelector.bind(document);
          this._inputData = $("#data");
          this._inputQuantidade = $("#quantidade");
          this._inputValor = $("#valor");
          this._tbody = $("table tbody");
          this._listaNegociacao = new listaNegociacao();
          this._negociaoesView = new NegociacoesView($("#ncView"));

          this._negociaoesView.update(this._listaNegociacao.negociacoes);
        }

      adiciona(event){

        event.preventDefault();
        this._listaNegociacao.adicionaNegociacao(this._criaNegociacao());
        this._negociaoesView.update(this._listaNegociacao.negociacoes);
        this._limpaFormulario();
      }//FIM DA FUNÇÃO ADICIONA

      _limpaFormulario(){

          this._inputData.value = '';
          this._inputQuantidade.value = 1;
          this._inputValor.value = 0.0;
          this._inputData.focus();
      }

      _criaNegociacao(){

          return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
          );
      }
}
