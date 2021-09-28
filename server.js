const express = require('express');
const app = express();
const porta = 3000;
const estudantes = require('./estudantes.json')
const nome = require('./noronha.json')

app.use(express.json())

//@router GET /estudantes
//@desc Retorna todos os estudantes
//@access Public
app.get('/estudantes', function(requisicao, resposta){
  resposta.json(estudantes)
});

app.get('/noronha', function(requisicao, resposta) {
  resposta.json(nome)
})

app.use(express.json())
app.listen(porta, function(){
  console.log("Servidor rodando na porta" + porta)
});
