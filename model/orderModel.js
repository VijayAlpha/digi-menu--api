const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, 'Please give a name to your Dish.'],
  },
  orders: [
    {
      dishName: String,
      Servings: Number
    }
  ],
  ready: {
    type: Boolean
  } 
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;