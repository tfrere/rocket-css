app.controller('symbolCtrl', function ( $scope, $timeout) {

  var options = {
    valueNames: [ 'name' ]
  };

  var userList = new List('symbol-icon', options);

  $(".toggle-icon-size").click(function() {
    $('#symbol-icon .list').toggleClass("big");
  });
  
});
