const  express = require('express');
const router = express.Router();
const db=require('../database');
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/login', function(req, res){
    const name = req.body.name;
    const password = req.body.password;
    const sql='SELECT * FROM bank WHERE name =? AND password =?';
    db.query(sql, [name, password], function (error, data, fields) {
        if(error) throw error
        if(data.length>0){
            req.session.loggedinUser= true;
            req.session.name= name;
            res.redirect('/registration');
        }else{
            res.render('registration',{alertMsg:"Your username or password is wrong"});
        }
    })
})
module.exports = router;