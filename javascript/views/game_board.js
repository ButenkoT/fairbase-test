var app = app || {};
app.Views = app.Views || {};

app.Views.Chat = Backbone.View.extend({
  el: '#game_board',
  events: {
    'click .cell': 'clickCell'
  },

  initialize: function () {
    this.render();
    app.ref.child('game_page/board').on('child_added', this.renderCell.bind(this));
  },

  renderCell: function(xo) {
    this.$el.find('.cell[data-attr="'+xo.val().attr+'"]').text(xo.val().value);

    //$('<p></p>').text(xo.val().value)
    //  .prependTo(this.$el.find('.cell[data-attr="'+xo.val().attr+'"]'));
  },

  render: function () {
    this.$el.html($('#gameBoardTemplate').html());
  },

  clickCell: function(event) {
    var provider = app.ref.getAuth().provider,
      name;
    if (provider !== 'anonymous'){
      name = app.ref.getAuth()[provider].displayName;
    } else {
      name = 'Anonymous';
    }

    var $cell = $(event.target);
    $cell.data('value', 'X');
    app.ref.child('game_page/board').push({value: 'X', attr: $cell.data('attr'), user: name});
  }
});

