const Sequelize = require('sequelize');

const isDocker = process.env.TEST_MODE === "true" || process.env.DOCKER_ENV === "true";


const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DBURL || 'test-mysql',  // ✅ Now using DBURL
    username: process.env.DBUSER || 'root',
    password: process.env.DBPASSWORD || '',
    database: process.env.DBDATABASE || 'todo',
    port: process.env.DBPORT || 3306,
    logging: console.log
});

sequelize.authenticate()
    .then(() => console.log('✅ Database connected!'))
    .catch(err => console.error('❌ Unable to connect to the database:', err));


module.exports = sequelize;
