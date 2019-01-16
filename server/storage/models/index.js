const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const fs = require('fs');
const db = {};

const sequelize = new Sequelize('demodb', 'demouser', 'demopassword', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  timezone: '+05:30',
  pool: {
    max: 1000,
    min: 0,
    acquire: 30000,
    handleDisconnects: true,
    idle: 10000
  }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db)
  .forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
