
var app = app || {};
app.ref = new Firebase('https://blazing-torch-6289.firebaseio.com');
app.getName = function(){
  var provider = app.ref.getAuth().provider,
    name;
  if (provider !== 'anonymous'){
    name = app.ref.getAuth()[provider].displayName;
  } else {
    name = 'Anonymous';
  }
  return name;
};

$(function () {
  if ($('#main').length === 0) {
    return;
  }

  app.router = new app.Router();
  Backbone.history.start({pushState: false});
});

