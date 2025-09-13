require("dotenv").config()
const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors({origin:"*"}))


app.get("/demo",async(req,res)=>{
    res.status(200).json({message:"app is running"})
})

app.get("/test",async(req,res)=>{
    res.status(200).json({message:"test api is running",url:process.env.MONGODB_URL})
})
app.listen(process.env.PORT||5050,()=>{
    console.log("server is running")
})