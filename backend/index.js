import express from'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 4000
app.get('/api',(req,res)=>{
    res.send("hello")
})

app.get('/api/home',(req,res)=>
{
  let arr=["anjan",23,89]
  res.send(arr)
})

app.listen(PORT , ()=>
{
    console.log(`SERVER RUNNING AT ${PORT}`)
}
)
