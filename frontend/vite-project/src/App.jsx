import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState("");

 useEffect(()=>{
  const temp=async()=>
  {
    try{
      const res=await axios.get("http://localhost:8000/api/home")
      setData(res.data)
    }
    catch(err)
    {
      console.log(err)
    }
  }
  temp()
 },[])


  return (
    <>
     <h1>so the backend content is <br></br>{data}</h1>
    </>
  )
}

export default App
