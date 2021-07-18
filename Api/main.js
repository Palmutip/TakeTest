const express = require('express');
const app = express();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const Req = new XMLHttpRequest();

const PORT = process.env.PORT || 8877;

app.get('/', (req, res) => {
    res.json({ msg : "OK"}) 
})

app.get('/repo1', (req, res) => {
    res.json(JSON.parse(repositorio("https://api.github.com/repos/takenet/markdocs", Req))) 
})

app.get('/repo2', (req, res) => {
    res.json(JSON.parse(repositorio("https://api.github.com/repos/takenet/rabbitmq-dotnet-client", Req))) 
})

app.get('/repo3', (req, res) => {
    res.json(JSON.parse(repositorio("https://api.github.com/repos/takenet/MarkdownSharp-GithubCodeBlocks", Req))) 
})

app.get('/repo4', (req, res) => {
    res.json(JSON.parse(repositorio("https://api.github.com/repos/takenet/FreshMvvm", Req))) 
})

app.get('/repo5', (req, res) => {
    res.json(JSON.parse(repositorio("https://api.github.com/repos/takenet/SignalR", Req))) 
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})

function repositorio(url, requisicao){
   
    // Seta tipo de requisição e URL com os parâmetros
    requisicao.open("GET", url, false);

    // Envia a requisição
    requisicao.send(null);

    return requisicao.responseText;
}
