const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// http logger
app.use(morgan('combined'))

// Teamplate engine
app.engine('hbs', handlebars.engine(
    {
        extname: '.hbs'
    }
));
// app.engine('handlebars', handlebars.engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/product', (req, res) => {
    res.render('product');
});
// app.get('/', (req, res) => {
//     return res.send('ss')
// });
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));