describe('welcome.js spec', function () {
  var welcome;

  beforeEach(function () {
    welcome = new app.Views.WelcomePage();
  });

  describe('when welcome-view is constructing', function () {

    it('should exist', function () {
      expect(welcome).toBeDefined();
    });

  });

  describe('when welcome-view is rendered', function () {

    beforeEach(function () {
      welcome.render();
    });

    it ('should create welcomeForm', function () {
      expect(welcome.$el).toBe('div');
    });

  });

});

