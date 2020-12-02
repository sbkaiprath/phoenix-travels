const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');

const User=sequelize.define('user',{
    firstName: {
        type: DataTypes.STRING
      },
      secondName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      }
});
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User);
module.exports=User;
