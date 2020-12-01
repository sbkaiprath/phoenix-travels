const {Sequelize}=require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, 'root', 'password', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  });

  const db={}
  db.sequelize=sequelize;
  db.Sequelize=Sequelize;

  db.user=require('./user')(sequelize,Sequelize);

  module.exports=db;