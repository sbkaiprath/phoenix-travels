const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');

const Review = sequelize.define("review", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate:{
          isEmail:true
      }
    },
    message: {
      type: DataTypes.TEXT,
    },
  });

  module.exports=Review;