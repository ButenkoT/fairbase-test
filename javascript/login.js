
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
      //TODO registration + saving data
    })

    .on('click', '.login', function () {
      //TODO login with email and password, check on data in db
    })

    .on('click', '.anonymous', function () {
      //TODO enter stay anon + showLogin function
    })
  ;

  ref.onAuth(function (authData) {
    if (authData) {
      //TODO show user name
      // user authenticated with Firebase
      console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
      $('.log').addClass('hidden');
      $('.logout').removeClass('hidden');
    } else {
      // user is logged out
      console.log('logged out');
      $('.log').removeClass('hidden');
      $('.logout').addClass('hidden');

    }
  });
});

