const express=require ('express')
const homeRoute=require ('./routs/home')
const app=express()
const port=5000

app.set('view engine', 'ejs')
app.use('/home',homeRoute)

app.listen(port, ()=>{
    console.log('Example app listening on port ${port}!')
})