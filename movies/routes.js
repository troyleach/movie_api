const MoviesController = require('./controllers/moviesController');
// bring in PermissionMiddleware

exports.routes = function (app) {
  app.get('/movies', [
    MoviesController.list
  ])
};