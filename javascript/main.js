//reference to the db at Firebase
window.ref = new Firebase('https://blazing-torch-6289.firebaseio.com/');

$(document).ready(function () {




  $('#messageInput').keypress(function (e) {
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

  //callback, reacting on new child added, snapshot gives us our data
  ref.on('child_added', function (snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
  });

  function displayChatMessage(name, text) {
    var $messagesDiv = $('.messagesDiv');
    $('<div></div>').text(text).prepend($('<em></em>').text(name + ': ')).appendTo($messagesDiv);
    $messagesDiv[0].scrollTop = $messagesDiv[0].scrollHeight;
  };


});