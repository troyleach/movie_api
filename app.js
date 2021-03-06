const express = require("express");

const app = express();
const bodyParser = require('body-parser');

const AuthorizationRouter = require('./authorization/routes.js');
const MoviesRouter = require('./movies/routes')
const RatingsRouter = require('./ratings/routes')

// middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, api-key');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  return next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// I18n
// logging
// 404 and forward to error handler
// Joi / celebrate validation
// error handler

// Root route
app.get('/', (req, res, next) => {
  res.status(200).send({
    "message": "API for Movies and Ratings",
    "Endpoints": {
      "/auth": "Fake endpoint for Auth",
      "/movies": "GET all movies limit 50 per page",
      "/movies/:movieId": "GET a moving with the associated ratings for the movie",
      "/ratings": "GET all ratings Limit 50 per page"
    }
  })
})

AuthorizationRouter.routes(app);
MoviesRouter.routes(app);
RatingsRouter.routes(app);

app.get('*', (req, res) => {
  res.status(404).send({ "message": "This routes does not exist" })
});

module.exports = { app };