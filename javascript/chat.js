window.chat = new Firebase('https://blazing-torch-6289.firebaseio.com#game_page');
//gameboards = ref.child('gameboards');
//gb1 = gameboards.child('gb1');
//gb2 = gameboards.child('gb2');

//gb2.set({xxx: 123});

// https://blazing-torch-6289.firebaseio.com/gameboards/gb2 ==> {xxx: 123}
// https://blazing-torch-6289.firebaseio.com/gameboards/gb2/xxx ==> 123

//board = new Firebase('https://blazing-torch-6289.firebaseio.com/gameboards/123412341234');
//chat = new Firebase('https://blazing-torch-6289.firebaseio.com/gameboards/123412341234/chat');


//$(function () {
//
//  $(document.body).on('keypress', '#messageInput', function (e) {
//    if (e.keyCode == 13) {
//      var $messageInput = $('#messageInput'),
//        text = $messageInput.val();
//
//      //append info to the list
//      chat.push({text: text});
//
//      $messageInput.val('');
//    }
//  });
//
//  //callback, reacting on new child added, snapshot gives us our data
//  chat.on('child_added', function (snapshot) {
//    var message = snapshot.val();
//    displayChatMessage(message.text);
//  });
//
//  function displayChatMessage(text) {
//    var $messagesDiv = $('.messagesDiv');
//    $('<div></div>').text(text).prepend($('<em></em>').text).appendTo($messagesDiv);
//    $messagesDiv[0].scrollTop = $messagesDiv[0].scrollHeight;
//  };
//
//});