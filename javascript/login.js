
$(document).ready(function () {
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
    })

    .on('click', '.tw-login', function () {
      ref.authWithOAuthPopup("twitter", function (error, authData) {
        console.log(arguments);
        if (authData) {

          console.log(authData.twitter.accessToken);
        } else {
          ref.unauth();
        }
      }, {remember: "sessionOnly"});
    })

    .on('click', '.git-login', function () {
      ref.authWithOAuthPopup("github", function (error, authData) {
        console.log(arguments);
        if (authData) {

          console.log(authData.github.accessToken);

        } else {
          ref.unauth();
        }
      }, {remember: "sessionOnly", scope: "user"});

    })

    .on('click', '.register', function () {
      $('#main').empty();
      var registrationForm = $('#userNew').html();
      //var registrationFormHTML = Handlebars.compile(registrationForm);

      $('#main').append(registrationForm);
      //$('#main').append(registrationFormHTML);

      $('#userNew').on('click', 'submit', function (e) {
        e.preventDefault();
        ref.createUser({
          nickname : $('#user_nickname').val(),
          email    : $('#user_email').val(),
          password : $('#user_password').val()
        }, function(error) {
          if (error === null) {
            alert('Success!');
            console.log("User created successfully" + user_nickname + user_email);
          } else {
            console.log("Error creating user:", error);
          }
        });
      });
    })

    .on('click', '.login', function () {
      $('#main').empty();
      var loginForm = $('#userLogin').html();

      $('#main').append(loginForm);

      $('#userLogin').on('click', 'submit', function (e) {
        e.preventDefault();
        ref.authWithPassword({
          email    : $('#user_email').val(),
          password : $('#user_password').val()
        }, function(error, authData) {
          if (error === null) {
            // user authenticated with Firebase
            console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
          } else {
            console.log("Error authenticating user:", error);
          }
        });
      }, {
        remember: "sessionOnly"
      });
    })

    .on('click', '.anonymous', function () {
      ref.authAnonymously(function(error, authData) {
        if (error) {
          // There was an error logging in anonymously
          console.log('There was an error logging in anonymously:' + error);
        } else {
          // User authenticated with Firebase
          console.log(authData.accessToken);
        }
      }, {
        remember: "sessionOnly"
      });
    })
  ;

  ref.onAuth(function (authData) {
    if (authData) {
      //TODO show user name
      // user authenticated with Firebase
      console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
      $('.log').addClass('hidden');
      $('.logout').removeClass('hidden');
      $('#main').empty();
      var introPage = $('#introPage').html();

      $('#main').append(introPage);
    } else {
      // user is logged out
      console.log('logged out');
      $('.log').removeClass('hidden');
      $('.logout').addClass('hidden');
      $('#main').empty();
    }
  });
});

