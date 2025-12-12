import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'


// app config
const app = express()
const port= 4000

// middleware
app.use(express.json()); //request from frontend to backend,it will be parsed using this json
app.use(cors()) //allows access of backend from any frontend

//db connection
connectDB();

//api endpoints
app.use('/api/food',foodRouter)

app.get('/',(req,res)=>{ //request and response
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
    })//run the server on a particular port

// mongodb+srv://food_order:FoodOrder123@cluster0.dg3ppx3.mongodb.net/?