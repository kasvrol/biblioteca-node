import fs from "fs";
import path from "path";

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

    // função que checará se existe algum link requerido ou não
    const existeLink =
        arrayResultados.length === 0 ? "não existe link" : arrayResultados;

    return existeLink;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}

async function pegaArquivo(caminho) {
    /**
     * parâmetro __dirname vai capturar o caminho absoluto do arquivo até a pasta atual;
     * ’..’ utilizamos para voltar um nível na hierarquia de pastas;
     * caminho é o caminho relativo que estamos passando via linha de comando.
     */
    const caminhoAbsoluto = path.join("__dirname", "..", caminho);
    const encoding = "utf-8";
    try {
        /**
         * passando dois parâmetros: o caminho absoluto que montamos no item 2 com o módulo path;
         * o segundo parâmetro é um objeto, o encoding.
         */
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, {
            encoding,
        });
        /**
         * o método .map() para iterar o array de nomes de arquivos e nos devolver outro array, com os resultados.
         */
        const result = await Promise.all(
            arquivos.map(async (arquivo) => {
                /**
                 * reconstruir o caminho absoluto de cada arquivo a partir do caminho que já temos / o nome de cada um dos arquivos
                 * (que estamos recebendo a cada iteração do map() através do parâmetro arquivo
                 *
                 * Concatenamos tudo isso em uma string usando template strings e o caminho absoluto até o arquivo
                 */
                const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
                const texto = await fs.promises.readFile(
                    localArquivo,
                    encoding
                );
                return extraiLinks(texto);
            })
        );

        return result;
    } catch (erro) {
        return trataErro(erro);
    }
}

export default pegaArquivo;
