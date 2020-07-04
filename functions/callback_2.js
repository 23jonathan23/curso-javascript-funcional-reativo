const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "texto.txt");

function exibir(_, conteudo) {
  console.log(conteudo.toString());
}

//Leitura de arquivo de forma async
fs.readFile(caminho, exibir);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));

//Leitura de forma sync
const resul = fs.readFileSync(caminho);
console.log(resul.toString());
