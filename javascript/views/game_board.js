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

    var gamePage = new Firebase(app.firebase + '/game_page');

    gamePage.once('value', function (gamePageSnapshot) {
      var player1 = gamePageSnapshot.child('player1').val();
      var player2 = gamePageSnapshot.child('player2').val();
      var board = gamePageSnapshot.child('board').val();
      var $cell = $(event.target);
      var sum = 0;

      var choosePlayer = function(player){
        if (player.uid === app.uid) {
          $cell.data('value', "'" + player.value + "'");

          app.ref.child('game_page/board').push({
            value: player.value,
            attr: $cell.data('attr'),
            user: app.getName(),
            uid: app.uid
          });

          checkWinner(player);
        }
      };

      var checkWinner = function(player){
        sum = sum + parseInt($cell.data('attr'), 10);

        _.each(board, function(b){
          if(b.value === player.value){
            sum = sum + b.attr;

            if (sum === 15){
              alert( player + ' win!');
            }

          } else { sum }
        })
      };


      if (_.size(board) === 9) {
        return (alert('Tie!'));

      } else if (_.size(board) %2 === 0) {
        choosePlayer(player1);

      } else if (_.size(board) %2 != 0){
        choosePlayer(player2);

      }

  }, this);

  }
});

