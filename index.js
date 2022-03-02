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
        res.send("Post feito com sucesso!");
    }).catch((erro) => {
        res.send("Erro ao fazer o Post: " + erro);
    })
})

app.post('/registerCompany', async (req, res) => {
    const createInf = await Company_inf.create({
        director: req.body.director,
        cnpj: req.body.cnpj,
        insc_est: req.body.insc_est,
        insc_mun: req.body.insc_mun,
        adress: req.body.adress,
        email: req.body.email,
        phone: req.body.phone,
    }).catch((erro) => {
        res.send("Erro ao fazer o post: " + erro);
    });
        
    const idInf = await createInf.id;

    await Company.create({
        name: req.body.name,
        abstract: req.body.abstract,
        photoCompany: req.body.photoCompany,
        companiesInformationId: idInf
    }).catch((erro) => {
        res.send("Erro ao fazer o post: " + erro);
    });

    res.send("Post Bem sucedido!");
    
});

app.listen(8080, () => {
    console.log('Servidor iniciado');
});
