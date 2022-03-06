import Company from "../models/Companies";
import Company_inf from "../models/Companies_inf";

export const getAllCompanies = async (req, res) => {
        const getComp = await Company.findAll({
            include: Company_inf,
            where: {is_Active: true}
        }).catch((err) => {
            throw new Error("Err " + err);
        });

        res.json(getComp);
    }


export const getOneCompanies = async (req, res) => {    
        const oneComapany = await Company.findOne({
            include: Company_inf,
            where: {
                id: req.params.id,
                is_Active: true
            },
        }).catch((err) => {
            throw new Error("Err " + err);
        });
        if (oneComapany == null) {
            res.status(400).send("non-existent ID");            
        }       

        res.json(oneComapany);
    }   


export const deleteCompany = async (req, res) => {
    const companyUpdate = await Company.findByPk(req.params.id);
    if (companyUpdate === null){
        res.status(400).send('non-existent ID')
    }
    companyUpdate.is_Active = false;
    const resultUp = await companyUpdate.save().catch((err) => {
        throw new Error("Err " + err);
    });
    res.json(resultUp);
}