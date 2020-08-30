class NegociacoesView {


    constructor(elemento){

      this._elemento = elemento;
    }

    _template(modelo){

        return `
          <table>

              <thead>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
              </thead>

              <tbody>
              ${modelo.map( n => {

                return `<tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.obtemVolume()}</td>
                  </tr>`
              }).join('')}

              </tbody>

              <tfoot>

                <td colspan="3"></td>
                <td>${
                  (function() {
                    let total = 0;
                    modelo.negociacoes.forEach(nc => total+= nc.obtemVolume())
                    return total;
                  })()

                }</td>
              </tfoot>

          </table>
          `;

    }

    update(modelo){

        this._elemento.innerHTML = this._template(modelo);
    }

}
