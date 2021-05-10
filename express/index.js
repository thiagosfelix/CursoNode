const express = require("express"); // Importando o Express
const app = express(); // Iniciando o Express

app.get("/", function(req, res) {
    res.send("Bem-vindo ao Guia do Programador")
});

app.get("/blog/:artigo?", function(req,res) {
    // Quando se coloca "?" no fim do parâmetro, significa que ele é opcional
    var artigo = req.params.artigo;

    if(artigo) {
        res.send(`<h2>Artigo ${artigo}</h2>`)
    } else {
        res.send("Bem-vindo ao meu blog!");
    }
})

app.get("/canal/youtube", function(req,res) {
    var canal = req.query["canal"]

    if(canal) {
        res.send(canal);
    } else{
        res.send("Nenhum canal fornecido!");
    }
})

app.get("/ola/:nome/:empresa", function(req,res) {
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send(`Olá, ${nome} da empresa ${empresa}, seja bem-vindo!`);
})

app.listen(4000,function(erro) {
    if(erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
})