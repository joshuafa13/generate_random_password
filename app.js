// include module
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generatePassword = require('./generatePassword');
const app = express();
const port = 3000;

// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// set body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set router
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const options = req.body;
  const password = generatePassword(options);
  res.render('index', { password, options });
});

// listen
app.listen(port, () => {
  console.log(`Express listening to http://localhost:${port}`);
});
