// Libraries
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routers/index'))

app.listen(3000, () => {
    console.log('Server running ...');
})
