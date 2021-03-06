import  sequelize  from '../database/db';
import Sequelize from 'sequelize';

const Company_inf = sequelize.define('companies_informations', {
    director: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false    
    },
    insc_est: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false 
    },
    insc_mun: {
        type: Sequelize.BIGINT,
        unique: true,
        allowNull: false
    },
    adress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complement: {
        type: Sequelize.STRING
    },
    causes: {
        type: Sequelize.ENUM,
        values: ['food', 'home', 'pets', 'car']
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false   
    },
    website: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    facebook: {
        type: Sequelize.STRING,        
    },
    instagram: {
        type: Sequelize.STRING,
    }
})

//Company_inf.sync({force:true});


export default Company_inf;