import fs from 'fs';
//fs é uma biblioteca interna do node

//função da documentação da biblioteca fs
function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    /*ultimo parametro do método é uma callback,
     onde o primeiro parametro sempre será o erro e o segundo os dados do arquivo*/
    /* quando deseja ignorar um parametro, usa-se _ no lugar dele */
    fs.readFile(caminhoDoArquivo, enconding, (_, texto) => {
        console.log(texto)
    })
}

pegaArquivo('./arquivos/texto1.md')