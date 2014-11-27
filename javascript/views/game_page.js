var app = app || {};
app.Views = app.Views || {};

app.Views.GamePage = Backbone.View.extend({
  tag: 'div',
  id: 'mainGamePage',

  initialize: function () {
    $('#main').html(this.$el);

    var gamePage = new Firebase('https://blazing-torch-6289.firebaseio.com/game_page');

    gamePage.once('value', function (gamePageSnapshot) {
      var player1 = gamePageSnapshot.child('player1').val();
      var player2 = gamePageSnapshot.child('player2').val();

      if (!player1) {
        player1 = {name: app.getName(), uid: app.uid, value: 'X'};
        gamePage.update({player1: player1});
        this.render();

      } else if(player1.uid === app.uid){
        this.render();

      } else if (!player2) {
        player2 = {name: app.getName(), uid: app.uid, value: 'O'};
        gamePage.update({player2: player2});
        this.render();

      } else if(player2.uid === app.uid){
        this.render();

      } else {
        alert('no room in game please wait');
      }
      console.log('player1, player2', player1, player2);
    }, this);

  },

  render: function () {
    this.$el.html($('#gamePageTemplate').html());
    new app.Views.GameBoard();
    new app.Views.Chat();
  }

});

//player 1 player 2 slots,(with uid) assign values x or o to them. when 1 slot is empty drop user in after he press play.
//if 1 user left give alert to user who is still in to leave game and start a new game.
//alert('Your opponent left. Press ok to start a new game'); and it send him on a new generated game_page
//if 2 users lft close game_page
//if no 1 slot free create new game_page(generate new board and chat)
