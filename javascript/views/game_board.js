var app = app || {};
app.Views = app.Views || {};

app.Views.GameBoard = Backbone.View.extend({
  el: '#game_board',
  events: {
    'click .cell': 'clickCell'
  },

  initialize: function () {
    this.render();
    app.ref.child('game_page/board')
      .on('child_added', this.renderCell.bind(this));
  },

  renderCell: function(xo) {
    this.$el.find('.cell[data-attr="'+xo.val().attr+'"]').text(xo.val().value);
  },

  render: function () {
    this.$el.html($('#gameBoardTemplate').html());
  },

  clickCell: function(event) {

    var $cell = $(event.target);
    $cell.data('value', '"' + app.player1[1] + '"');
    app.ref.child('game_page/board').push({
      value: '"' + app.player1[1] + '"',
      attr: $cell.data('attr'),
      user: app.getName(),
      uid: app.uid
    });


    //check if sum of all values X or O(which just made a move) is equal to 15

    //if (sum == 15){
    //   player wins
    //   new app.Views.GameBoard();  --- render new board
    // } else if (all cells values are set){
    //  alert(tie)
    // new app.Views.GameBoard();  --- render new board
    //}
  }
});

