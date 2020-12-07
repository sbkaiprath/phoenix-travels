const express= require("express");
const dotenv=require("dotenv")
const logger=require("morgan")
//const path=require('path')
const sequelize=require('./config/db');
const app=express()
const cookieparser=require('cookie-parser');
const cors=require('cors')
const error=require('./middlewares/error');
const path=require('path')

//loads all env variables
dotenv.config({path:"./config/config.env"});

//Cors
app.use(cors());

//Body parsing
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//models declaration
const Tourpackage=require('./models/Tourpackage');
const Booking=require('./models/Booking');
const User=require('./models/User');
const Image=require('./models/Image');
const Review=require('./models/Review')


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
        await User.sync();
        await Image.sync()
        await Tourpackage.sync();
        await Booking.sync();
        await Review.sync()
       
        console.log('Successfully synced all models');
        }catch(err){
            console.error('Failed in syncing models',err)
        }
        
}
syncModel()

//associations
User.hasMany(Booking);
Image.hasOne(Tourpackage);
Tourpackage.hasOne(Booking);

//Initialize morgan
app.use(logger("dev"));


//Initialize routes
const tourpackage=require("./routes/tourpackage");
const auth=require('./routes/auth')
const booking=require('./routes/booking');

//routes
app.use("/api/tourpackage",tourpackage);
app.use("/api/user",auth);
app.use("/api/booking",booking)

//cookie parser
app.use(cookieparser())

//Initilizing error handler
app.use(error);

//Declaring static file
app.use(express.static(path.join(__dirname, 'public/uploads/')));

const PORT=process.env.PORT || 5000

const server=app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))

 //Handling unhandled promise rejections
 process.on('SequelizeAccessDeniedError', (error, promise) => {
    console.log(`Error:${error.message}`);

    //Close the server and exit process
    server.close(() => process.exit(1));
})
