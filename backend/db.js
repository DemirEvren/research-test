const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DBURL || '10.0.3.174', 
    username: process.env.DBUSER || 'root',
    password: process.env.DBPASSWORD || 'password',
    database: process.env.DBDATABASE || 'todo',
    port: process.env.DBPORT || 3306,
    logging: console.log
});

sequelize.authenticate((err) => {
    if (err) {
        console.log('Unable to connect to the database:', err);
    }
});

module.exports = sequelize;
