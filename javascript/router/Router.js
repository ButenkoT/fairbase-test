var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'register': 'userNew',
    'login': 'userLogin',
    'info_page': 'infoPage',
    'game_page': 'gamePage',
    '*anythingElse': 'pageNotFound'
  },

  index: function () {
    var welcomeShow = new app.Views.WelcomePage();
  },

  userNew: function () {
    var registration = new app.Views.UserRegistration();
  },

  userLogin: function () {
    var userLog = new app.Views.UserLogin();
  },

  infoPage: function(){
    var infoPageShow = new app.Views.InfoPage();
  },

  gamePage: function(){
    var game = new app.Views.GamePage();
  },

  pageNotFound: function () {
    app.router.navigate('', {trigger: true});
  }
});
