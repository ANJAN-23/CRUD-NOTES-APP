const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"please provide email"],
        unique:true,
        lowercase:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email"]
    }
},{timestamps:true})