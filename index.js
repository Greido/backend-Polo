const express = require('express');

const dotenv = require('dotenv')

//Import routes

const starRoutes = require('./src/routes/starRoutes')


dotenv.config();


const app = express();

const port = process.env.PORT;


//Middleware for use json data
app.use(express.json())

//Routes related with the stars

app.use('/api',starRoutes)


app.listen(port,()=>{
    console.log(`[server]: Server is running at http://localhost:${port}/ `)
})