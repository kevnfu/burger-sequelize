const router = require('express').Router();
const db = require('../models');

router.get('/', function(req, res) {
  db.Burger.findAll().then(burgers => {
    res.render('index', {burgers})
  });
});

router.get('/api/burgers', function(req, res) {
  db.Burger.findAll().then(burgers => {
    res.json(burgers);
  });
});

// expects {name: name}
router.post('/api/burgers', function(req, res) {
  db.Burger.create({
      name: req.body.name,
      devoured: false
    })
    .then(function() {
      res.status(200).end();
    })
    .catch(function(err) {
      console.error(err.stack);
      res.status(500).send('Failed to add burger.');
    });
});

// expects {id: id}
router.put('/api/burgers', function(req, res) {
  db.Burger
    .update(
      {devoured: true},
      {where: {id: req.body.id}}
    )
    .then(function() {
      res.status(200).end();
    })
    .catch(function(err) {
      console.error(err.stack);
      res.status(500).send('Failed to update burger.');
    });
});

module.exports = router;