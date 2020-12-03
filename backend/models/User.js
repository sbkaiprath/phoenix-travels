const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken');
//const crypto = require('crypto');

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
      password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    last_login: {
        type: DataTypes.DATE
    },

    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
    }
});

User.addHook('beforeCreate',async(user,next)=>{
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

});

User.prototype.jwtWebToken=async function(){
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
}

User.prototype.matchPassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User);
module.exports=User;
