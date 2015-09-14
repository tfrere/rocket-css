'use strict';

describe('home route', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('h1')).first().getText()).toBe('NavCtrl');
  });

});
