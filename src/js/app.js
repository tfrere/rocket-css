import 					'../index.html';
import 					'../css/main.scss';
import $ 				from 'jquery';

$.fn.sticky 	  = 	require('semantic-ui-sticky');
$.fn.accordion  = 	require('semantic-ui-accordion');
$.fn.visibility = 	require('semantic-ui-visibility');
$.fn.popup      = 	require('semantic-ui-popup');

import hljs 		from 'plugins/highlight';
import w3color 	from 'plugins/w3color';
import ntc 			from 'plugins/nameThatColor';

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

const $headers = $('.content header');

$headers.each(function(index) {
	$(this).css("z-index", 999 + index);
});

const $menuLinks = $('nav ul a[href]');
const $accordions = $('.accordion');
const $sectionHeaders = $('section');
const $blocs = $('.bloc');
const $popup = $('.button-popup');

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
	offset: 80,
	onTopPassed: function() {
		const currentHeader = $(this).attr("id");
		console.log(currentHeader);
		$accordions.each(function(index) {
			if (currentHeader == $(this).attr("id").replace('nav-', ''))
				$(this).accordion("open", 0);
			else
				$(this).accordion("close", 0);
		});
	},
	onBottomPassedReverse: function() {
		const currentHeader = $(this).attr("id");
		console.log(currentHeader);
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


$menuLinks.on('click', function(event) {
	var
	id       = $(this).attr('href').replace('#', ''),
	$element = $('#' + id),
	position = $element.offset().top + 10
	;

	$('html, body').animate({
		scrollTop: position
	}, 500);

	window.location.hash = '#' + id;
	event.stopImmediatePropagation();
	event.preventDefault();
	return false;
});


ntc.init();
hljs.initHighlightingOnLoad();


let $nav = $('.nav');
let $navLinks = $('.nav ul li a');
let $content= $('.content');

let colors = [];

$(document).ready(function () {

	setTimeout(function () {

		$('.heading-wrapper').each(function(index) {
			var values = $( this ).find('.heading').css("font-size");
			console.log(showAsFloat(values));
			$(this).find('span').text(showAsFloat(values));
		});

		$('.typo .info h2').each(function(index){
			console.log($( this ).css("font-family"));
			let values = $( this ).css("font-family").match(/^([a-zA-Z "]*),/g)[0];
			$(this).text(values.slice(0, -1));
		});

		$('.color .-first .column').each(function(index){

			colors[index] = {};
			colors[index].hex = hexc($(this).css('backgroundColor'));

			var color = new w3color(colors[index].hex);
			colors[index].rgb = color.toRgbString();
			colors[index].hsl = color.toHslString();
			colors[index].cmyk = color.toCmykString();
			colors[index].name = ntc.name(colors[index].hex)[1];

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

$("#toggleBaseline").click(function(){
	$(".toggle-baseline").toggleClass("show-baseline");
	$("#toggleBaseline").toggleClass("-active");
});
$("#toggleNight").click(function(){
	$("body").toggleClass("dark");
	$("#toggleNight").toggleClass("-active");
	$("#toggleNight i").toggleClass("-moon");
	$("#toggleNight i").toggleClass("-sun");
});

$(".burger-menu").click(function(){
	$(".burger-menu").toggleClass("active");
});


// Progress

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(".loading").each(function(){
	$(this).addClass("toggle-loading");
});

window.setInterval(function(){
	$(".toggle-loading").each(function(){
		$(this).toggleClass("loading");
	});
	$(".progress .bar").each(function() {
		let progressValue = getRandomInt(0,100);
		$(this).css("width",  progressValue+ "%");
		$(this).find("span").text(progressValue+"%");
	});
}, 3000);


$(function(){
	var elem, d, x, y;
	$(".touch, .button:not(.-loading):not([disabled])").click(function(e){
    if($(this).find(".touch-elem").length === 0)
      $(this).prepend("<div class='touch-elem'></div>");

    elem = $(this).find(".touch-elem");
    elem.removeClass("animate");

    if(!elem.height() && !elem.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        elem.css({height: d, width: d});
    }

    x = e.pageX - $(this).offset().left - elem.width()/2;
    y = e.pageY - $(this).offset().top - elem.height()/2;

    elem.css({top: y + 'px', left: x + 'px'}).addClass("animate");
	});
});


$(".input-material input").focus(function(){
	$(".input-material").addClass("focus");
});

$(".input-material input").blur(function(){
	console.log($(".input-material input").val());
	if ($(".input-material input").val() == "")
		$(".input-material").removeClass("focus");
});

//
// $('#typo-head')
//   .sticky({
//     context: '#typography'
//   })
// ;
// $('#color-head')
//   .sticky({
//     context: '#color'
//   })
// ;
// $('#atom-head')
//   .sticky({
//     context: '#atom'
//   })
// ;
