const RatingsController = require('./controllers/ratingsController').init();
// check PermissionMiddleware

exports.routes = function (app) {
  app.get('/ratings', [
    RatingsController.index
  ]);
};