import chalk from "chalk";
import pegaArquivo from "./index.js";

const caminho = process.argv;

// função assincrona que deve esperar a função pegaArquivo ler o texto primeiro para trazer resultados
async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    console.log(chalk.yellow("lista de links"), resultado);
}

processaTexto(caminho);
