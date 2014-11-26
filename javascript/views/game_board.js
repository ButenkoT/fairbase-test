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
  },

  render: function () {
    this.$el.html($('#gameBoardTemplate').html());
  },

  clickCell: function(event) {

    //if no users on this game-page
    // for user app.ref.getAuth()[provider].uid get X values
    //if there is 1 user get to 2nd user O value

    var $cell = $(event.target);
    $cell.data('value', 'X');
    app.ref.child('game_page/board').push({value: 'X', attr: $cell.data('attr'), user: app.getName()});

    //check if sum of all values X or O(which just made a move) is equal to 15
    //depends if X or O that user wins
    //or if all cells have values end of game (tie) - clean board

    //
  }
});

