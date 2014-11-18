$(document).ready(function () {
  //reference to the db at Firebase
  window.ref = new Firebase('https://blazing-torch-6289.firebaseio.com/');

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


  $(document.body)

    .on('click', '.fb-login', function () {
      ref.authWithOAuthPopup("facebook", function (error, authData) {
        console.log(arguments);
        if (authData) {
          //When the user successfully logs in we will get back an accessToken in the authData object
          console.log(authData.facebook.accessToken);
        } else {
          ref.unauth();
        }
      }, {scope: "email,public_profile"});
    })

    .on('click', '.logout', function () {
      ref.unauth();

      //TODO call showLogin function
    })

    .on('click', '.tw-login', function(){
      //TODO twitter login here
    })

    .on('click', '.register', function(){
      //TODO registration + saving data
    })

    .on('click', '.login', function(){
      //TODO login with email and password, check on data in db
    })

    .on('click', '.anonymous', function(){
      //TODO enter stay anon + showLogin function
    })
  ;

  //TODO function showLogin - no login name + show login buttons

  ref.onAuth(function(authData) {
    if (authData) {
      //TODO show user name and logout button
      // user authenticated with Firebase
      console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
    } else {
      // TODO call showLogin function
      // user is logged out
    }
  });

});