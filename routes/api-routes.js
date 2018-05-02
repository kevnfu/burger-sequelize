const router = require('express').Router();
const db = require('../models');

router.get('/', function(req, res) {
  db.Burger.findAll({include: [db.Customer]}).then(burgers => {
    res.render('index', {burgers});
  });
});

router.get('/api/burgers', function(req, res) {
  db.Burger.findAll({include: [db.Customer]}).then(burgers => {
    res.json(burgers);
  });
});

// {"name": name}
router.post('/api/burgers', function(req, res) {
  db.Burger
    .create({
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

// {"id": id, "CustomerId": id}
router.put('/api/burgers', function(req, res) {
  db.Burger
    .update(
      {
        devoured: true, 
        CustomerId: req.body.CustomerId
      },
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

router.get('/api/customers', function(req, res) {
  db.Customer.findAll()
    .then(customers => res.json(customers));
});

// ?name=name
router.get('/api/search/customers', function(req, res) {
  db.Customer
    .findOne({
      where: {name: req.query.name}
    })
    .then(customer => res.json(customer))
    .catch(err => {
      console.error(err.stack);
      res.status(500).send('Failed to get customer.');
    });
});

// {"name" : name} returns customer
router.post('/api/customers', function(req, res) {
  db.Customer
    .create({
      name: req.body.name
    })
    .then(function(customer) {
      res.json(customer);
    })
    .catch(err => {
      console.error(err.stack);
      res.status(500).send('Failed to add customer.');
    });
});

module.exports = router;