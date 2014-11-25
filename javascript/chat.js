window.ref = new Firebase('https://blazing-torch-6289.firebaseio.com');
gameboards = ref.child('gameboards');
gb1 = gameboards.child('gb1');
gb2 = gameboards.child('gb2');

gb2.set({xxx: 123});


// https://blazing-torch-6289.firebaseio.com/gameboards/gb2 ==> {xxx: 123}
// https://blazing-torch-6289.firebaseio.com/gameboards/gb2/xxx ==> 123

//board = new Firebase('https://blazing-torch-6289.firebaseio.com/gameboards/123412341234');
//chat = new Firebase('https://blazing-torch-6289.firebaseio.com/gameboards/123412341234/chat');


$(function () {

  $(document.body).on('keypress', '#messageInput', function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val(),
        $messageInput = $('#messageInput'),
        text = $messageInput.val();

      //saving data to db
      // ref.set('User ' + name + ' says ' + text);

      //creating an object, it ll automatically create locations for name and text as children of ref location
      // ref.set({name: name, text: text});

      //this will append info to the list
      ref.push({name: name, text: text});

      $messageInput.val('');
    }
  });

  ////callback, reacting on new child added, snapshot gives us our data
  //ref.on('child_added', function (snapshot) {
  //  var message = snapshot.val();
  //  displayChatMessage(message.name, message.text);
  //});
  //
  //function displayChatMessage(name, text) {
  //  var $messagesDiv = $('.messagesDiv');
  //  $('<div></div>').text(text).prepend($('<em></em>').text(name + ': ')).appendTo($messagesDiv);
  //  $messagesDiv[0].scrollTop = $messagesDiv[0].scrollHeight;
  //};

});