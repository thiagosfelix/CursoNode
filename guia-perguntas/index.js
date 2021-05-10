//Antes de tudo precisa executar no terminal o comando "npm install express --save" para colocar o express

//Depois precisa executar o comando "npm install ejs --save" para colocar o ejs

const express = require("express");
const app = express();


// Estou dizendo para o Express usar o EJS como view engine
app.set("view engine","ejs");

app.get("/:nome/:lang", function(req,res) {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 15},
        {nome: "RedBull", preco: 6},
        {nome: "Nescau", preco: 4}
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080,()=>{console.log("App rodando!");
});

// Abre o terminal e executa o comando "nodemon nomeDoArquivo.js" para rodar o servidor local