window.ref = new Firebase('https://blazing-torch-6289.firebaseio.com');

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
      app.router.navigate('', {trigger: true});
    })

    .on('click', '.tw-login', function () {
      ref.authWithOAuthPopup("twitter", function (error, authData) {
        console.log(arguments);
        if (authData) {

          console.log(authData.twitter.accessToken + ", User name: " + authData.twitter.displayName);
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

    .on('click', '.anonymous', function () {
      ref.authAnonymously(function (error, authData) {
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

  //listening for authentication events
  ref.onAuth(function (authData) {
    if (authData) {
      //TODO show user name
      // user authenticated with Firebase
      console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
      $('.log').addClass('hidden');
      $('.logout').removeClass('hidden');

      app.router.navigate('info_page', {trigger: true});
    } else {
      // user is logged out
      console.log('logged out');
      $('.log').removeClass('hidden');
      $('.logout').addClass('hidden');
    }
  });
});

