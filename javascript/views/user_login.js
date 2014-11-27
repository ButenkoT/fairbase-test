var app = app || {};
app.Views = app.Views || {};

app.Views.UserLogin = Backbone.View.extend({
  tag: 'div',
  id: 'logUserForm',
  events: {
    'submit form': 'logUser'
  },

  initialize: function () {
    $('#main').html(this.$el);
    this.render();
  },

  render: function () {
    var loginForm = $('#userLogin').html();
    this.$el.html(loginForm);
  },

  logUser: function (event) {
    event.preventDefault();
    var $form = $(event.delegateTarget);

    app.ref.authWithPassword(
      {
        email: $form.find('[name="email"]').val(),
        password: $form.find('[name="password"]').val()
      },

      function (error, authData) {
        if (error) {
          console.log("Error authenticating user:", error);
          return;
        }
        app.router.navigate('info_page', {trigger: true});
      },
      {remember: "sessionOnly"}
    );
  }
});
