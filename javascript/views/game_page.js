var app = app || {};
app.Views = app.Views || {};

app.Views.GamePage = Backbone.View.extend({
  tag: 'div',
  id: 'mainGamePage',
  events: {
    'keypress #messageInput': 'chatMessage'
  },

  initialize: function () {

    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var game = $('#gamePage').html();
    this.$el.html(game);
  },

  chatMessage: function(event){

    var $messageInput = $('#messageInput'),
        text = $messageInput.val();
    //var text = $(event.delegateTarget);

    var chat = ref.child('game_page'),
      message = chat.child('chat'),
      message1 = message.child('message');

    if (event.keyCode === 13) {

      message1.set({text: text});
      //chat.push({text: text});
      $messageInput.val('');

      //callback, reacting on new child added, snapshot gives us our data
      message.on('child_added', function (snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.text);
      });

      function displayChatMessage(text) {
        var $messagesDiv = $('.messagesDiv');
        $('<p></p>').text(text).prependTo($messagesDiv);
        $messagesDiv[0].scrollTop = $messagesDiv[0].scrollHeight;
      }
    }


  }

  //TODO finish this page


});
