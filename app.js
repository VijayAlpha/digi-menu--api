const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dishController = require('./controller/dishController');
const orderController = require('./controller/orderController');


const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to digitMenu api');
});

app.post('/addDish', dishController.addDish);
app.get('/getDish' , dishController.getDish);

app.post('/order' , orderController.placeOrder);
app.get('/order' , orderController.getOrder);

const PORT = 3000 || process.env.PORT;
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () =>
      (server = app.listen(PORT, () =>
        console.log(`server running on ${PORT}`)
      ))
  )
  .catch(error => console.log('ERROR:' + error.message));
