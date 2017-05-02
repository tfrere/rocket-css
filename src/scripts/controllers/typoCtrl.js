app.controller('typoCtrl', function ( $scope, $timeout) {

  $('.heading-wrapper').each(function(index) {
    var values = $( this ).find('.heading').css("font-size");
    $(this).find('span').text(showAsFloat(values));
  });

  $('.typo .info h2').each(function(index){
    // match the first type
    let value = $( this ).css("font-family").match(/^([a-zA-Z "]*),/g)[0];
    // remove potential quotes
    value = value.replace(/["]+/g, '');
    // remove the comma
    value = value.slice(0, -1);

    $(this).text(value);
  });
  
});
