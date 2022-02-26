const express = require('express');
const Post = require('./models/Post');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/home', function(req, res){
    res.send("Hellow World!");
})

app.post('/sendCompany', function(req, res){
    Post.create({
        name: req.body.name,
        abstract: req.body.abstract,
        photoCompany: req.body.photoCompany,
        id_information: req.body.id_information
    }).then(function(){
        res.send("Post feito com sucesso!")
    }).catch(function(erro){
        res.send("Erro ao fazer o Post: " + erro)
    })
})

app.listen(8080, function(){
    console.log('Servidor iniciado');
});