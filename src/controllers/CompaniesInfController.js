import Company from "../models/Companies";
import Company_inf from "../models/Companies_inf";
import { validateCnpj } from "../validations/validateCnpj";
import { validateInscEst } from "../validations/validateInscEst";
import { validateEmail } from "../validations/validateEmail";

export const createCompany = async (req, res) => {

    if(!validateCnpj(req.body.cnpj)){
        res.status(400).send('CNPJ does not exist!');
    }
    
    if(!validateInscEst(req.body.insc_est)){
        res.status(400).send('Inscrição Estadual inexistente!');
    }

    if(!validateEmail(req.body.email)){
        res.status(400).send('Email does not exist!');
    }

    const createInf = await Company_inf.create({
        director: req.body.director,
        cnpj: req.body.cnpj,
        insc_est: req.body.insc_est,
        insc_mun: req.body.insc_mun,
        adress: req.body.adress,
        email: req.body.email,
        phone: req.body.phone,
    }).catch((erro) => {
        res.status(400).send("Err: " + erro);
    });
        
    const idInf = await createInf.id;

    const companiesRegister = await Company.create({
        name: req.body.name,
        abstract: req.body.abstract,
        photoCompany: req.body.photoCompany,
        companiesInformationId: idInf
    }).catch((erro) => {
        res.send("Err: " + erro);
    });

    res.send(companiesRegister);
    
}