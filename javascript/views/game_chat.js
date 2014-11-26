var app = app || {};
app.Views = app.Views || {};

app.Views.GameBoard = Backbone.View.extend({
  el: '#game_chat',
  events: {
    'submit form': 'chatMessage'
  },

  initialize: function () {
    this.render();
    app.ref.child('game_page/chat').on('child_added', this.renderMessage.bind(this));
  },

  renderMessage: function(message) {
    $('<p></p>').text(message.val().text).prepend(message.val().user + ': ')
      .prependTo(this.$el.find('.messages-container'));
  },

  render: function () {
    this.$el.html($('#gameChatTemplate').html());
  },

  chatMessage: function(event){
    event.preventDefault();

    //TODO better save uid then name (same about messages)

    var $input = $(event.target).find('input');
    app.ref.child('game_page/chat').push({text: $input.val(), user: app.getName()});
    $input.val('');
  }
});

