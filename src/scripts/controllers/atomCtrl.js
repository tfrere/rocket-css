app.controller('atomCtrl', function ( $scope, $timeout) {

  console.log(0);
  // 
  // hljs.configure({
  //   tabReplace: '  '
  // });
  //
  // hljs.initHighlightingOnLoad();

  var clipboard = new Clipboard('.copy-button');

  clipboard.on('success', function(e) {
  		$(".toggle-copy-success").addClass("visible");
  		window.setTimeout(function(){
  			$(".toggle-copy-success").removeClass("visible");
  		}, 550);
      e.clearSelection();
  });

  clipboard.on('error', function(e) {
  });

  const $blocs = $('.bloc');

  console.log(1);

  $blocs.visibility({
  	observeChanges: true,
  	once: false,
  	offset: 50,
  	onTopPassed: function() {
  		const currentBloc = $(this);
  		$menuLinks.each(function() {
  			if($(this).attr('href').replace('#', '') == currentBloc.attr("id"))
  				$(this).parent().addClass("active");
  			else
  				$(this).parent().removeClass("active");
  		});
  	},
  	onTopPassedReverse: function() {
  		const currentBloc = $(this);
  		$menuLinks.each(function() {
  			if($(this).attr('href').replace('#', '') == currentBloc.attr("id"))
  				$(this).parent().addClass("active");
  			else
  				$(this).parent().removeClass("active");
  		});
  	}
  });

});
