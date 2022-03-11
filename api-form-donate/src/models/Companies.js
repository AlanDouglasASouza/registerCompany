import  sequelize  from '../database/db';
import Sequelize from 'sequelize';
import Company_inf from './Companies_inf';

const Company = sequelize.define('companies', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    abstract: {
        type: Sequelize.TEXT
    },
    photoCompany: {
        type: Sequelize.STRING
    },
    is_Active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true      
    }
});

Company.belongsTo(Company_inf);

//Company.sync({force:true});

export default Company;