const express= require("express");
const dotenv=require("dotenv")
const logger=require("morgan")


const app=express()
const sequelize=require('./config/db')

//loads all env variables
dotenv.config({path:"./config/config.env"});

//Body parsing
app.use(express.json())
app.use(express.urlencoded({extended:false}));


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
/*const db=require('./models/index');
db.sequelize.sync()*/

//Initialize morgan
app.use(logger("dev"));

//Initialize routes
const user=require("./routes/user");

//routes
//app.use("/api/",user);

const PORT=process.env.PORT || 5000

const server=app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))

 //Handling unhandled promise rejections
 process.on('SequelizeAccessDeniedError', (error, promise) => {
    console.log(`Error:${error.message}`);

    //Close the server and exit process
    server.close(() => process.exit(1));
})
