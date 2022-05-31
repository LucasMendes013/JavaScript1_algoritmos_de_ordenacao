const livros = require('./listaLivros')
const menorValor = require('./index')



// Para a let atual de valor 0, sempre haverá loop enquanto atual for menor do que o tamanho(length) de livros. No final temos o incremento que andará de 1 em 1.
    for(let atual = 0; atual < livros.length; atual++){
        let menor = menorValor(livros, atual)

        let livroAtual =livros[atual]
        console.log('posicao atual:',atual)
        console.log('livro atual:', livros[atual])
        let livroMenorPreco = livros[menor]
        console.log('livro menor preco atual:', livros[menor])

        livros[atual] =livroMenorPreco
        livros[menor] = livroAtual
    }

    console.log(livros)