const express=require('express')
const router=express.Router()
const club=require('../model/club')

router.get('/', (req, res, next)=>{
    res.send('Express router is working')
})
router.post('/add', (req, res, next)=>{
    const name=req.body.name;
    const players=req.body.players;
    const coach=req.body.coach;

    console.log(name, players, coach);

    const eclClub=new club({
        name,
        players,
        coach
    });
    eclClub.save((err)=>{
        if(err){
            console.log("something went wrong to use data to database");
        }
        else{
            console.log("hello world");
        }
    })
});

router.get('/edit:/id', (req, res, next)=>{
    console.log(req.parson.id);
    club.findclubUpdated([_id, req.parson.id], req.body, [newtrue], (err, docs)=>{
        if(err){
            console.log('Cannt reterive data and edit because of some database problem');
            next(err);
        }
        else{
            res.render('edit', [club,docs]);
        }

    })

    res.render('edit');
})

router.post('/edit:/id', (req, res, next)=>{
    console.log(req.parson.id);
    club.findclubDeleted([_id, req.parson.id], req.body, [newtrue], (err, docs)=>{
        if(err){
            console.log('Cannt reterive data and edit because of some database problem');
            next(err);
        }
        else{
            res.render('edit', [club,docs]);
        }

    })

    res.render('edit');
})

module.exports=router