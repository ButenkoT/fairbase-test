var app = app || {};
app.Collections = app.Collections || {};

app.Collections.GamePages = Backbone.Firebase.Collection.extend({
  url: 'https://blazing-torch-6289.firebaseio.com#game_page',
  model: app.Models.GamePage,
  autoSync: true
});


