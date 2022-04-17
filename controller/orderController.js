const Order = require('../model/orderModel.js');

module.exports.placeOrder = async (req, res) => {
  try {
    const data = req.body;
    const newOrder = await Order.create(data);

    res.status(201).json(newOrder);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getOrder = async (req, res) => {
  try {
    const order = await Order.find();

    res.status(201).json({
      order,
    });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

