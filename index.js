
const livros = require('./listaLivros')
//                    0   1   2   3   4   5  este é o valor de arrays


// entao o maisBarato comecara pela posicao 0 de cima pois ambos equivalem a 0
let maisBarato = 0

for (let atual = 0; atual < livros.length; atual ++){
    if(livros[atual].preco< livros[maisBarato].preco){
        maisBarato = atual
    }   
    
}
console.log(`O livro mais barato custa ${livros[maisBarato].preco} e seu titulo é ${livros[maisBarato].titulo}`)