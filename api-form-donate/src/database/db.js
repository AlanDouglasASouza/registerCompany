import 'dotenv/config';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Database connection SUCCESSFUL!');
}).catch((err) => {
    console.error('Error trying to connect to the database: ', err);
})
export default sequelize;