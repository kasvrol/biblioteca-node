const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

function encontraErro(erro) {
    throw new Error(erro);
}

async function checaStatus(arrayLinks) {
    try {
        const arrayStatus = await Promise.all(
            arrayLinks.map(async (url) => {
                const response = await fetch(url);
                return response.status;
            })
        );
        return arrayStatus;
    } catch (error) {
        encontraErro(error);
    }
}

function geraArrayDeURLs(arrayLinks) {
    /**
     * Como a função de pegar links devolve um array de objetos com o nome dos sites e links
     * essa função irá ler o array com a função map()
     * e devolver apenas os valores dos objetos criando um único array com auxilio do join()
     */
    return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultado = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice],
    }));

    return resultado;
}

export default validaURLs;
