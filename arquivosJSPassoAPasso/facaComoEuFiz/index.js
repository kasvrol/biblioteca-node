import fs from "fs";
import path from "path";

async function pegaArquivo(caminho) {
    /**
     * parâmetro __dirname vai capturar o caminho absoluto do arquivo até a pasta atual;
     * ’..’ utilizamos para voltar um nível na hierarquia de pastas;
     * caminho é o caminho relativo que estamos passando via linha de comando.
     */
    const caminhoAbsoluto = path.join("__dirname", "../..", caminho);
    const encoding = "utf-8";
    /**
     * passando dois parâmetros: o caminho absoluto que montamos no item 2 com o módulo path;
     * o segundo parâmetro é um objeto, o encoding.
     */
    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
    console.log("arquivos", arquivos);
}

export default pegaArquivo;
