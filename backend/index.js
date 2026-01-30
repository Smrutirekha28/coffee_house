const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./dbConfig/db");
const router = require("./routes/AllRoutes");
dotenv.config();
const app = express();
app.use(express.json())

app.use("/api",router)
app.get("/",(req,res)=>{
    res.send("Api is running")
})
connectDB()
app.listen(process.env.port,()=>{
    console.log(`app is running on port  ${process.env.port}`);
    
})