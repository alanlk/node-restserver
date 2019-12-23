require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuarios'));

//mongoose.connect('mongodb://localhost:27017/cafe', 
mongoose.connect(process.env.NODE_ENV, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, resp) => {

    if (err) throw err;

    console.log('base de datos arriba');
});

app.listen(process.env.PORT, () => {

    console.log("Escuchando en el puerto : ", 3000);

})