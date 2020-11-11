// Basic file to demonstrate the need for Authorization
const AuthorizationController = require('./controllers/authorizationController')

exports.routes = function (app) {
  app.get('/auth', [
    AuthorizationController.login
  ])
};