const router = require('express').Router();
let Card = require('../models/card.model');

router.route('/').get((req, res) => {
    Card.find()
    .then(card => res.json(card))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const state = req.body.state;
  const companyName = req.body.companyName;
  const homeNumber = Number(req.body.homeNumber);
  const street = req.body.street;
  const phone = req.body.phone;
  const suite = Number(req.body.suite);
  const index = req.body.index;

  const newCard = new Card({
    name,
    surname,
    state,
    companyName,
    homeNumber,
    street,
    phone,
    suite,
    index
  });

  newCard.save()
  .then(() => res.json('Card added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Card.findById(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(() => res.json('Card deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Card.findById(req.params.id)
    .then(card => {
        card.name = req.body.name;
        card.surname = req.body.surname;
        card.state = req.body.state;
        card.companyName = req.body.companyName;
        card.homeNumber = Number(req.body.homeNumber);
        card.street = req.body.street;
        card.phone = req.body.phone;
        card.suite = Number(req.body.suite);
        card.index = req.body.index;

        card.save()
        .then(() => res.json('Card updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;