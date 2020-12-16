var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const {pool} = require('./config')

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var testAPIRouter = require('./routes/testAPI');
//var booksRouter = require('./routes/books') //Add the link to the books router

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/testAPI', testAPIRouter);
//app.use('/books', booksRouter) //Attach the books route to the app

//Need to migrate to own file
const getBooks = (request, response) => {
  pool.query('SELECT * FROM participants', (error, results) => {
  //pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//Need to migrate to own file
const addBook = (request, response) => {
  const {author, title} = request.body

  pool.query(
    'INSERT INTO books (author, title) VALUES ($1, $2)',
    [author, title],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Book added.'})
    },
  )
}

const deleteBook = (request, response) => {
  const id = parseInt(request.query.id) //request.params is deprecated
  
  pool.query('DELETE FROM books WHERE id = $1', [id], (error, results) => {
  //pool.query('DELETE FROM books WHERE id = 2', (error, results) => {  
    if (error) {
      throw error
    }
    response.status(200).send(`Book deleted with ID: ${id}`)
    //response.status(200).send(`Book deleted with ID: 2`)
  })
}

app
  .route('/booksSpecial')
  // GET endpoint
  .get(getBooks)
  // POST endpoint
  .post(addBook)
  // DELETE endpoint
  .delete(deleteBook)


//GET /participants
const getParticipants = (request, response) => {
  pool.query('SELECT * FROM participants', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//POST /participants
const addParticipant = (request, response) => {
  const {first_name, last_name, hours} = request.body
  pool.query(
    'INSERT INTO participants (first_name, last_name, hours) VALUES ($1, $2, $3)',
    [first_name, last_name, hours],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Participant added.'})
    },
  )
}

//DELETE /participants
const deleteParticipant = (request, response) => {
  const id = parseInt(request.query.id) //request.params is deprecated
  
  pool.query('DELETE FROM participants WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Participant deleted with ID: ${id}`)
  })
}

//Set Routes
app
  .route('/participants')
  //GET
  .get(getParticipants)
  //POST
  .post(addParticipant)
  //DELETE
  .delete(deleteParticipant)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
