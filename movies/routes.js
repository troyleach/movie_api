const MoviesController = require('./controllers/moviesController');
// check PermissionMiddleware

exports.routes = function (app) {
  app.get('/movies', [
    MoviesController.index
  ])
};