const {DataTypes}=require('sequelize')
const sequelize=require('../config/db');
const User=require('./User')
const Tourpackage=require('./Tourpackage')

const Bookings=sequelize.define('booking',{
    
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    zipCode:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    checkIndate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    checkOutdate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    numberRooms:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    checkIntime: {
        type: DataTypes.ENUM,
        values:['Morning','Evening','Afternoon'],
        allowNull:false
      },
      checkOutime: {
        type: DataTypes.ENUM,
        values:['Morning','Evening','Afternoon'],
        allowNull:false
      },
      roomType: {
        type: DataTypes.ENUM,
        values:['Deluxe','Standard','Suite'],
        allowNull:false
      },
      userId:{
          type:DataTypes.INTEGER,
          allowNull:false,
          references:{
              model:User,
              key:'id'
          }
      },
      imageId:{
        type:DataTypes.INTEGER,
        references:{
            model:Tourpackage,
            key:'id'
        }}
});

module.exports=Bookings;
