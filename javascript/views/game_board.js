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

    var gamePage = new Firebase('https://blazing-torch-6289.firebaseio.com/game_page');

    gamePage.once('value', function (gamePageSnapshot) {
      var player1 = gamePageSnapshot.child('player1').val();
      var player2 = gamePageSnapshot.child('player2').val();
      var board = gamePageSnapshot.child('board').val();
      var $cell = $(event.target);

//       if () {};

      if(player1.uid === app.uid){
        $cell.data('value', "'" + player1.value + "'");
        app.ref.child('game_page/board').push({
          value: player1.value,
          attr: $cell.data('attr'),
          user: app.getName(),
          uid: app.uid
        });

      } else if (player2.uid === app.uid) {
        $cell.data('value', "'" + player2.value + "'");
        app.ref.child('game_page/board').push({
          value: player2.value,
          attr: $cell.data('attr'),
          user: app.getName(),
          uid: app.uid
        });
      }

    }, this);


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

