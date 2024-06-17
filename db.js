const mysql=require('mysql2/promise')

const mysqlPool=mysql.createPool({
    host:'localhost',
    user:'galacticesplorer',
    password:'12345678',
    database:'employee_db'
})

mysqlPool.query("SELECT 1")
.then(()=>{
    console.log('db connection succeeded.')
    app.listen(3000, ()=>{
        console.log('server started at 3000')
    })
})
.catch(err=> console.log('db connection failed.\n'+ err))

module.exports=mysqlPool