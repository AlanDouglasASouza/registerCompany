import 'dotenv/config';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});



sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso. ');
}).catch(function(erro){
    console.error('Houve um erro ao tentar se conectar com o banco de dados: ', erro);
})
export default sequelize;