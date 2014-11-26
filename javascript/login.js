
$(document).ready(function () {
  $(document.body)

    .on('click', '.fb-login', function () {
      app.ref.authWithOAuthPopup("facebook", function (error, authData) {
        console.log(arguments);
        if (authData) {
          //When the user successfully logs in we will get back an accessToken in the authData object
          console.log(authData.facebook.accessToken);
          app.router.navigate('info_page', {trigger: true});
        } else {
          app.ref.unauth();
        }
      }, {scope: "email,public_profile"});
    })

    .on('click', '.logout', function () {
      app.ref.unauth();
      app.router.navigate('', {trigger: true});
    })

    .on('click', '.tw-login', function () {
      app.ref.authWithOAuthPopup("twitter", function (error, authData) {
        console.log(arguments);
        if (authData) {

          console.log(authData.twitter.accessToken + ", User name: " + authData.twitter.displayName);
          app.router.navigate('info_page', {trigger: true});
        } else {
          app.ref.unauth();
        }
      }, {remember: "sessionOnly"});
    })

    .on('click', '.git-login', function () {
      app.ref.authWithOAuthPopup("github", function (error, authData) {
        console.log(arguments);
        if (authData) {

          console.log(authData.github.accessToken);

          app.router.navigate('info_page', {trigger: true});
        } else {
          app.ref.unauth();
        }
      }, {remember: "sessionOnly", scope: "user"});

    })

    .on('click', '.anonymous', function () {
      app.ref.authAnonymously(function (error, authData) {
        if (error) {
          // There was an error logging in anonymously
          console.log('There was an error logging in anonymously:' + error);
        } else {
          // User authenticated with Firebase
          console.log(authData.accessToken);
          app.router.navigate('info_page', {trigger: true});
        }
      }, {
        remember: "sessionOnly"
      });
    })
  ;

  //listening for authentication events
  app.ref.onAuth(function (authData) {
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

