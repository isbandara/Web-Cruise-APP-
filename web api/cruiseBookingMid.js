const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());

app.post('/cruise-booking', (req, res) => {

    const cruiseBookingData = req.body;

    res.json({ success: true, message: 'Cruise booked successfully' });
});

app.listen(port, () => {
    
});
