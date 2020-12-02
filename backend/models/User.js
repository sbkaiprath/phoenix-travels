const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const Booking=require('./Booking');
const Tourpackage=require('./Tourpackage')

const User=sequelize.define('user',{
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    role:{
      type:DataTypes.ENUM,
      values:['admin','customer']
    },
    email:{
      type: DataTypes.STRING,
      validate:{
        isEmail:true
      },
      password:{
        type:DataTypes.STRING,
      },
      age:{
        type:DataTypes.INTEGER
      }
    }
});
User.hasMany(Booking,{foreignKey:'user',allowNull:false});
User.hasMany(Tourpackage,{foreignKey:'admin'})
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User);
module.exports=User;
