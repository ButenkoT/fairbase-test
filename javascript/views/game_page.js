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
    this.setUser();
  },

  render: function () {
    this.$el.html($('#gamePageTemplate').html());
  },

  setUser: function(){

    app.player1 = [];
    app.player2 = [];

    if (app.player1.length == 0) {
      app.player1.push(app.uid, 'x');
    } else if (app.player2.length == 0){
      app.player2.push(app.uid, 'o');
    } else {
      this.render();
    }

  }

});

//player 1 player 2 slots,(with uid) assign values x or o to them. when 1 slot is empty drop user in after he press play.
//if 1 user left the game chat and board is cleaned, 1 slot is getting empty.
//if 2 users lft clean page
//if no 1 slot free create new game_page(generate new board and chat)
