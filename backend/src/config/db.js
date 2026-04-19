const mongoose=require('mongoose')

function dbconnection(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        console.log("Database connected successfully...")
    })
    .catch(err =>{
        console.error("\x1b[31mDatabase connection error: \x1b[0m",err.message);
        process.exit(1)
    })
}
module.exports=dbconnection