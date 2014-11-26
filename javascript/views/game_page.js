var app = app || {};
app.Views = app.Views || {};

app.Views.GamePage = Backbone.View.extend({
  tag: 'div',
  id: 'mainGamePage',

  initialize: function () {
    $('#main').html(this.$el);
    this.render();
    new app.Views.GameBoard();
    new app.Views.Chat();
  },

  render: function () {
    this.$el.html($('#gamePageTemplate').html());
  }

});
