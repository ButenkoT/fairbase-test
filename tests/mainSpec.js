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
      $('.container').append('div#main');
      welcome.render();
    });

    afterEach(function(){
      $('.container').empty();
    });


    it ('should create welcomeForm', function () {
      expect(($('#main').find('#welcomeForm')).length).toEqual(1);
    });

  });

});

