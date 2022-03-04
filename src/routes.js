import express from 'express';
import { createCompany } from './controllers/CompaniesInfController';
import { deleteCompany, getAllCompanies, getOneCompanies } from './controllers/CompaniesController';
import { photo, PhotoCompanies } from './storage/storage';

const routes = express();

routes.get('/home/company-inf', getAllCompanies)
routes.get('/findOneCompany/:id', getOneCompanies)
routes.post('/registerCompany', createCompany)
routes.put('/update/:id', deleteCompany)
routes.post('/uploadPhoto', photo(), PhotoCompanies)


export default routes;