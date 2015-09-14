'use strict';

describe('devis route', function () {

  beforeEach(function () {
    browser.get('/devis');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('DevisCtrl');
  });

});
