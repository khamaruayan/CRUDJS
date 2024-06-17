const express=require('express')
const router=express.Router()
const Ayan=require('../models/ayan1')
const ayan1 = require('../models/ayan1')

router.get('/', async(req, res)=>{
    try{
        const ayan= await Ayan.find()
        res.json(ayan1)

    }catch(err){
        res.send('Error'+err)
    }

})



module.exports=router