import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("hello bitch how are you")
})

app.listen(3000,(req,res)=>{
    console.log("server is running on 3000")
})