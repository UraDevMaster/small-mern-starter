const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    state: { type: String, required: false },
    companyName: { type: String, required: true },
    street: { type: String, required: true },
    homeNumber: {type: Number, required: true},
    suite: {type: Number, required: true},
    index: {type: String, required: true},
    phone: {type: String, required: true}
  }, {
    timestamps: true,
  });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;