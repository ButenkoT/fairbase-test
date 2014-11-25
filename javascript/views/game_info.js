var app = app || {};
app.Views = app.Views || {};

app.Views.InfoPage = Backbone.View.extend({
  tag: 'div',
  id: 'infoForm',

  initialize: function () {

    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var info = $('#introPage').html();
    this.$el.html(info);
  }

});

