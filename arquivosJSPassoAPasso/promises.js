import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}

function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, enconding)
        .then((texto) => {
            console.log(chalk.green(texto))
        })
        .catch((error) => {
            trataErro(chalk.red(error))
        })
}

pegaArquivo('./arquivos/texto1.md')