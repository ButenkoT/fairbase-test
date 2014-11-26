var app = app || {};

$(function () {
  if ($('#main').length === 0) {
    return;
  }

  app.game_page = new app.Collections.GamePages();

  //app.game_page.on('sync', function(collection) {
  //  console.log('collection is loaded', collection);
  //});

  app.router = new app.Router();
  Backbone.history.start({pushState: false});
});

