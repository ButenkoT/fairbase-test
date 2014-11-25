var app = app || {};

$(function () {
  if ($('#main').length === 0) {
    return;
  }

  app.router = new app.Router();
  Backbone.history.start({pushState: false});
});

