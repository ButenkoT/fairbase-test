
var app = app || {};
app.ref = new Firebase('https://blazing-torch-6289.firebaseio.com');

$(function () {
  if ($('#main').length === 0) {
    return;
  }

  app.router = new app.Router();
  Backbone.history.start({pushState: false});
});

