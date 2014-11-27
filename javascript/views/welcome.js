var app = app || {};
app.Views = app.Views || {};

app.Views.WelcomePage = Backbone.View.extend({
    tag: 'div',
    id: 'welcomeForm',

  initialize: function () {

    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var welcome = $('#welcomeTemplate').html();
    this.$el.html(welcome);
  }

});
