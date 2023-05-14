
const express=require("express")
const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()
app.use(cors({
    origin:"*"
}))
const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URL,{
   useNewUrlParser:true,
   useUnifiedTopology:true
})

const post_route=require('./routes/postRoutes')
const user_route=require('./routes/userRoute')
app.use("/api",post_route)
app.use("/api",user_route)

const PORT=8080 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})