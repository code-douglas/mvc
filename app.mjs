import express from 'express';
import exphbs from 'express-handlebars';
import { join } from 'path';

import connection from './db/connection.mjs';
import Task from './src/models/Task.mjs';
import taskRoutes from './src/routes/taskRoutes.mjs';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'handlebars');
app.set('views', join(process.cwd(), 'src', 'views'));
app.engine('handlebars', exphbs.engine());
app.use(express.static('public'));

app.use('/tasks', taskRoutes);

connection
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('http://localhost:3000');
    });
  })
  .catch(error => console.error(error));
