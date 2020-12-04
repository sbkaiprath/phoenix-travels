const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');
//const crypto = require('crypto');

const User=sequelize.define('user',{
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    username:{
      type:DataTypes.STRING,
      allowNull:false
    },
    role:{
      type:DataTypes.ENUM,
      values:['admin','customer'],
      allowNull:false
    },
    email:{
      type: DataTypes.STRING,
      unique:true,
      allowNull:false,
      validate:{
        isEmail:true,

      }},
      password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastLogin: {
        type: DataTypes.STRING
    },

    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'inactive'
    }
    
},);

User.beforeCreate(async function(user,options){
  const salt =  await bcrypt.genSalt(10);
  return user.password = await bcrypt.hash(user.password, salt);

});

User.prototype.jwtWebToken=function(){
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
}

User.prototype.matchPassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}
// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User);
module.exports=User;
