const express= require("express");
const dotenv=require("dotenv")
const logger=require("morgan")
const path=require('path')
const sequelize=require('./config/db');
const app=express()

//loads all env variables
dotenv.config({path:"./config/config.env"});

//Body parsing
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//models declaration
const Tourpackage=require('./models/Tourpackage');
const Booking=require('./models/Booking');
const User=require('./models/User');
const Image=require('./models/Image')


//connecting to database
const connectDb=async()=>{
    try {
      await sequelize.authenticate();
      console.log('Connected to database successfully');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
connectDb()

//syncing models sequelize
const syncModel=async()=>{
    try{
        await Tourpackage.sync();
        await Booking.sync({force:true});
        await User.sync({force:true});
        await Image.sync()
        console.log('Successfully synced all models');
        }catch(err){
            console.error('Failed in syncing models',err)
        }
        
}
syncModel()

//Initialize morgan
app.use(logger("dev"));

//Initialize routes
const tourpackage=require("./routes/tourpackage");

//routes
app.use("/api/tourpackage",tourpackage);



//Declaring static file
app.use(express.static(path.join(__dirname, 'public')));

const PORT=process.env.PORT || 5000

const server=app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))

 //Handling unhandled promise rejections
 process.on('SequelizeAccessDeniedError', (error, promise) => {
    console.log(`Error:${error.message}`);

    //Close the server and exit process
    server.close(() => process.exit(1));
})
