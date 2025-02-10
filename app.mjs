import express from 'express';
import exphbs from 'express-handlebars';

// Database connection
import connection from './db/connection.mjs';

const app = express();

// Express use handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs.engine());

// Set directory public
app.use(express.static('public'));

// Set body/url data
app.use(
  express.urlencoded(
    { extended: true }
  )
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Olá');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
