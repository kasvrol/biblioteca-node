import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
    //uso de expressões regulares no javascript
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    //expressão regular executada no parâmetro 'texto'
    /*a variável temp deve receber a expressão executada no texto enquanto houver trechos no texto que se enquadre na expressão exigida*/
    while ((temp = regex.exec(texto)) !== null) {
        /*deve-se incluir os grupos como objeto onde o primeiro grupo da expressão será a chave e o segundo o valor*/
        arrayResultados.push({ [temp[1]]: temp[2] });
    }

    return arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}

async function pegaArquivo(caminhoDoArquivo) {
    const enconding = "utf-8";
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
        console.log(extraiLinks(texto));
    } catch (error) {
        trataErro(error);
    }
}

export default pegaArquivo;
