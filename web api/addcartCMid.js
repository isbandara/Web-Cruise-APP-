const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());

app.post('/add-to-cart', (req, res) => {
    const addToCartData = req.body;

    // response
    res.json({ success: true, message: 'Cruise added to cart successfully' });
});

app.listen(port, () => {

});
