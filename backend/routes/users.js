var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');
var passport = require('passport');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', function(req,res,next) {
  db_AddUser(req,res);
});

router.post('/announcement', isValidUser, function(req,res,next) {
  db_AddPost(req,res);
});

async function db_AddUser(req,res) {
  var user = new User({
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: User.hashPassword(req.body.password),
    created: Date.now()
  });

  try {
    doc = await user.save();
    return res.status(201).json(doc);
  } 
  catch(err) {
    return res.status(501).json(err);
  }
}

async function db_AddPost(req,res) {
  var post = new Post({
    username: req.body.username,
    text: req.body.text,
    created: Date.now()
  });

  try {
    doc = await post.save();
    return res.status(201).json(doc);
  }
  catch(err) {
    return res.status(501).json(err);
  }
}

router.post('/login', function(req,res,next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json( {message: 'Login sucess!'} );
    });
  })(req, res, next);
});

router.get('/user', isValidUser, function(req,res,next) {
  return res.status(200).json(req.user);
});

router.get('/logout', isValidUser, function(req,res,next) {
  req.logOut();
  return res.status(200).json( {message: 'Logout success!'} );
})

function isValidUser(req,res,next) {
  if (req.isAuthenticated()) next();
  else return res.status(401).json( {message: 'Unauthorized Request!'} );
}

module.exports = router;
