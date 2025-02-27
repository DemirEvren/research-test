const Sequelize = require('sequelize');

const isDocker = process.env.TEST_MODE === "true" || process.env.DOCKER_ENV === "true";


const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DBURL || (isDocker ? 'test-mysql' : 'localhost'), // ✅ Uses environment variable
    username: process.env.DBUSER || 'root',
    password: process.env.DBPASSWORD || '',
    database: process.env.DBDATABASE || 'todo',
    port: process.env.DBPORT || 3308,
    logging: console.log
});

sequelize.authenticate((err) => {
    if (err) {
        console.log('Unable to connect to the database:', err);
    }
});

module.exports = sequelize;
