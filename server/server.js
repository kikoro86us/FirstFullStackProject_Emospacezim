require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require ('cors'),
      passport = require('passport'),
      app = express(),
      Auth0Strategy = require('passport-auth0'),
      massive = require('massive'),
      session = require('express-session');


app.use(express.static(__dirname+'/../build'));
app.use(bodyParser.json());
app.use(cors());


//massive

massive({
  host: 'localhost',
  port: 5432,
  database: 'emospacezim',
}).then(function(db){
  app.set('db',db)
});

//-----------------------





app.use(session({
    secret: 'password',
    resave:false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());


passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accessToken, refreshToken, extraParams, profile, done) {

    console.log(profile);
    
    done(null, profile);

}));

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth'
  }))


passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(obj, done){
    done(null, obj);
});

app.get('/auth/me', (req, res, next) => {
    if (!req.user) {
      return res.status(403).send('User not found');
    } else {
      return res.status(200).send(req.user);
    }
  })

  app.get('/auth/logout', (req, res) => {
    req.logOut();
    return res.redirect(302, 'http://localhost:3000/#/');
  })

//---------endpoints--------------//

//get all users
app.get('/api/customers',function(req,res){
  app.get('db').getAllCustomers().then((customer)=>{
    res.status(200).send(customer)
  })
});

//get all email
app.get('/api/customeremails',function(req,res){
  app.get('db').getAllEmail().then((customer)=>{
    res.status(200).send(customer)
  })
})

//check for admin
app.get('/auth/admin', (req, res, next) => {
  console.log('are you an admin?')
  if (!req.user) {
    console.log('nope')
    res.redirect(302, 'http://localhost:3000/');
  } else {console.log('yes')
    res.status(200).send(req.user);
  }
})





const port = 3050;
app.listen(port, () =>{
    console.log(`Listening on port😳 😳 😳 😳 : ${port}`);
})