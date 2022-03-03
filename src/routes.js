import express from 'express';
import { createCompany } from './controllers/CompaniesInfController';
import { deleteCompany, getAllCompanies, getOneComp } from './controllers/CompanyController';

const routes = express();

routes.get('/home/company-inf', getAllCompanies)
routes.get('/findOneCompany/:id', getOneComp)
routes.post('/registerCompany', createCompany)
routes.put('/update/:id', deleteCompany)

export default routes;