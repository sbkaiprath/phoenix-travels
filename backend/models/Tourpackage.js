const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const User=require('./User');
const Image=require('./Image')

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
      imageId:{
        type:DataTypes.INTEGER,
        references:{
            model:Image,
            key:'id'
        }},
      adminId:{
        type:DataTypes.INTEGER,
        references:{
            model:User,
            key:'id'
        }}
});
// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User);
module.exports=Tourpackage;
