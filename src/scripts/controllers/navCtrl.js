app.controller('navCtrl', function ($scope, $rootScope) {
	$scope.trackCreate = function() {
		window.analytics.track('Account Created');
	};
	$rootScope.$on('$stateChangeError', function(event) {
	  $state.go('404');
	});
 // $scope.htmlReady();
 	$scope.seo = {};
 	$scope.seo.title = "Peon";
 	$scope.seo.desc = "Assistant personnel pour auto-entrepreneur. Il vous accompagne dans la gestion de vos clients, devis, factures, calcul de vos cotisations et traitement de vos impayés.";
 	$scope.seo.keywords = "peon, devis, facture, auto entrepreneur, comptabilité, prestataire de service, auto entreprenariat, impayés, signature electronique, libéral, artisan, s'inscrire, démarche création";
});