import express from 'express';
import  Company  from './models/Company';
import Company_inf from './models/Company_inf'
import { urlencoded, json } from 'body-parser';

const app = express();

app.use(urlencoded({extended: false}));
app.use(json());

app.get('/home', (req, res) => {
    res.send("Hellow World!");
});

app.get('/home/company-inf', (req, res) => {
    Company_inf.findAll().then(() => {
        res.send("Funcionou!");
    }).catch((erro) => {
        res.send("Deu ruim: " + erro);
    })
})

app.post('/sendCompany', (req, res) => {
    Company.create({
        name: req.body.name,
        abstract: req.body.abstract,
        photoCompany: req.body.photoCompany        
    }).then(() => {
        res.send("Post feito com sucesso!")
    }).catch((erro) => {
        res.send("Erro ao fazer o Post: " + erro)
    })
})

app.listen(8080, () => {
    console.log('Servidor iniciado');
});