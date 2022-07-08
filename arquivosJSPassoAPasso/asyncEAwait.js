
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}

async function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        console.log(chalk.green(texto))
    } catch (error) {
        trataErro(error)
    }
}

pegaArquivo('./arquivos/texto1.md')