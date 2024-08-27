const { Sequelize } = require('sequelize');

// Connectar a DB
const database = new Sequelize(
  'jjdeportes', 
  'root', 
  '', 
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

(async () => {
    try {
      await database.authenticate();
      console.log('La conexión se ha establecido exitosamente.');
    } catch (error) {
      console.error('No se puede conectar a la base de datos:', error);
    }
})();
module.exports = database;