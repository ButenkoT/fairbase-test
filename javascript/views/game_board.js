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
    this.$el.find('.cell[data-attr="'+xo.val().attr+'"]')
      .text(xo.val().value)
      .data('value', xo.val().value)
    ;

    var gamePage = new Firebase(app.firebase + '/game_page');

    gamePage.once('value', function (gamePageSnapshot) {
      var player1 = gamePageSnapshot.child('player1').val();
      var player2 = gamePageSnapshot.child('player2').val();
      var board = gamePageSnapshot.child('board').val();
      var sum = 0;

      var checkWinner = function(player){
        _.each(board, function(cell){
          if(cell.value === player.value){
            sum = sum + cell.attr;

            if (sum === 15){
              alert( player.name + ' win!');
              //TODO render new board
            }
          } else { sum }
        })
      };

      if (_.size(board) %2 === 0) {
        checkWinner(player2);
      } else if (_.size(board) %2 != 0){
        checkWinner(player1);
      } else if (_.size(board) === 9) {
        return (alert('Tie!'));
        //TODO render new board
      }
    }, this);
  },

  render: function () {
    this.$el.html($('#gameBoardTemplate').html());
  },

  clickCell: function(event) {
    var gamePage = new Firebase(app.firebase + '/game_page');

    gamePage.once('value', function (gamePageSnapshot) {
      var player1 = gamePageSnapshot.child('player1').val();
      var player2 = gamePageSnapshot.child('player2').val();
      var board = gamePageSnapshot.child('board').val();
      var $cell = $(event.target);

      var playersMove = function(player){
        if (player.uid === app.uid && !$cell.data('value')){

          app.ref.child('game_page/board').push({
            value: player.value,
            attr: $cell.data('attr'),
            user: app.getName(),
            uid: app.uid
          });
        }
      };

      if (_.size(board) === 9) {
        return (alert('Tie!'));
      } else if (_.size(board) %2 === 0) {
        playersMove(player1);
      } else if (_.size(board) %2 != 0){
        playersMove(player2);
      }
    }, this);

  }
});

