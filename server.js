const dotenv=require('dotenv')
const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const logger=require('morgan')
dotenv.config()
const app=express()

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected',()=>{
    console.log(`connected to mongo ${mongoose.connection.name}`)
})

app.use(cors())
app.use(express.json())
app.use(logger('dev'))


app.listen(3000,()=>{
    console.log('app is working on port 3000')
})