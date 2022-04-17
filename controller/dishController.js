const Dish = require('../model/dishModel.js');

module.exports.addDish = async (req, res) => {
  try {
    const dish = req.body;
    const newDish = await Dish.create(dish);

    res.status(201).json(newDish);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getDish = async (req, res) => {
  try {
    const dish = await Dish.find();

    res.status(201).json({
      dish,
    });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

