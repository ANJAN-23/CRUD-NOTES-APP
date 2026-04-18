const app=require('./src/app.js')
const dotenv=require('dotenv')
dotenv.config()
const PORT= process.env.PORT || 4000

app.listen(PORT, ()=>{
   console.log(`app listening on http://localhost:${PORT}`)
})
