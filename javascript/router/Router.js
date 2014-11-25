var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'register': 'userNew',
    'login': 'userLoginS',
    'info_page': 'infoPage',
    'game_page': 'gamePage',
    '*anythingElse': 'pageNotFound'
  },

  index: function () {
    $('#main').empty()
    //app.accounts.fetch().done(function () {
    //  var appView = new app.Views.AppView({collection: app.accounts});
    //  appView.render();
    //});
  },

  userNew: function () {
    var registration = new app.Views.UserRegistration();
  },

  userLoginS: function () {
    var userLog = new app.Views.UserLogin();
    //userLog.render();
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
    infoPageShow.render();
  },

  gamePage: function(){
    
  },

  pageNotFound: function () {
    app.router.navigate('', {trigger: true});
  }
});
