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
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

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


let $nav = $('.nav');
let $navLinks = $('.nav ul li a');
let $content= $('.content');

let colors = [];

$(document).ready(function () {

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


$(".open-modal").click(function() {
	$(".modal").addClass("-opening");
	window.setTimeout(function() {
		//$("body").addClass("no-scroll");
		$(".modal").addClass("-open");
		$(".modal").removeClass("-opening");
	}, 600);
});
$(".close-modal").click(function() {
	$(".modal").addClass("-closing");
	window.setTimeout(function() {
		$(".modal").removeClass("-open");
		$(".modal").removeClass("-closing");
		$("body").removeClass("no-scroll");
	}, 350);
});
//
// console.log(0);
// $(".evaluate .level").each(function() {
// 	console.log(1);
// 	$(this).click(function() {
// 		console.log(2);
// 		$(".evaluate .level").removeClass("-active");
// 		$(this).addClass("-active");
// 	});
// });


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




$(".toggle-visible").focusin(function(){
	$(this).addClass("-visible");
});

$(".toggle-visible input").blur(function(){
	$(this).parent().removeClass("-visible");
	$(this).parent().parent().removeClass("-visible");
});

$(".add-item").click(function(){
	$(".list").append('<div class="item"><span>Job</span><i class="icon -pencil"></i></div>');
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



var IMG_WIDTH = 500;
var currentImg = 0;
var maxImages = 3;
var speed = 500;
var imgs;
var swipeOptions = {
		triggerOnTouchEnd: true,
		swipeStatus: swipeStatus,
		allowPageScroll: "vertical",
		threshold: 75
};
$(function () {
		imgs = $(".slider");
		imgs.swipe(swipeOptions);
});
/**
 * Catch each phase of the swipe.
 * move : we drag the div
 * cancel : we animate back to where we were
 * end : we animate to the next image
 */
function swipeStatus(event, phase, direction, distance) {
		//If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
		if (phase == "move" && (direction == "left" || direction == "right")) {
				var duration = 0;
				if (direction == "left") {
						scrollImages((IMG_WIDTH * currentImg) + distance, duration);
				} else if (direction == "right") {
						scrollImages((IMG_WIDTH * currentImg) - distance, duration);
				}
		} else if (phase == "cancel") {
				scrollImages(IMG_WIDTH * currentImg, speed);
		} else if (phase == "end") {
				if (direction == "right") {
						previousImage();
				} else if (direction == "left") {
						nextImage();
				}
		}
}
function previousImage() {
		currentImg = Math.max(currentImg - 1, 0);
		scrollImages(IMG_WIDTH * currentImg, speed);
}
function nextImage() {
		currentImg = Math.min(currentImg + 1, maxImages - 1);
		scrollImages(IMG_WIDTH * currentImg, speed);
}
/**
 * Manually update the position of the imgs on drag
 */
function scrollImages(distance, duration) {
		imgs.css("transition-duration", (duration / 1000).toFixed(1) + "s");
		//inverse the number we set in the css
		var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
		imgs.css("transform", "translate(" + value + "px,0)");
}
