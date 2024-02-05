
const express = require('express');
const router = express.Router();
const db = require('../database');
const bodyParser = require('body-parser');

// Add this middleware to parse incoming request bodies
router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/registration', function (req, res, next) {
  res.render('registration');
});

router.post('/registration', function (req, res, next) {
  const name = req.body.name;
  const password = req.body.password;
  const email_address = req.body.email_address;
  const address = req.body.address;
  const city = req.body.city;
  const bank_balance = req.body.bank_balance;
  const bank_name = req.body.bank_name;

  const userData = {
    name: name,
    password: password,
    email_address: email_address,
    address: address,
    city: city,
    bank_balance: bank_balance,
    bank_name: bank_name,
  };

  const sql = 'INSERT INTO bank SET `name` = ?, `password` = ?, `email_address` = ?, `address` = ?, `city` = ?, `bank_balance` = ?, `bank_name` = ?';

  db.query(sql, [userData.name, userData.password, userData.email_address, userData.address, userData.city, userData.bank_balance, userData.bank_name], function (error, data) {
    if (error) {
      console.error("Error inserting user data:", error);
      return res.status(500).send("Internal Server Error");
    }

    console.log("User data inserted successfully");
    res.redirect('/login');
  });
});


module.exports = router;

