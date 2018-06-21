var express = require('express');
var router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile.js')[environment];
const knex = require('knex')(knexConfig);

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  knex('users')
  .then(function(users){
    res.render('users', {
      users
    });
  })
});

//get a single user
router.get('/:id', function(req, res, next){
  knex('users')
    .where('id', req.params.id)
    .first()
    .then(function(user){
      knex('todos')
      .where('user_id', req.params.id)
      .then(function(todos){
        res.render('user', {
          user,
          todos
        })
      })
    })
})

//post to user
router.post("/:id", function(req, res, next){
  const user_id = req.params.id
  knex('todos')
  .insert({
    task: req.body.task,
    user_id: user_id
  })
  .then(()=>{
    res.redirect(`/users/${user_id}`)
  })
})

module.exports = router;
