const express= require("express");
const dotenv=require("dotenv")
const logger=require("morgan")


const app=express()

dotenv.config({path:"./config/config.env"});

//Initialize morgan
app.use(logger("dev"));

//Initialize routes
const user=require("./routes/user");

//routes
//app.use("/api/",user);

const PORT=process.env.PORT || 5000

const server=app.listen(PORT,()=>console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))

 //Handling unhandled promise rejections
 process.on('unhandledRejection', (error, promise) => {
    console.log(`Error:${error.message}`);

    //Close the server and exit process
    server.close(() => process.exit(1));
})
