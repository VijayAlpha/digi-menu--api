const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema({
  DishName: {
    type: String,
    required: [true, 'Please give a name to your Dish.'],
  },
  Price: {
    type: Number,
  },
 // photo: String,
  photo: {
    type: String,
    default: "default.png"
  },
  time: {
    type: String
  },
});

const Dish = mongoose.model('Dish', DishSchema);

module.exports = Dish;