const express=require('express')
const mongoose=require('mongoose')
const url ='mongodb://localhost/AyanDBex'

const app=express()

mongoose.connect(url, {useNewUrlParser:true})
const con=mongoose.connection

con.on('open', ()=>{
    console.log('connected....')
})

const ayanRouter=require('./routers/ayan')
app.use('/ayan', ayanRouter)

app.listen(9000, ()=>{
    console.log('Server started')
})