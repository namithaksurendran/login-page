const loginRouter = require('./routes/login');
const registrationRouter = require('./routes/registration');

const express = require('express');
const session = require('express-session')
let app = express();
const port = 2000

app.set('view engine', 'ejs')

app.use('/', loginRouter);
app.use('/', registrationRouter);

app.use(session({ 
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.listen(port, () => {
  console.log('database runing at port 2000')
})