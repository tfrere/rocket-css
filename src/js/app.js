import 					'../index.html';
import 					'../css/main.scss';
import $ 				from 'jquery';
import Clipboard 				from 'clipboard';

$.fn.sticky 	  = 	require('semantic-ui-sticky');
$.fn.accordion  = 	require('semantic-ui-accordion');
$.fn.visibility = 	require('semantic-ui-visibility');
$.fn.popup      = 	require('semantic-ui-popup');

import swipe 		from 'plugins/touchswipe';
import hljs 		from 'plugins/highlight';
import w3color 	from 'plugins/w3color';
import ntc 			from 'plugins/nameThatColor';
import List   	from 'plugins/jsfilter';
import whichCulture   	from 'plugins/coloursInCulture';

var options = {
  valueNames: [ 'name' ]
};

var userList = new List('symbol-icon', options);

$(".toggle-icon-size").click(function() {
  $('#symbol-icon .list').toggleClass("big");
});

// FUNCTIONS

const showAsFloat = (value) => {
	return !isNaN(+value) ? (+value).toFixed(2) : value;
}

const hexc = (colorval) => {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('');
}

// INITS

hljs.configure({
  tabReplace: '  '
});

ntc.init();

hljs.initHighlightingOnLoad();

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

// READY

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

let colors = [];

$headers.each(function(index) {
  $(this).css("z-index", 999 + index);
});

$accordions.accordion({
	exclusive: true,
	collapsible: false,
  selector: {
    trigger: '.title2'
  }
});

$sectionHeaders.visibility({
	observeChanges: true,
	once: false,
	offset: 175,
	onTopPassed: function() {
		const currentHeader = $(this).attr("id");


		$accordions.each(function(index) {
			if (currentHeader == $(this).attr("id").replace('nav-', ''))
				$(this).accordion("open", 0);
			else
				$(this).accordion("close", 0);
		});
	},
	onBottomPassedReverse: function() {
		const currentHeader = $(this).attr("id");


		$accordions.each(function(index) {
			if (currentHeader == $(this).attr("id").replace('nav-', ''))
				$(this).accordion("open", 0);
			else
				$(this).accordion("close", 0);
		});
	}
});

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

$(function() {


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


	setTimeout(function () {

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

	}, 1000);


});
