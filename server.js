const express = require('express');
const path = require('path');
const hbs = require('hbs');

// const ROOT_PATH = 

const app = express();

hbs.registerPartials(path.join(__dirname, 'templates/partials'))

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home.hbs')
});

app.get('/about', (req, res) => {
    res.render('about.hbs')
});


app.listen(process.env.PORT || 3000);