var app = app || {};
app.Views = app.Views || {};

app.Views.UserRegistration = Backbone.View.extend({
  tag: 'div',
  id: 'newUserForm',
  events: {
    'submit form': 'createUser'
  },

  initialize: function () {
    //$('#main').empty();
    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var registrationForm = $('#userNew').html();
    this.$el.html(registrationForm);
  },

  createUser: function (event) {
    event.preventDefault();
    var $form = $(event.delegateTarget);
    app.ref.createUser(
      {
        displayName: $form.find('[name="nickname"]').val(),
        email: $form.find('[name="email"]').val(),
        password: $form.find('[name="password"]').val()
      },
      function (error, auth) {
        if (error) {
          console.log("Error creating user:", error);
          return;
        }
        console.log("User created successfully");
        app.router.navigate('', {trigger: true});
      }
    );
  }
});

//TODO: refactor saving name, cos cannot reach name