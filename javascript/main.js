
var app = app || {};
app.firebase = localStorage.firebase || 'https://tictactoewithchat.firebaseio.com';
app.ref = new Firebase(app.firebase);

//TODO refactor this function getName
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

app.uid = app.ref.getAuth().uid;
app.router = new app.Router();
Backbone.history.start({pushState: false});
