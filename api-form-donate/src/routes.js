import express from 'express';
import { createCompany } from './controllers/CompaniesInfController';
import { deleteCompany, getAllCompanies, getOneCompanies } from './controllers/CompaniesController';
import { photo } from './storage/storage';
import { PhotoCompanies } from './controllers/StorageController';

const routes = express();

routes.get('/home/company-inf', getAllCompanies);
routes.get('/findOneCompany/:id', getOneCompanies);
routes.post('/registerCompany',  photo(), createCompany);
routes.put('/update/:id', deleteCompany);
routes.post('/uploadPhoto', PhotoCompanies);


export default routes;