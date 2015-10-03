app.controller('navCtrl', function ($scope) {
	$scope.trackCreate = function() {
		window.analytics.track('Account Created');
	};

});

app.controller('faqCtrl', function ($scope) {

	analytics.page({ path: '/faq'});
	
	$scope.trackQuestion = function(index) {
		window.analytics.track('question ' + index);
	};

	$scope.questions = [
		{
			title: "Comment m'inscrire au statut d'auto-entrepreneur ?",
			icon: "plane",
			text: "	Vous pouvez vous inscrire directement en ligne ou retirer un dossier d'inscription à la chambres des métiers de votre région. Une fois inscrit, vous devez encore créer un compte dédié à votre activité professionnel. Heureusement, un compte particulier suffi, du moment que celui-ci est dédié à votre activité. "
		},
		{
			title: "Quelles sont mes obligations dans le cas d'une activité artisanale?",
			icon: "plane",
			text: "Dans le cas d'une activité artisanal, et ce depuis 2015, vous avez l'obligation d'effectuer un stage de préparation à l'installation. Pour effectuer ce stage vous devez contacter la chambres des métiers de votre région, dont les coordonnées se trouve iciPour les profession réglementé (dont voici la liste) il est également obligatoire decontracter une assurance professionnel."
		},
		{
			title: "Doit-je payer des cotisation si je ne gagne pas d'argent?",
			icon: "plane",
			text: "Le statut d'auto-entrepreneur n'impose de payer des cotisations que sur le chiffre d'affaire réalisé. Par conséquent, si vous ne gagnez rien, vous ne payez rien."
		},
		{
			title: "Puis-je cumuler les status?",
			icon: "plane",
			text: "Vous ne pouvez cumuler plusieurs activités indépendante. Par contre, vous pouvez par exemple exercer une activité de gérant minoritaire au sein d'une SARL et être auto-entrepreneur."
		},
		{
			title: "Quel limite de chiffre d'affaire?",
			icon: "plane",
			text: "	Deux limite de chiffre d'affaire sont applicable selon la nature de votre activité: - 82 200 € pour une activité de vente de marchandises, d'objets, de fournitures, de denrées à emporter ou à consommer sur place, ou pour des prestations d'hébergement, à l'exception de la location de locaux d'habitation meublés dont le seuil est de 32 900 €.  - 32 900 € pour les prestations de services relevant de la catégorie des bénéfices industriels et commerciaux (BIC) ou des bénéfices non commerciaux (BNC). Pour les créations en cours d'année, ces montants sont réduits en fonction de la durée d'activité."
		}
	];


});

app.controller('contactCtrl', function ($scope) {
	analytics.page({ path: '/contact'});

});

app.controller('aproposCtrl', function ($scope) {
	analytics.page({ path: '/apropos'});
});

app.controller('homeCtrl', function ($scope, mouseParallaxService, $timeout) {

	$scope.isVideoClicked = false;

	$scope.videoClickMask = function() {
		$scope.isVideoClicked = true;
		window.analytics.track('videoOpened');
	}

	mouseParallaxService.init();

	console.log(document.getElementById('waypoint'));
	$timeout(function(){
		var waypoint = new Waypoint({
		  element: document.getElementById('waypoint1'),
		  handler: function(direction) {
		    var e = document.getElementById('circle-image-1');
		    angular.element(e).addClass('fly-right');
		  },
		  offset:450
		});
		var waypoint = new Waypoint({
		  element: document.getElementById('waypoint2'),
		  handler: function(direction) {
		    var e = document.getElementById('circle-image-2');
		    angular.element(e).addClass('fly-left');
		  },
		  offset:450
		});
		var waypoint = new Waypoint({
		  element: document.getElementById('waypoint3'),
		  handler: function(direction) {
		    var e = document.getElementById('circle-image-3');
		    angular.element(e).addClass('fly-right');
		  },
		  offset:450
		});

	}, 100);

	$scope.trackCta1 = function() {
		window.analytics.track('cta1');
	};

	$scope.trackCta2 = function() {
		window.analytics.track('cta2');
	};

    // $(document).ready(function(){
    //     $("body").smoothWheel();
    // });

});