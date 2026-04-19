const app=require('./src/app.js')
const dotenv=require('dotenv')
const dbconnection=require('./src/config/db.js')
dotenv.config()
dbconnection()
const PORT= process.env.PORT || 4000
app.listen(PORT, ()=>{
   console.log(`app listening on http://localhost:${PORT}`)
})
