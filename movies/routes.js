const MoviesController = require('./controllers/moviesController').init();
// check PermissionMiddleware

exports.routes = function (app) {
  app.get('/movies', [
    MoviesController.index
  ])

  app.get('/movies/:movieId', [
    MoviesController.show
  ])
};