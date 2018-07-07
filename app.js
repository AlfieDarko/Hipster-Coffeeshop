import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
// const router from ('./routes');
const router = express.Router()

const app = express();
app.disable('x-powered-by');

// View engine setup
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public'))); 
// allows HTML to work by default.



app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, './dist')));

// Routes
app.use('/dist', router);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// // Error handler
// app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   res
//     .status(err.status || 500)
//     .render('error', {
//       message: err.message
//     });
// });

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console


module.exports = app;
