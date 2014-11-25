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
    $('#main').empty();
  },

  userNew: function () {
    var registration = new app.Views.UserRegistration();
  },

  userLogin: function () {
    var userLog = new app.Views.UserLogin();
  },

  //showAccount: function(id){
  //  var account = app.accounts.get(id);
  //  if(!account){
  //    app.router.navigate('', true);
  //  } else {
  //    var view = new app.Views.AccountView({model: account});
  //    view.render();
  //  }
  //},
  //
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
