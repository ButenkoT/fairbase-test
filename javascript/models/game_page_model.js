var app = app || {};
app.Models = app.Models || {};

app.Models.GamePage = Backbone.Firebase.Model.extend({
  urlRoot: 'https://blazing-torch-6289.firebaseio.com#game_page',
  autoSync: true
});



//var realtimeModel = new RealtimeModel();
//
//realtimeModel.on('sync', function(model) {
//  console.log('model loaded', model);
//});

// calling .set() will sync the changes to firebase
//// this will fire the sync, change, and change:name events
//realtimeModel.set('name', 'Bob');
