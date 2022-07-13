import pegaArquivo from "../index";

const resultado = [
    {
        FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
    },
];

describe("pegaArquivo::", () => {
    it("deve ser uma função", () => {
        expect(typeof pegaArquivo).toBe("function");
    });
    it("deve retornar um array de resultados", async () => {
        const theFunction = await pegaArquivo(
            "../biblioteca-node/test/arquivos/com-link.md"
        );
        expect(theFunction).toEqual(resultado);
    });
    it("não deve retornar links", async () => {
        const theFunction = await pegaArquivo(
            "../biblioteca-node/test/arquivos/sem-link.md"
        );
        expect(theFunction).toEqual("não existe link");
    });
});
