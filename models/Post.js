const db = require('./db')

const Post = db.sequelize.define('companies', {
    name: {
        type: db.Sequelize.STRING
    },
    abstract: {
        type: db.Sequelize.TEXT
    },
    photoCompany: {
        type: db.Sequelize.STRING,
        unique: db.Sequelize.BOOLEAN
    },
    id_information: {
        type: db.Sequelize.INTEGER,
        unique: db.Sequelize.BOOLEAN
    }
})

//Post.sync({force:true});

module.exports = Post;