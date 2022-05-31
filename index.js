
const livros = require('./listaLivros')
//                    0   1   2   3   4   5  este é o valor de arrays

function menorValor(arrayProdutos, posicaoInicial){
// entao o maisBarato comecara pela posicao 0 de cima pois ambos equivalem a 0
let maisBarato = 0
for (let atual = 0; atual < arrayProdutos.length -1; atual ++){
    if(arrayProdutos[atual].preco< arrayProdutos[maisBarato].preco){
        maisBarato = atual
        }     
    }
    return maisBarato
}
module.exports = menorValor