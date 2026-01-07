import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'

dotenv.config({
    path:"./.env"
})

const app=express()
app.use(bodyParser.json())
const PORT=process.env.PORT

// importing the route from routes folder

import authRoute from './routes/user.route.js'

app.use('/api/v1/auth', authRoute)






connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log('connect successfully',PORT);
        
    })
})
.catch((error)=>{
    console.log(error)
})


