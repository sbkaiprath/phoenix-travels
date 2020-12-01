const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');

const Tourpackage=sequelize.define('tourpackage',{
    packageName: {
        type: DataTypes.STRING,
      },
      packageDescription: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.FLOAT
      },
      packageType: {
        type: DataTypes.ENUM,
        values:['Honeymoon','Beach','Mountain','Climbing','Resort','Camping']
      },
      imageURL:{
        type:DataTypes.STRING
      }
});
// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User);
module.exports=Tourpackage;
