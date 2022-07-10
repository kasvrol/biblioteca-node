import pegaArquivo from "./index.js";
const caminho = process.argv;

console.log(pegaArquivo(caminho[2]));

/**
 * Com o comando node cli.js ./arquivos/texto1.md
 * o terminal resultará:
 * [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    },
    {
        '<input>': 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input'
    },
    {
        DataTransfer: 'https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer'
    },
    {
        HTMLCanvasElement: 'https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement'
    },
    {
        'Implementation notes': 'https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes'
    }
]
 */

//CONSTRUÇÃO ANTERIOR PARA CHEGAR A CONCLUSÃO DESTE DIRETÓRIO

/*
Ao rodar node cli.js com o arquivo sendo composto apenas por a linhas

const caminho = process.argv;

console.log(caminho);

o terminal resultará:

[ caminho que está  a framework node
    'C:\\Program Files (x86)\\nodejs\\node.exe',
    caminho que está o arquivo cli.js
    'C:\\Users\\doval\\Desktop\\biblioteca-node\\cli.js'
]

Ao acrescentar o caminho de outro arquivo  na linha de comendo, por exemplo:
node cli.js ./arquivos/texto1.md

O terminal mostrará:

[
    'C:\\Program Files (x86)\\nodejs\\node.exe',
    'C:\\Users\\doval\\Desktop\\biblioteca-node\\cli.js',
    './arquivos/texto1.md'
]

Ou seja a aplicação retorna um array com os endereços e possíveis aplicações nos arquivos requisitados.

 */
