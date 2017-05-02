app.controller('colorCtrl', function ( $scope, $timeout) {


  $(function() {

    const $headers = $('.content header');
    const $menuLinks = $('nav ul a[href]');
    const $accordions = $('.accordion');
    const $sectionHeaders = $('section');
    const $blocs = $('.bloc');
    const $popup = $('.button-popup');

    const $cultureChoice = $('#culture-choice');
    const $visualDefficiencyChoice = $('#visual-defficiency-choice');

    const $nav = $('.nav');
    const $navLinks = $('.nav ul li a');
    const $content= $('.content');

    ntc.init();
    var colors = [];

    $visualDefficiencyChoice.change(function() {
      $("html").removeClass();
      $("html").addClass($( this ).val());
    });

    $cultureChoice.change(function() {
        var culture = $( this ).val();
    		$('.color .-first .column').each(function(index){
    			colors[index] = {};
    			colors[index].hex = hexc($(this).css('backgroundColor'));
          let colorMatch = new whichCulture(colors[index].hex, culture);
          colorMatch.init();
          let cultures = colorMatch.init().cultures;
          const name = colorMatch.init().name;
          $(this).find('.culture').html("");
          let text = "<h6>Symbolic for " + name + " in " + culture + "<h6>";
          for(var i = 0; i < cultures.length; i++) {
            text += "<div class='tag -transparent'><span>" + cultures[i] + "</span></div>";
          }
          $(this).find('.culture').html(text);
    		});
      });

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

  		$('.color .-first .column').each(function(index){

  			colors[index] = {};
  			colors[index].hex = hexc($(this).css('backgroundColor'));

  			var color = new w3color(colors[index].hex);
  			colors[index].rgb = color.toRgbString();
  			colors[index].hsl = color.toHslString();
  			colors[index].cmyk = color.toCmykString();
  			colors[index].name = ntc.name(colors[index].hex)[1];

        let colorMatch = new whichCulture(colors[index].hex, "westernEuropean");
        colorMatch.init();
        let cultures = colorMatch.init().cultures;
        const name = colorMatch.init().name;
        $(this).find('.culture').html("");
        let text = "<h6>Symbolic for " + name + " in westernEuropean<h6>";
        for(var i = 0; i < cultures.length; i++) {
          text += "<div class='tag -transparent'><span>" + cultures[i] + "</span></div>";
        }
        $(this).find('.culture').html(text);

  			$(this).find('.hex').html(colors[index].hex.slice(1));
  			$(this).find('.rgb').html(colors[index].rgb.slice(4, -1));
  			$(this).find('.hsb').html(colors[index].hsl.slice(4, -1));
  			$(this).find('.cmyk').html(colors[index].cmyk.slice(5, -1));
  			$(this).find('.name').html(colors[index].name);
  		});

  		$('.color .-last .column').each(function(index){
  			colors[index] = {};
  			colors[index].hex = hexc($(this).css('backgroundColor'));
  			colors[index].name = ntc.name(colors[index].hex)[1];
  			$(this).find('.name').html(colors[index].name);
  		});


  });


});
