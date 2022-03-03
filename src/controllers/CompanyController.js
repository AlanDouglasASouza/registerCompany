import Company from "../models/Company";
import Company_inf from "../models/Company_inf";

export const getAllCompanies = async (req, res) => {
        const buscarComp = await Company.findAll({
            include: Company_inf,
            where: {is_Active: true}
        }).catch((erro) => {
            res.send("Deu ruim: " + erro);
        });

        res.json(buscarComp);
    }


export const getOneComp = async (req, res) => {    
        const oneComapany = await Company.findOne({
            include: Company_inf,
            where: {
                id: req.params.id,
                is_Active: true
            },
        }).catch((erro) => {
            res.send("Erro ao fazer o Get: " + erro);
        });
        if (oneComapany == null) {
            res.status(400).send("O valor do Id não existe");
        }
        res.json(oneComapany);
    }   


export const deleteCompany = async (req, res) => {
    const companyUpdate = await Company.findByPk(req.params.id);
    if (companyUpdate === null){
        res.status(400).send('Tupla inexistente nesse id')
    }
    companyUpdate.is_Active = false;
    const resultUp = await companyUpdate.save().catch((erro) => {
        res.send('Deu errado: ' + erro);
    });
    res.json(resultUp);
}