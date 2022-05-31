// InsertionSort = Vamos inserindo as informações na posicao correta

const livros = require('./listaLivros')

function inserctionSort(lista){
    for(let atual = 0; atual < lista.length; atual ++){
        let analise = atual
        while(analise > 0 && lista[analise].preco< lista[analise -1].preco){
            let itemAnalise =lista[analise]
            let itemAnterior =lista[analise -1]


            lista[analise] =itemAnterior
            lista[analise -1] =itemAnterior

            analise--

        }
    }
    console.log(lista)
}

inserctionSort(livros)